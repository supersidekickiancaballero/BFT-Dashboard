import { Member, Studio } from "./mockMembers";

export type FlagColor = "red" | "orange" | null;

export interface FlaggedMember extends Member {
  flag: FlagColor;
}

function daysSince(dateStr: string): number {
  const last = new Date(dateStr);
  const now = new Date();
  const diffMs = now.getTime() - last.getTime();
  return Math.floor(diffMs / (1000 * 60 * 60 * 24));
}

export function getFlag(lastAttended: string): FlagColor {
  const days = daysSince(lastAttended);
  if (days >= 7) return "red";
  if (days >= 2) return "orange";
  return null;
}

export function getFlaggedMembers(members: Member[], studio: Studio): FlaggedMember[] {
  return members
    .filter((m) => m.studio === studio)
    .map((m) => ({ ...m, flag: getFlag(m.lastAttended) }))
    .filter((m) => m.flag !== null);
}
