import type { FormEvent } from 'react';
import { UploadCloud } from 'lucide-react';
import { useMemo, useRef, useState } from 'react';
import { submitClip } from '../services/clipSubmissions';

type UploadStatus = 'idle' | 'selected' | 'uploading' | 'uploaded' | 'failed';

type FormState = {
  anonymous: boolean;
  alias: string;
  platform: string;
  comment: string;
  file: File | null;
};

type FormErrors = Partial<Record<keyof FormState | 'submit', string>>;

const emptyForm: FormState = {
  anonymous: false,
  alias: '',
  platform: '',
  comment: '',
  file: null,
};

const platforms = ['YouTube', 'TikTok', 'Instagram', 'Twitch', 'X / Twitter', 'Discord', 'Other'];

export function SubmitClipForm() {
  const [form, setForm] = useState<FormState>(emptyForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [uploadStatus, setUploadStatus] = useState<UploadStatus>('idle');
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const isFormValid = useMemo(() => {
    const hasValidFile = form.file?.type === 'video/mp4';
    if (form.anonymous) return Boolean(hasValidFile);
    return Boolean(form.alias.trim() && form.platform && hasValidFile);
  }, [form.alias, form.anonymous, form.file, form.platform]);

  const uploadStatusText = useMemo(() => {
    if (uploadStatus === 'uploading') return 'Uploading clip...';
    if (uploadStatus === 'uploaded') return 'Clip uploaded successfully';
    if (uploadStatus === 'failed') return 'Upload failed. Please try again.';
    if (form.file) return `Clip selected: ${form.file.name}`;
    return 'No clip selected';
  }, [form.file, uploadStatus]);

  function clearFile() {
    setForm((current) => ({ ...current, file: null }));
    setUploadStatus('idle');
    setErrors((current) => ({ ...current, file: undefined, submit: undefined }));
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  }

  function resetForm() {
    setForm(emptyForm);
    setErrors({});
    setSuccess(false);
    setIsSubmitting(false);
    setUploadStatus('idle');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  }

  function validate() {
    const nextErrors: FormErrors = {};

    if (!form.anonymous && !form.alias.trim()) nextErrors.alias = 'Alias is required unless you submit anonymously.';
    if (!form.anonymous && !form.platform) nextErrors.platform = 'Choose a platform or submit anonymously.';
    if (!form.file) nextErrors.file = 'An MP4 file is required.';
    if (form.file && form.file.type !== 'video/mp4') nextErrors.file = 'Please upload an MP4 file.';

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!isFormValid || !validate()) return;

    setIsSubmitting(true);
    setSuccess(false);
    setErrors({});
    setUploadStatus('uploading');

    try {
      await submitClip({
        anonymous: form.anonymous,
        alias: form.anonymous ? null : form.alias.trim(),
        platform: form.anonymous ? null : form.platform,
        comment: form.comment.trim(),
        file: form.file!,
      });
      setUploadStatus('uploaded');
      setSuccess(true);
      setForm(emptyForm);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    } catch (error) {
      setUploadStatus('failed');
      setErrors({
        submit: error instanceof Error ? error.message : 'Something went wrong while submitting the clip.',
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="submit-clip-form" className="scroll-mt-32 mx-auto max-w-5xl px-4 pb-20 pt-6 lg:px-6">
      <div className="border border-border bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(0,0,0,0.42))] p-5 shadow-insetStone transition duration-300 hover:border-stone/25 md:p-8">
        <div className="flex flex-col gap-5 border-b border-border pb-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.34em] text-[var(--color-earth)]">Clip submission</p>
            <h2 className="mt-3 font-display text-3xl uppercase tracking-[0.08em] text-stone md:text-4xl">
              Submit Clip
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
              Upload an MP4 clip for a chance to be featured on the Legacy of Mind website or official channels. You can choose to be credited, or submit anonymously.
            </p>
          </div>
          <button
            type="button"
            onClick={resetForm}
            className="inline-flex min-h-10 items-center justify-center border border-border px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-muted transition hover:border-stone/45 hover:text-stone"
          >
            Clear Form
          </button>
        </div>

        {success && (
          <div className="mt-6 border border-stone/25 bg-white/[0.04] p-4 text-sm text-[var(--color-parchment)]">
            Successfully submitted
          </div>
        )}

        <form className="mt-7 grid gap-5" onSubmit={handleSubmit} noValidate>
          <label className="flex gap-3 border border-border bg-white/[0.025] p-4 text-sm leading-6 text-muted">
            <input
              type="checkbox"
              checked={form.anonymous}
              onChange={(event) => {
                const anonymous = event.target.checked;
                setForm((current) => ({
                  ...current,
                  anonymous,
                  alias: anonymous ? '' : current.alias,
                  platform: anonymous ? '' : current.platform,
                }));
                setSuccess(false);
                setErrors((current) => ({ ...current, alias: undefined, platform: undefined }));
              }}
              className="mt-1 h-4 w-4 accent-stone"
            />
            <span>
              <span className="block text-stone">Submit anonymously</span>
              <span className="mt-1 block text-xs text-muted">
                Choose this if you do not want your name or platform shown if the clip is featured.
              </span>
            </span>
          </label>

          <div className="grid gap-5 md:grid-cols-2">
            <label className="grid gap-2 text-sm text-muted">
              <span>
                Alias <span className="text-muted/70">(What your name is on the platform you want to be credited on)</span>
              </span>
              <input
                disabled={form.anonymous}
                className="form-field disabled:cursor-not-allowed disabled:border-border/60 disabled:bg-white/[0.025] disabled:text-muted/45"
                value={form.alias}
                onChange={(event) => {
                  setForm((current) => ({ ...current, alias: event.target.value }));
                  setSuccess(false);
                }}
              />
              {errors.alias && <span className="text-xs text-[var(--color-earth)]">{errors.alias}</span>}
            </label>

            <label className="grid gap-2 text-sm text-muted">
              <span>
                Platform <span className="text-muted/70">(Where you want to be credited if your clip is featured)</span>
              </span>
              <select
                disabled={form.anonymous}
                className="form-field disabled:cursor-not-allowed disabled:border-border/60 disabled:bg-white/[0.025] disabled:text-muted/45"
                value={form.platform}
                onChange={(event) => {
                  setForm((current) => ({ ...current, platform: event.target.value }));
                  setSuccess(false);
                }}
              >
                <option value="">Select platform</option>
                {platforms.map((platform) => (
                  <option key={platform} value={platform}>
                    {platform}
                  </option>
                ))}
              </select>
              {errors.platform && <span className="text-xs text-[var(--color-earth)]">{errors.platform}</span>}
            </label>
          </div>

          <label className="grid gap-2 text-sm text-muted">
            <span>
              MP4 file upload <span className="text-muted/70">(Upload the clip you want to submit)</span>
            </span>
            <input
              ref={fileInputRef}
              type="file"
              accept="video/mp4,.mp4"
              className="form-field file:mr-4 file:border-0 file:bg-stone file:px-4 file:py-2 file:text-black"
              onChange={(event) => {
                const file = event.target.files?.[0] ?? null;
                setForm((current) => ({ ...current, file }));
                setUploadStatus(file ? 'selected' : 'idle');
                setSuccess(false);
                setErrors((current) => ({ ...current, file: undefined, submit: undefined }));
              }}
            />
            <div
              className={`flex flex-col gap-3 border p-3 text-xs sm:flex-row sm:items-center sm:justify-between ${
                uploadStatus === 'failed'
                  ? 'border-[var(--color-earth)]/45 text-[var(--color-parchment)]'
                  : uploadStatus === 'uploaded'
                    ? 'border-stone/35 text-stone'
                    : 'border-border text-muted'
              }`}
            >
              <span>{uploadStatusText}</span>
              {form.file && uploadStatus !== 'uploading' && (
                <button
                  type="button"
                  onClick={clearFile}
                  className="self-start border border-border px-3 py-1 text-[0.68rem] uppercase tracking-[0.14em] text-muted transition hover:border-stone/45 hover:text-stone sm:self-auto"
                >
                  Remove file
                </button>
              )}
            </div>
            {errors.file && <span className="text-xs text-[var(--color-earth)]">{errors.file}</span>}
          </label>

          <label className="grid gap-2 text-sm text-muted">
            <span>
              Additional Comment <span className="text-muted/70">(Optional - add anything you want me to know about the clip)</span>
            </span>
            <textarea
              className="form-field min-h-28 resize-y"
              value={form.comment}
              onChange={(event) => {
                setForm((current) => ({ ...current, comment: event.target.value }));
                setSuccess(false);
              }}
            />
          </label>

          {errors.submit && (
            <div className="border border-[var(--color-earth)]/40 bg-white/[0.04] p-4 text-sm leading-6 text-[var(--color-parchment)]">
              {errors.submit}
            </div>
          )}

          <button
            type="submit"
            disabled={!isFormValid || isSubmitting}
            className="group inline-flex min-h-12 items-center justify-center gap-2.5 border border-stone/60 bg-stone px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-black transition hover:bg-white disabled:cursor-not-allowed disabled:border-border disabled:bg-white/[0.06] disabled:text-muted"
          >
            <UploadCloud aria-hidden="true" className="h-4 w-4 transition group-hover:-translate-y-0.5" />
            {isSubmitting ? 'Submitting...' : 'Submit Clip'}
          </button>
        </form>
      </div>
    </section>
  );
}
