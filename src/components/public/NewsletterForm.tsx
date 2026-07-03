"use client";

export function NewsletterForm() {
  return (
    <form
      className="flex flex-col gap-3 sm:flex-row"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="email"
        placeholder="Alamat Email Anda"
        className="flex-grow rounded-lg border border-outline-variant px-6 py-4 text-body-md outline-none transition-all focus:border-primary focus:ring-1 focus:ring-primary"
      />
      <button
        type="submit"
        className="rounded-lg bg-primary px-8 py-4 font-label-md text-label-md text-on-primary transition-all hover:shadow-lg active:scale-95"
      >
        Subscribe
      </button>
    </form>
  );
}
