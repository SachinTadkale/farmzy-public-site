export type WaitlistRole = "FARMER" | "COMPANY";

export interface WaitlistLead {
  id: string;
  email: string;
  role: WaitlistRole;
  name: string | null;
  createdAt: string;
}
