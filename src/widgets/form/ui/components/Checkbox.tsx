/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useEffect, useState } from "react";
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

  return (
    <label htmlFor={props.id}>
      <Input
        {...props}
        value={val}
        onInput={() => setVal(!val)}
        checked={val}
      />

      <div
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
    </label>
  );
};
export default Checkbox;
