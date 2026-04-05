import { styles } from "./dashboardStyles";
import { getStatusClassName } from "./dashboardUtils";
import type { StatusTone } from "./dashboardTypes";

type SummaryMetricCardProps = {
  title: string;
  value: string;
  meta: string;
  status: string;
  statusTone: StatusTone;
};

const SummaryMetricCard = ({
  title,
  value,
  meta,
  status,
  statusTone
}: SummaryMetricCardProps) => {
  return (
    <article className={styles.summaryCard}>
      <p className={styles.cardEyebrow}>{title}</p>
      <p className={styles.cardValue}>{value}</p>
      <p className={styles.cardMeta}>{meta}</p>
      <span className={`${styles.statusBadge} ${getStatusClassName(statusTone)}`.trim()}>
        {status}
      </span>
    </article>
  );
};

export default SummaryMetricCard;
