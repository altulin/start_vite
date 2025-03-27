/* eslint-disable @typescript-eslint/no-explicit-any */
import clsx from "clsx";
import { FC, useEffect, useState } from "react";
import style from "../../../style/Form.module.scss";
import Select from "react-select";
import IconArrow from "@/shared/images/sprite/rule.svg";
import { getClasses, ITextInput_Modifier, wrapClass } from "./data";
import { useController } from "react-hook-form";
import { SpriteSVG } from "@/shared/ui";
import { ITextInput } from "@/widgets/form/api/types";
import useGetFieldData from "@/widgets/form/lib/fieldData";

const MySelect: FC<ITextInput> = ({ ...props }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { name, options, placeholder, modifier, id } = props;
  const { isError } = useGetFieldData(name);
  const {
    field: { onChange, value, onBlur },
  } = useController({
    name,
  });

  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      if (e.key === "Enter") console.log(e.target);
    });
  }, []);

  return (
    <Select
      inputId={id}
      defaultMenuIsOpen={false}
      menuIsOpen={isOpen}
      options={options as any}
      placeholder={placeholder}
      className={clsx(style[wrapClass])}
      classNames={{
        ...getClasses(modifier as ITextInput_Modifier, isError),
      }}
      name={name}
      onBlur={() => {
        onBlur();
        setIsOpen(false);
      }}
      onChange={(val: any) => {
        onChange(val?.value);
        setIsOpen(false);
      }}
      value={(options && options.find((el) => el.value === value)) || ""}
      components={{
        DropdownIndicator: () => <SpriteSVG icon={IconArrow} />,
      }}
      noOptionsMessage={() => "Данные не загрузились"}
      onFocus={() => setIsOpen(true)}
    />
  );
};

export default MySelect;
