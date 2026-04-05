import {
  ActiveMedicationsCard,
  DashboardHero,
  LastLabResultCard,
  MedicationsDueTodayCard,
  NextAppointmentCard,
  UnreadMessagesCard,
  UpcomingAppointmentsCard,
  VitalTrendCard
} from "../components/dashboard";
import { styles } from "../components/dashboard/dashboardStyles";
import type { MedicationItem, ScheduleItem, VitalCardData } from "../components/dashboard/dashboardTypes";

const vitalCards: VitalCardData[] = [
  {
    id: "heart-rate",
    title: "Heart rate",
    value: "72",
    unit: "bpm",
    caption: "7-day trend | Source: Apple Watch",
    tone: "teal",
    points: [45, 49, 47, 56, 54, 59, 61, 55, 57]
  },
  {
    id: "blood-pressure",
    title: "Blood pressure",
    value: "118/76",
    unit: "",
    caption: "Systolic / diastolic | FHIR Observation",
    tone: "mint",
    points: [54, 56, 52, 58, 60, 56, 57, 54, 60],
    secondaryPoints: [42, 43, 44, 45, 44, 43, 45, 44, 46]
  },
  {
    id: "blood-glucose",
    title: "Blood glucose",
    value: "94",
    unit: "mg/dL",
    caption: "Dexcom G7 | Fasting | FHIR Observation",
    tone: "amber",
    points: [47, 53, 45, 57, 50, 55, 48, 59, 54]
  }
];

const appointments: ScheduleItem[] = [
  {
    id: "cardiology-follow-up",
    icon: "St",
    iconTone: "mint",
    title: "Dr. Patel - Cardiology follow-up",
    subtitle: "Apr 12 | 10:30 AM | In person",
    chip: "7 days"
  },
  {
    id: "annual-physical",
    icon: "Rx",
    iconTone: "violet",
    title: "Annual physical - Dr. Chen",
    subtitle: "Apr 28 | 9:00 AM | Telehealth",
    chip: "23 days"
  },
  {
    id: "lab-draw",
    icon: "Lb",
    iconTone: "amber",
    title: "Lab draw - Quest Diagnostics",
    subtitle: "May 3 | 8:00 AM | Walk-in",
    chip: "28 days"
  }
];

const medications: MedicationItem[] = [
  {
    id: "metformin",
    icon: "Rx",
    iconTone: "mint",
    title: "Metformin 500mg",
    subtitle: "With breakfast | 1 tablet",
    status: "Taken",
    statusTone: "success"
  },
  {
    id: "lisinopril",
    icon: "Rx",
    iconTone: "mint",
    title: "Lisinopril 10mg",
    subtitle: "Morning | 1 tablet",
    status: "Pending",
    statusTone: "warning"
  },
  {
    id: "atorvastatin",
    icon: "Rx",
    iconTone: "rose",
    title: "Atorvastatin 20mg - refill due",
    subtitle: "Evening | 3 days remaining",
    status: "Refill",
    statusTone: "danger"
  }
];

const DashboardPage = () => {
  return (
    <div className={styles.page}>
      <DashboardHero
        actionLabel="+ Log reading"
        subtitle="Sunday, April 5, 2026 | Last updated 7:42 AM"
        title="Good morning, Sarah"
      />

      <section aria-label="Care summary" className={styles.summaryGrid}>
        <NextAppointmentCard
          meta="Dr. Patel | Cardiology"
          status="Confirmed"
          statusTone="success"
          value="Apr 12"
        />
        <ActiveMedicationsCard
          meta="1 refill due soon"
          status="Action needed"
          statusTone="warning"
          value="4"
        />
        <LastLabResultCard
          meta="CBC - all in range"
          status="Normal"
          statusTone="success"
          value="Apr 1"
        />
        <UnreadMessagesCard
          meta="From care team"
          status="Unread"
          statusTone="danger"
          value="3"
        />
      </section>

      <section aria-label="Vitals trends" className={styles.vitalsGrid}>
        {vitalCards.map((card) => (
          <VitalTrendCard card={card} key={card.id} />
        ))}
      </section>

      <section className={styles.detailGrid}>
        <UpcomingAppointmentsCard appointments={appointments} />
        <MedicationsDueTodayCard medications={medications} />
      </section>
    </div>
  );
};

export default DashboardPage;
