import { styles } from "./dashboardStyles";

type DashboardHeroProps = {
  title: string;
  subtitle: string;
  actionLabel: string;
};

const DashboardHero = ({ title, subtitle, actionLabel }: DashboardHeroProps) => {
  return (
    <section className={styles.hero}>
      <div>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
      <button className={styles.primaryAction} type="button">
        {actionLabel}
      </button>
    </section>
  );
};

export default DashboardHero;
