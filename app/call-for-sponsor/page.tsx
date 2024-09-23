"use client";

import { submitTalk } from "../actions";
import { useFormState, useFormStatus } from "react-dom";
import { useState } from "react";

export default function CallForSponsor() {
  const [state, formAction] = useFormState(submitTalk, {
    success: false,
    data: {},
    error: undefined,
  });

  const { pending } = useFormStatus();
  const [consent, setConsent] = useState(false);

  if (state.success === true) {
    return (
      <div className="text-center">
        <p className="text-xl font-bold lg:text-3xl">
          Grazie per aver deciso di sponsorizzare l&apos;evento! <br />
          Verrai contattato per i dettagli.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <p className="mb-5 text-2xl font-bold">Diventa Sponsor</p>
      <form action={formAction} className="mx-0">
        <div className="mb-3">
          <label htmlFor="nome" className="mb-1 block text-lg font-bold">
            Nome <span>*</span>
          </label>
          <input
            type="text"
            className="block w-full rounded-lg bg-gray-50 p-2.5 text-base font-bold text-gray-900"
            id="nome"
            name="nome"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cognome" className="mb-1 block text-lg font-bold">
            Cognome <span>*</span>
          </label>
          <input
            type="text"
            className="block w-full rounded-lg bg-gray-50 p-2.5 text-base font-bold text-gray-900"
            id="cognome"
            name="cognome"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="mb-1 block text-lg font-bold">
            Email <span>*</span>
          </label>
          <input
            type="email"
            className="block w-full rounded-lg bg-gray-50 p-2.5 text-base font-bold text-gray-900"
            id="email"
            name="email"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="azienda" className="mb-1 block text-lg font-bold">
            Azienda/Organizzazione <span>*</span>
          </label>
          <input
            type="text"
            className="block w-full rounded-lg bg-gray-50 p-2.5 text-base font-bold text-gray-900"
            id="azienda"
            name="azienda"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="euro" className="mb-1 block text-lg font-bold">
            € <span>*</span>
          </label>
          <input
            type="number"
            className="block w-full rounded-lg bg-gray-50 p-2.5 text-base font-bold text-gray-900"
            id="euro"
            name="euro"
            required
            min="0"
            step="0.01"
          />
        </div>
        <div className="mb-5 flex items-start">
          <div className="flex h-5 items-center">
            <input
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              id="consent"
              name="consent"
              type="checkbox"
              className="focus:ring-3 h-4 w-4 rounded border border-gray-300 bg-gray-50"
              required
            />
          </div>
          <label htmlFor="consent" className="ms-2 text-base font-bold">
            Accetto il trattamento dei{" "}
            <a href="#" className="font-bold text-accent">
              dati personali
            </a>
          </label>
        </div>
        <button
          type="submit"
          className="rounded-lg bg-accent px-5 py-2.5 text-center text-lg font-bold text-white disabled:opacity-50"
          disabled={!consent || pending}
        >
          Diventa Sponsor
        </button>
      </form>
    </div>
  );
}
