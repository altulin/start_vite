import { FC, MouseEvent, useId } from "react";
import clsx from "clsx";
import style from "../../style/Form.module.scss";
import { useController } from "react-hook-form";
import IconRule from "@/shared/images/sprite/rule.svg";
import { SpriteSVG } from "@/shared/ui";
import Label from "../hoc/Label";
import Input from "./Input";
import { ITextInput } from "../../api/types";

const RadioGroup: FC<ITextInput> = ({ radio_list, children, ...props }) => {
  const id = useId();

  const {
    field: { value },
  } = useController({
    name: props.name,
  });

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    const previousSibling = (e.target as Element).previousElementSibling;
    if (previousSibling) {
      (previousSibling as HTMLInputElement).click();
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { init_value, ...inputProps } = props;

  return (
    <>
      {radio_list &&
        radio_list.map((item, i) => (
          <Label
            {...props}
            key={i}
            label_text={item.label}
            id={`${id}_${i}`}
            value={item.value}
            className={clsx(style.radio_el)}
          >
            <Input {...inputProps} id={`${id}_${i}`} value={item.value} />

            <span
              tabIndex={0}
              onClick={handleClick}
              className={clsx(style.radio_el__mark)}
            >
              {value === item.value && <SpriteSVG icon={IconRule} />}
            </span>

            {children}
          </Label>
        ))}
    </>
  );
};
export default RadioGroup;
