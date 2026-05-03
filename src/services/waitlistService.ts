import { WaitlistLead, WaitlistRole } from "./waitlist.types";

export interface WaitlistPayload {
  email: string;
  role: WaitlistRole;
  name?: string;
}

export interface WaitlistApiError {
  success?: false;
  message?: string;
  code?: string;
  details?: unknown;
  fieldErrors?: Record<string, string[] | undefined>;
  formErrors?: string[];
}

export interface WaitlistSuccessResponse {
  success: boolean;
  message?: string;
  data?: WaitlistLead;
}

const getBackendUrl = () => {
  const backendUrl =
    process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api/v1";

  if (!backendUrl) {
    throw new Error("VITE_API_URL is not configured.");
  }

  return backendUrl.replace(/\/$/, "");
};

const getErrorMessage = (error: WaitlistApiError | null) => {
  if (!error) {
    return "Something went wrong";
  }

  if (typeof error.message === "string" && error.message.trim().length > 0) {
    return error.message;
  }

  if (
    error.fieldErrors &&
    typeof error.fieldErrors === "object"
  ) {
    const firstFieldError = Object.values(error.fieldErrors).find(
      (messages) => Array.isArray(messages) && messages.length > 0,
    );

    if (firstFieldError?.[0]) {
      return firstFieldError[0];
    }
  }

  if (Array.isArray(error.formErrors) && error.formErrors[0]) {
    return error.formErrors[0];
  }

  return "Something went wrong";
};

export async function joinWaitlist(payload: WaitlistPayload) {
  const response = await fetch(`${getBackendUrl()}/leads/addLead`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  }).catch(() => {
    throw new Error("Unable to connect to the waitlist service right now");
  });

  const data = (await response.json().catch(() => null)) as
    | WaitlistSuccessResponse
    | WaitlistApiError
    | null;

  if (!response.ok) {
    throw new Error(getErrorMessage(data as WaitlistApiError | null));
  }

  return data as WaitlistSuccessResponse;
}
