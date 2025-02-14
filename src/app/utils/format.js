import moment from "moment";
import { DATE_FORMAT } from "../constants/format";
import dayjs from "dayjs";

export const formatDate = (date, format = DATE_FORMAT) => {
    if (!!!date) {
        return "";
    }
    return moment(date).format(format);
};
export const formatDateDayjs = (date, format = DATE_FORMAT) => {
    if (!!!date) {
        return "1/1/2000";
    }
    return dayjs(date).format(format);
};
