import clsx from "clsx";
import { ChangeEvent, FC } from "react";
import style from "../../style/Form.module.scss";
import TextareaAutosize from "react-textarea-autosize";
import { useController } from "react-hook-form";
import { ITextInput } from "../../api/types";
import useGetFieldData from "../../lib/fieldData";

const TextArea: FC<ITextInput> = ({ ...props }) => {
  const { modifier, name, placeholder, minRows, id } = props;
  const { isError } = useGetFieldData(name);
  const { field } = useController({ name });
  const { onChange, value, onBlur } = field;

  return (
    <TextareaAutosize
      className={clsx(
        style.textarea,
        modifier && style[`textarea--${modifier}`],
        isError && style["textarea--error"],
      )}
      id={id}
      name={name}
      value={value}
      onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
        onChange(e.target.value);
      }}
      onBlur={onBlur}
      placeholder={placeholder}
      minRows={minRows}
    />
  );
};
export default TextArea;
