export type Studio = "docklands" | "wangaratta";

export interface Member {
  id: string;
  name: string;
  studio: Studio;
  lastAttended: string;
}

export const mockMembers: Member[] = [
  { id: "1", name: "Sarah Chen", studio: "docklands", lastAttended: "2026-08-12" },
  { id: "2", name: "James Patel", studio: "docklands", lastAttended: "2026-08-01" },
  { id: "3", name: "Olivia Nguyen", studio: "docklands", lastAttended: "2026-08-09" },
  { id: "4", name: "Liam O'Brien", studio: "docklands", lastAttended: "2026-07-28" },
  { id: "5", name: "Ava Thompson", studio: "wangaratta", lastAttended: "2026-08-11" },
  { id: "6", name: "Noah Kelly", studio: "wangaratta", lastAttended: "2026-07-30" },
  { id: "7", name: "Isla Ryan", studio: "wangaratta", lastAttended: "2026-08-10" },
  { id: "8", name: "Ethan Walsh", studio: "wangaratta", lastAttended: "2026-08-02" },
];
