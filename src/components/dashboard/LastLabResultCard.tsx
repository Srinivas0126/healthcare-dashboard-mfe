import SummaryMetricCard from "./SummaryMetricCard";
import type { StatusTone } from "./dashboardTypes";

type LastLabResultCardProps = {
  value: string;
  meta: string;
  status: string;
  statusTone: StatusTone;
};

const LastLabResultCard = (props: LastLabResultCardProps) => {
  return <SummaryMetricCard title="Last lab result" {...props} />;
};

export default LastLabResultCard;
