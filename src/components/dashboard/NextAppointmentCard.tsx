import SummaryMetricCard from "./SummaryMetricCard";
import type { StatusTone } from "./dashboardTypes";

type NextAppointmentCardProps = {
  value: string;
  meta: string;
  status: string;
  statusTone: StatusTone;
};

const NextAppointmentCard = (props: NextAppointmentCardProps) => {
  return <SummaryMetricCard title="Next appointment" {...props} />;
};

export default NextAppointmentCard;
