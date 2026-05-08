export type ClipSubmissionPayload = {
  anonymous: boolean;
  alias: string | null;
  platform: string | null;
  comment: string;
  file: File;
};

export type ClipSubmission = {
  id: string;
  anonymous: boolean;
  alias: string | null;
  platform: string | null;
  comment: string;
  video_path: string;
  video_url: string;
  status: 'pending' | 'reviewed';
  created_at: string;
};

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;
const bucket = (import.meta.env.VITE_SUPABASE_CLIP_BUCKET as string | undefined) ?? 'clip-submissions';

function requireSupabaseConfig() {
  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Clip uploads are not connected yet. Add your Supabase environment variables, then restart the dev server.');
  }
}

function cleanFileName(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9.]+/g, '-').replace(/-+/g, '-');
}

export async function submitClip(payload: ClipSubmissionPayload) {
  requireSupabaseConfig();

  const id = crypto.randomUUID();
  const createdAt = new Date().toISOString();
  const videoPath = `${id}/${cleanFileName(payload.file.name)}`;

  const uploadResponse = await fetch(`${supabaseUrl}/storage/v1/object/${bucket}/${videoPath}`, {
    method: 'POST',
    headers: {
      apikey: supabaseAnonKey!,
      Authorization: `Bearer ${supabaseAnonKey}`,
      'Content-Type': payload.file.type || 'video/mp4',
      'x-upsert': 'false',
    },
    body: payload.file,
  });

  if (!uploadResponse.ok) {
    throw new Error('The MP4 could not be uploaded. Check your Supabase bucket policy and try again.');
  }

  const publicUrl = `${supabaseUrl}/storage/v1/object/public/${bucket}/${videoPath}`;

  const insertResponse = await fetch(`${supabaseUrl}/rest/v1/clip_submissions`, {
    method: 'POST',
    headers: {
      apikey: supabaseAnonKey!,
      Authorization: `Bearer ${supabaseAnonKey}`,
      'Content-Type': 'application/json',
      Prefer: 'return=representation',
    },
    body: JSON.stringify({
      id,
      anonymous: payload.anonymous,
      alias: payload.anonymous ? null : payload.alias,
      platform: payload.anonymous ? null : payload.platform,
      additional_comment: payload.comment,
      video_path: videoPath,
      video_url: publicUrl,
      status: 'pending',
      created_at: createdAt,
    }),
  });

  if (!insertResponse.ok) {
    throw new Error('The clip uploaded, but the submission details could not be saved. Check your Supabase table policy.');
  }

  return { id, publicUrl };
}

export async function listClipSubmissions(): Promise<ClipSubmission[]> {
  requireSupabaseConfig();

  const response = await fetch(
    `${supabaseUrl}/rest/v1/clip_submissions?select=id,anonymous,alias,platform,additional_comment,video_path,video_url,status,created_at&order=created_at.desc`,
    {
      headers: {
        apikey: supabaseAnonKey!,
        Authorization: `Bearer ${supabaseAnonKey}`,
      },
    },
  );

  if (!response.ok) {
    throw new Error('Could not load submissions. Check your Supabase table policy.');
  }

  const rows = (await response.json()) as Array<{
    id: string;
    anonymous: boolean | null;
    alias: string | null;
    platform: string | null;
    additional_comment: string | null;
    video_path: string;
    video_url: string;
    status: 'pending' | 'reviewed';
    created_at: string;
  }>;

  return rows.map((row) => ({
    id: row.id,
    anonymous: Boolean(row.anonymous),
    alias: row.alias,
    platform: row.platform,
    comment: row.additional_comment ?? '',
    video_path: row.video_path,
    video_url: row.video_url,
    status: row.status,
    created_at: row.created_at,
  }));
}
