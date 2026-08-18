export type Studio = 'docklands' | 'wangaratta';

export type StudioKpis = {
  studio: Studio;
  rolling30DayRevenue: number;
  autopayMembers: number;
  suspendedMembers: number;
  attendanceThisWeek: number;
};

export type WeeklyMetric = {
  week: string;
  churnPercent: number;
  attendance: number;
  netGainLoss: number;
};

export const mockKpis: StudioKpis[] = [
  {
    studio: 'docklands',
    rolling30DayRevenue: 55640,
    autopayMembers: 212,
    suspendedMembers: 31,
    attendanceThisWeek: 499,
  },
  {
    studio: 'wangaratta',
    rolling30DayRevenue: 28150,
    autopayMembers: 121,
    suspendedMembers: 8,
    attendanceThisWeek: 22,
  },
];

export const mockWeeklyTrends: Record<Studio, WeeklyMetric[]> = {
  docklands: [
    { week: '24/07', churnPercent: 6, attendance: 598, netGainLoss: -1 },
    { week: '31/07', churnPercent: 7, attendance: 619, netGainLoss: 1 },
    { week: '07/08', churnPercent: 0.5, attendance: 545, netGainLoss: 1 },
    { week: '14/08', churnPercent: 1, attendance: 499, netGainLoss: -2 },
  ],
  wangaratta: [
    { week: '24/07', churnPercent: 4, attendance: 140, netGainLoss: 0 },
    { week: '31/07', churnPercent: 3, attendance: 155, netGainLoss: 2 },
    { week: '07/08', churnPercent: 2, attendance: 148, netGainLoss: 1 },
    { week: '14/08', churnPercent: 5, attendance: 132, netGainLoss: -1 },
  ],
};

export function getKpisForStudio(studio: Studio): StudioKpis {
  return mockKpis.find((k) => k.studio === studio)!;
}

export function getWeeklyTrends(studio: Studio): WeeklyMetric[] {
  return mockWeeklyTrends[studio];
}
