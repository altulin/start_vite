import { FC } from "react";
import DatePicker, { registerLocale } from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import clsx from "clsx";
import style from "../../style/Form.module.scss";
import { ru } from "date-fns/locale/ru";
import { useController } from "react-hook-form";
import { ITextInput } from "../../api/types";

registerLocale("ru", ru);

const MyDatePicker: FC<ITextInput> = ({ ...props }) => {
  const { name, placeholder, id, modifier } = props;

  const {
    field: { onChange, value },
  } = useController({
    name,
  });

  return (
    <DatePicker
      locale="ru"
      selected={value}
      onChange={(date) => {
        onChange(date);

        return;
      }}
      placeholderText={placeholder}
      className={clsx(style.datepicker)}
      wrapperClassName={clsx(style.datepicker__wrapper)}
      dateFormat={modifier === "time" ? "HH:mm" : "dd.MM.yyyy"}
      showIcon={true}
      showTimeSelect={modifier === "time"}
      showTimeSelectOnly={modifier === "time"}
      timeIntervals={60}
      showTimeCaption={false}
      icon={
        <svg
          className={clsx(style.datepicker__icon)}
          width="14"
          height="9"
          viewBox="0 0 14 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 1L7 7L13 1" stroke="#718EBF" strokeWidth="1.5" />
        </svg>
      }
      id={id}
    />
  );
};

export default MyDatePicker;
