"use client";

import { useState, FormEvent } from "react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Speak with OLKO."
        description="Tell us what you source, the volumes you run and the supply outcomes you need. We&rsquo;ll respond with a tailored approach."
      />

      <section className="border-b border-stone/10 py-24">
        <div className="container-page grid gap-16 md:grid-cols-12">
          <div className="md:col-span-4 space-y-10">
            <Reveal>
              <div>
                <p className="eyebrow">Email</p>
                <p className="mt-3 text-base text-stone/80">
                  <a href="mailto:hello@olko.com.au" className="hover:text-tan">
                    hello@olko.com.au
                  </a>
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <div>
                <p className="eyebrow">Coverage</p>
                <p className="mt-3 text-base text-stone/80">
                  Global sourcing &middot; Polymers &middot; Industrial materials
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div>
                <p className="eyebrow">Response</p>
                <p className="mt-3 text-base text-stone/80">
                  Within one business day.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="md:col-span-8">
            <Reveal>
              {submitted ? (
                <div className="border border-stone/10 bg-steel/40 p-10">
                  <p className="eyebrow">Received</p>
                  <h2 className="mt-4 text-2xl md:text-3xl">
                    Thank you — your enquiry is with us.
                  </h2>
                  <p className="mt-4 max-w-lg text-sm text-stone/60">
                    A member of the OLKO team will be in touch shortly with
                    next steps.
                  </p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="grid gap-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <Field label="Full name" name="name" />
                    <Field label="Company" name="company" />
                    <Field label="Email" name="email" type="email" />
                    <Field label="Country" name="country" />
                  </div>
                  <Field label="Material / category" name="category" />
                  <FieldArea label="What can we help you source?" name="message" />

                  <div className="flex items-center justify-between pt-2">
                    <p className="text-xs text-stone/40">
                      We respond within one business day.
                    </p>
                    <button type="submit" className="btn-primary">
                      Send Enquiry
                    </button>
                  </div>
                </form>
              )}
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
}: {
  label: string;
  name: string;
  type?: string;
}) {
  return (
    <label className="block">
      <span className="block text-xs uppercase tracking-[0.2em] text-stone/50">
        {label}
      </span>
      <input
        name={name}
        type={type}
        required
        className="mt-3 w-full border-b border-stone/20 bg-transparent py-3 text-base text-stone outline-none transition focus:border-tan"
      />
    </label>
  );
}

function FieldArea({ label, name }: { label: string; name: string }) {
  return (
    <label className="block">
      <span className="block text-xs uppercase tracking-[0.2em] text-stone/50">
        {label}
      </span>
      <textarea
        name={name}
        rows={5}
        required
        className="mt-3 w-full resize-none border-b border-stone/20 bg-transparent py-3 text-base text-stone outline-none transition focus:border-tan"
      />
    </label>
  );
}
