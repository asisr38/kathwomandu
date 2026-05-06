"use client";

import { useActionState, useEffect, useRef } from "react";
import { joinCircle, type SignupState } from "@/app/actions";

const initialState: SignupState = {
  status: "idle",
  message: "",
};

export function EmailCapture() {
  const [state, formAction, pending] = useActionState(joinCircle, initialState);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (state.status === "error") {
      inputRef.current?.focus();
    }
  }, [state.status]);

  return (
    <section className="capture" id="join">
      <p className="label">Join the circle</p>
      <h2>
        Be among the first to <em>hear what comes next</em>.
      </h2>
      {state.status !== "success" ? (
        <form className="signup" action={formAction} noValidate>
          <input
            ref={inputRef}
            type="email"
            name="email"
            placeholder="your@email.com"
            required
            aria-label="Your email"
            aria-invalid={state.status === "error"}
          />
          <button type="submit" disabled={pending}>
            {pending ? "Sending" : "Stay close"}
          </button>
        </form>
      ) : null}

      <p className="privacy">We will never share your email. Unsubscribe any time.</p>
      <p className={`success ${state.status === "success" ? "show" : ""}`}>
        {state.status === "success" ? state.message : ""}
      </p>
    </section>
  );
}
