/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useId } from "react";

import { Controller, useFormContext } from "react-hook-form";
import Container from "./Container";
import Label from "./Label";
import Input from "../components/Input";
import { ITextInput } from "../../api/types";
import { checkArr } from "@/shared/check";

const Field: FC<ITextInput> = ({ component: Component, ...props }) => {
  const id = useId();
  const methods = useFormContext();

  const { validation_type, validations, ...labelProps } = props;

  const { label_text, ...inputProps } = labelProps;

  inputProps.id = id;

  return (
    <Container {...props}>
      {checkArr(props.radio_list) ? (
        <>{Component && <Component {...inputProps} />}</>
      ) : (
        <Label {...labelProps} id={id}>
          <Controller
            control={methods.control}
            name={props.name}
            render={() => {
              return Component === undefined ? (
                <Input {...inputProps} />
              ) : (
                <Component {...inputProps} />
              );
            }}
          ></Controller>
        </Label>
      )}
    </Container>
  );
};
export default Field;
