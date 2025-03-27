import clsx from "clsx";
import { ChangeEvent, FC, useRef } from "react";
import style from "../../style/Form.module.scss";
import { useController } from "react-hook-form";
import { ITextInput } from "../../api/types";
import { checkArr } from "@/shared/check";
import useGetFieldData from "../../lib/fieldData";

const File: FC<ITextInput> = ({ ...props }) => {
  const { modifier, ...input_props } = props;
  const { isError } = useGetFieldData(props.name);

  const labelRef = useRef<HTMLLabelElement>(null);

  const {
    field: { onChange, value },
  } = useController({
    name: props.name,
  });

  const checkValue = (value: File[]) => {
    return Object.keys(value).map((key) => {
      const elm = value[Number(key)];
      return elm.constructor.name === "File" ? elm.name : "";
    });
  };

  const label_list = checkValue(value);

  return (
    <label
      htmlFor={props.id}
      ref={labelRef}
      className={clsx(
        style.file,
        modifier && style[`file--${modifier}`],
        isError && style["file__input--error"],
      )}
    >
      <input
        className={clsx(style.file__input)}
        type="file"
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          if (e.target.files && e.target.files.length > 0) {
            onChange(e.target.files);
          }
        }}
        onFocus={() => {
          labelRef.current?.classList.add(style["file--focus"]);
        }}
        onBlur={() => {
          labelRef.current?.classList.remove(style["file--focus"]);
        }}
        {...input_props}
      />
      <span
        className={clsx(
          style.file__placeholder,
          !checkArr(label_list) && style["file__placeholder--empty"],
        )}
      >
        {checkArr(label_list) ? (
          <>
            {label_list.map((item, i) => (
              <span key={i}>{item}</span>
            ))}
          </>
        ) : (
          <>Загрузить</>
        )}
      </span>
    </label>
  );
};
export default File;
