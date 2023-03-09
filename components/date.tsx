import { parseISO, format } from "date-fns";

export default function Date({ date }: { date: string }) {
  const d = parseISO(date);
  return <time dateTime={date}>{format(d, "LLLL d, yyyy")}</time>;
}
