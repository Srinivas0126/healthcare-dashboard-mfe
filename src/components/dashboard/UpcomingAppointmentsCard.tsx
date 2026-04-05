import { styles } from "./dashboardStyles";
import { getIconToneClassName } from "./dashboardUtils";
import type { ScheduleItem } from "./dashboardTypes";

type UpcomingAppointmentsCardProps = {
  appointments: ScheduleItem[];
};

const UpcomingAppointmentsCard = ({ appointments }: UpcomingAppointmentsCardProps) => {
  return (
    <article className={styles.listCard}>
      <div className={styles.sectionHeader}>
        <p className={styles.sectionEyebrow}>Upcoming appointments</p>
      </div>

      <div className={styles.list}>
        {appointments.map((item) => (
          <div className={styles.listRow} key={item.id}>
            <div className={`${styles.rowIcon} ${getIconToneClassName(item.iconTone)}`.trim()}>
              {item.icon}
            </div>
            <div className={styles.rowContent}>
              <p className={styles.rowTitle}>{item.title}</p>
              <p className={styles.rowMeta}>{item.subtitle}</p>
            </div>
            <span className={styles.rowChip}>{item.chip}</span>
          </div>
        ))}
      </div>
    </article>
  );
};

export default UpcomingAppointmentsCard;
