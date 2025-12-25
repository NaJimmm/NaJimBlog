import { format } from 'date-fns-tz';

const formatDate = (date, format$1 = "yyyy-MM-dd") => {
  return format(new Date(date), format$1);
};

export { formatDate as f };
