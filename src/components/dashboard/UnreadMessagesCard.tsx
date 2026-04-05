import SummaryMetricCard from "./SummaryMetricCard";
import type { StatusTone } from "./dashboardTypes";

type UnreadMessagesCardProps = {
  value: string;
  meta: string;
  status: string;
  statusTone: StatusTone;
};

const UnreadMessagesCard = (props: UnreadMessagesCardProps) => {
  return <SummaryMetricCard title="Unread messages" {...props} />;
};

export default UnreadMessagesCard;
