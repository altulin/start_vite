/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, MouseEvent, useEffect, useState } from "react";
import clsx from "clsx";
import style from "../../style/Form.module.scss";
import IconRule from "@/shared/images/sprite/rule.svg";
import { useController } from "react-hook-form";
import Input from "./Input";
import { ITextInput } from "../../api/types";
import { SpriteSVG } from "@/shared/ui";
import useGetFieldData from "../../lib/fieldData";

const Checkbox: FC<ITextInput> = ({ inner: Component, ...props }) => {
  const { modifier, checked } = props;
  const { isError } = useGetFieldData(props.name);
  const [val, setVal] = useState<any>(checked);

  const {
    field: { onChange },
  } = useController({
    name: props.name,
  });

  useEffect(() => {
    onChange(val);
  }, [onChange, val]);

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    const previousSibling = (e.target as Element).previousElementSibling;

    if (previousSibling) {
      (previousSibling as HTMLInputElement).click();
    }
  };

  return (
    <>
      <Input
        {...props}
        value={val}
        onInput={() => setVal(!val)}
        checked={val}
      />

      <div
        tabIndex={0}
        onClick={handleClick}
        className={clsx(
          style.checkbox,
          modifier && style[`checkbox--${modifier}`],
        )}
      >
        <span
          className={clsx(
            style.checkbox__icon,
            isError && style["checkbox__icon--error"],
          )}
        >
          {val && <SpriteSVG icon={IconRule} />}
        </span>

        {Component && <Component />}
      </div>
    </>
  );
};
export default Checkbox;
