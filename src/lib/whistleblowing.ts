import { Inbox, UserCheck, Search, Scale, Archive, type LucideIcon } from "lucide-react";

export type WbStatus =
  | "ricevuta"
  | "presa_in_carico"
  | "verifica"
  | "provvedimenti"
  | "archiviata";

export interface WbStatusInfo {
  label: string;
  description: string;
  icon: LucideIcon;
  color: string;
  dot: string;
}

export const WB_STATUSES: Record<WbStatus, WbStatusInfo> = {
  ricevuta: {
    label: "Segnalazione ricevuta",
    description: "La segnalazione è stata registrata e trasmessa al Responsabile Whistleblowing.",
    icon: Inbox,
    color: "text-slate-600 bg-slate-100",
    dot: "bg-slate-500",
  },
  presa_in_carico: {
    label: "Presa in carico",
    description: "Il Responsabile Whistleblowing ha preso in carico la segnalazione.",
    icon: UserCheck,
    color: "text-blue-700 bg-blue-100",
    dot: "bg-blue-600",
  },
  verifica: {
    label: "Verifica in corso",
    description: "Sono in corso gli accertamenti sul contenuto della segnalazione.",
    icon: Search,
    color: "text-amber-700 bg-amber-100",
    dot: "bg-amber-500",
  },
  provvedimenti: {
    label: "Provvedimenti in corso",
    description: "A seguito degli accertamenti sono stati avviati provvedimenti o azioni correttive.",
    icon: Scale,
    color: "text-orange-700 bg-orange-100",
    dot: "bg-orange-600",
  },
  archiviata: {
    label: "Archiviata",
    description: "La segnalazione è stata archiviata e la procedura è conclusa.",
    icon: Archive,
    color: "text-gray-600 bg-gray-200",
    dot: "bg-gray-500",
  },
};

export const WB_STATUS_ORDER: WbStatus[] = [
  "ricevuta",
  "presa_in_carico",
  "verifica",
  "provvedimenti",
  "archiviata",
];

export interface WbUpdate {
  status: WbStatus;
  message: string;
  created_at: string;
}

export interface WbStatusResult {
  status: WbStatus;
  createdAt: string;
  updatedAt: string;
  updates: WbUpdate[];
}

export const normalizeTicket = (raw: string) =>
  raw.trim().toUpperCase().replace(/\s+/g, "");

export const isValidTicket = (ticket: string) => /^WB-[A-Z0-9]{8}$/.test(ticket);

export async function fetchWbStatus(ticket: string): Promise<WbStatusResult | null> {
  const { WHISTLEBLOWING_API_URL } = await import("@/lib/api");
  const res = await fetch(`${WHISTLEBLOWING_API_URL}?ticket=${encodeURIComponent(ticket)}`);
  if (res.status === 404) return null;
  if (!res.ok) throw new Error("Errore di connessione");
  const data = await res.json();
  if (!data.found) return null;
  return {
    status: data.status as WbStatus,
    createdAt: data.createdAt,
    updatedAt: data.updatedAt,
    updates: (data.updates ?? []) as WbUpdate[],
  };
}

export const formatWbDate = (iso: string) =>
  new Date(iso).toLocaleDateString("it-IT", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
