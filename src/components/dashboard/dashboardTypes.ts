export type StatusTone = "success" | "warning" | "danger";

export type SummaryCardData = {
  id: string;
  title: string;
  value: string;
  meta: string;
  status: string;
  statusTone: StatusTone;
};

export type VitalTone = "teal" | "mint" | "amber";

export type VitalCardData = {
  id: string;
  title: string;
  value: string;
  unit: string;
  caption: string;
  tone: VitalTone;
  points: number[];
  secondaryPoints?: number[];
};

export type IconTone = "mint" | "violet" | "amber" | "rose";

export type ScheduleItem = {
  id: string;
  icon: string;
  iconTone: IconTone;
  title: string;
  subtitle: string;
  chip: string;
};

export type MedicationItem = {
  id: string;
  icon: string;
  iconTone: IconTone;
  title: string;
  subtitle: string;
  status: string;
  statusTone: StatusTone;
};
