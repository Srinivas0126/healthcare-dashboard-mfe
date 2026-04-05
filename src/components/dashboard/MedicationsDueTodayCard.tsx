import { styles } from "./dashboardStyles";
import { getIconToneClassName, getStatusClassName } from "./dashboardUtils";
import type { MedicationItem } from "./dashboardTypes";

type MedicationsDueTodayCardProps = {
  medications: MedicationItem[];
};

const MedicationsDueTodayCard = ({ medications }: MedicationsDueTodayCardProps) => {
  return (
    <article className={styles.listCard}>
      <div className={styles.sectionHeader}>
        <p className={styles.sectionEyebrow}>Medications due today</p>
      </div>

      <div className={styles.list}>
        {medications.map((item) => (
          <div className={styles.listRow} key={item.id}>
            <div className={`${styles.rowIcon} ${getIconToneClassName(item.iconTone)}`.trim()}>
              {item.icon}
            </div>
            <div className={styles.rowContent}>
              <p className={styles.rowTitle}>{item.title}</p>
              <p className={styles.rowMeta}>{item.subtitle}</p>
            </div>
            <span className={`${styles.statusBadge} ${getStatusClassName(item.statusTone)}`.trim()}>
              {item.status}
            </span>
          </div>
        ))}
      </div>
    </article>
  );
};

export default MedicationsDueTodayCard;
