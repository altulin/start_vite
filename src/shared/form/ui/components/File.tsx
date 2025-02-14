import clsx from "clsx";
import { ChangeEvent, FC, useId, useRef } from "react";
import style from "@/shared/form/style/Form.module.scss";
import { useController } from "react-hook-form";
import { ITextInput } from "@/shared/types";
import { useGetFieldData } from "@/shared/hooks";
import { checkArr } from "@/shared/utils";

const File: FC<ITextInput> = ({ ...props }) => {
  const { modifier, ...input_props } = props;
  const { isError } = useGetFieldData(props.name);
  const id = useId();
  const inputRef = useRef<HTMLInputElement>(null);

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

  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  return (
    <div
      tabIndex={0}
      onClick={handleFocus}
      className={clsx(
        style.file,
        modifier && style[`file--${modifier}`],
        isError && style["file--error"],
      )}
    >
      <input
        ref={inputRef}
        id={id}
        type="file"
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          if (e.target.files && e.target.files.length > 0) {
            onChange(e.target.files);
          }
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
    </div>
  );
};
export default File;
