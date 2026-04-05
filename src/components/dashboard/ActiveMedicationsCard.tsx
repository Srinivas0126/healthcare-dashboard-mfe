import SummaryMetricCard from "./SummaryMetricCard";
import type { StatusTone } from "./dashboardTypes";

type ActiveMedicationsCardProps = {
  value: string;
  meta: string;
  status: string;
  statusTone: StatusTone;
};

const ActiveMedicationsCard = (props: ActiveMedicationsCardProps) => {
  return <SummaryMetricCard title="Active medications" {...props} />;
};

export default ActiveMedicationsCard;
