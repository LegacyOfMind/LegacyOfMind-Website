# Legacy of Mind Website

Promotional React/Vite website for **Legacy of Mind**, focused on Steam wishlist conversion, Closed Beta recruitment, community clips, and creator visibility.

## Run Locally

```bash
npm install
npm run dev
```

Open the local URL Vite prints, usually:

```text
http://127.0.0.1:5173
```

## Build

```bash
npm run build
```

The production output is created in `dist/`.

## File Structure

```text
src/
  assets/
    images/
    logos/
  components/
    Atmosphere.tsx
    CTAButton.tsx
    ClipCard.tsx
    Footer.tsx
    Hero.tsx
    Leaderboard.tsx
    Navbar.tsx
    NightmareSection.tsx
    SectionTitle.tsx
    SocialLinks.tsx
    SubmitClipForm.tsx
  data/
    clips.ts
    leaderboard.ts
    nightmareSections.ts
    siteLinks.ts
  pages/
    ClosedBeta.tsx
    Community.tsx
    Home.tsx
  App.tsx
  index.css
  main.tsx
```

## Where To Edit Content

- Replace Steam, Discord, YouTube, TikTok, Instagram, and email links in `src/data/siteLinks.ts`.
- Replace homepage marketing panels in `src/data/nightmareSections.ts`.
- Replace leaderboard rows in `src/data/leaderboard.ts`.
- Replace featured clip cards in `src/data/clips.ts`.
- Replace placeholder screenshot/card art inside `NightmareSection.tsx` when gameplay images are ready.

## Brand Assets

The live site currently serves brand files from:

```text
public/assets/logos/
```

Expected files:

```text
LoM Logo.png
LoM Only Text.png
LoM Text Logo.png
Wishlist Now on Steam.png
```

The matching `src/assets/images` and `src/assets/logos` folders are also present if you later prefer importing assets directly through Vite.

## Forms

The clip form opens as a modal and is wired for Supabase Storage + a Supabase table. It collects:

- Anonymous submission choice
- Alias
- Platform
- MP4 file upload
- Additional Comment, optional

Alias and platform are required only when anonymous submission is off. MP4 upload is always required. When Supabase is configured, MP4 files upload to cloud storage and metadata is saved to a table for review.

## Supabase Clip Setup

Create a `.env` file from `.env.example`:

```text
VITE_SUPABASE_URL=https://YOUR_PROJECT_ID.supabase.co
VITE_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY
VITE_SUPABASE_CLIP_BUCKET=clip-submissions
```

In Supabase:

1. Create a public storage bucket named `clip-submissions`.
2. Create a table named `clip_submissions`.
3. Add columns:

```sql
id uuid primary key,
anonymous boolean not null default false,
alias text,
platform text,
additional_comment text,
video_path text not null,
video_url text not null,
status text not null default 'pending',
created_at timestamptz not null default now()
```

4. Add storage/table policies that allow anonymous insert/upload if you want public submissions.

Hidden review route:

```text
/submissions-dashboard
```

That page loads saved submissions and shows each clip in a browser video player, with alias/platform or anonymous status, comment, date, status, and storage path.
