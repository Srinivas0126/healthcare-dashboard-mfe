import { styles } from "./dashboardStyles";
import { buildPolylinePoints, getToneClassName } from "./dashboardUtils";
import type { VitalCardData } from "./dashboardTypes";

type VitalTrendCardProps = {
  card: VitalCardData;
};

const VitalTrendCard = ({ card }: VitalTrendCardProps) => {
  return (
    <article className={styles.vitalCard}>
      <div className={styles.vitalHeader}>
        <div>
          <p className={styles.cardEyebrow}>{card.title}</p>
        </div>
        <p className={styles.vitalValue}>
          {card.value}
          {card.unit ? <span>{card.unit}</span> : null}
        </p>
      </div>

      <div className={styles.chartWrap}>
        <svg aria-hidden="true" className={styles.chart} preserveAspectRatio="none" viewBox="0 0 464 88">
          {card.secondaryPoints ? (
            <polyline
              className={styles.sparklineSecondary}
              fill="none"
              points={buildPolylinePoints(card.secondaryPoints)}
            />
          ) : null}
          <polyline
            className={`${styles.sparkline} ${getToneClassName(card.tone)}`.trim()}
            fill="none"
            points={buildPolylinePoints(card.points)}
          />
        </svg>
      </div>

      <p className={styles.chartCaption}>{card.caption}</p>
    </article>
  );
};

export default VitalTrendCard;
