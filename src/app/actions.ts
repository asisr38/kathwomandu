"use server";

export type SignupState = {
  status: "idle" | "success" | "error";
  message: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function joinCircle(
  _previousState: SignupState,
  formData: FormData,
): Promise<SignupState> {
  const email = String(formData.get("email") ?? "").trim();

  if (!email || !emailPattern.test(email)) {
    return {
      status: "error",
      message: "Please enter a valid email address.",
    };
  }

  await saveSignup(email);

  return {
    status: "success",
    message: "Thank you. We'll write to you when the time is right.",
  };
}

async function saveSignup(email: string) {
  void email;
  // Provider adapter placeholder for Mailchimp, ConvertKit, Resend, Formspree, or a database.
}
