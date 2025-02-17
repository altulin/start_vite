import { FC, useState } from "react";
import Input from "../Input";
import ButtonEye from "./ButtonEye";
import { ITextInput } from "@/entities/form/api/types";

const PasswordField: FC<ITextInput> = ({ ...props }) => {
  const [isTypeText, setType] = useState(false);

  return (
    <>
      <Input {...props} type={isTypeText ? "text" : "password"} />
      <ButtonEye isTypeText={isTypeText} setType={setType} />
    </>
  );
};
export default PasswordField;
