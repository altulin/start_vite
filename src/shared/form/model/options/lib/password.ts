import { ITextInput } from "@/shared/types";
import * as yup from "yup";
import { required } from "@/shared/form/model/validation/lib/errText";
import {
  confirmPasswordMatch,
  passwordMax,
  passwordMin,
} from "../../validation/lib/errText";
import PasswordField from "@/shared/form/ui/components/password/PasswordField";

export const fieldPassword = (args: ITextInput) => {
  return {
    type: "password",
    autoComplete: "off",
    validation_type: "string",
    validations: [
      {
        type: "required",
        params: [required],
      },
      {
        type: "min",
        params: [8, passwordMin],
      },
      {
        type: "max",
        params: [14, passwordMax],
      },
    ],
    component: PasswordField,
    ...args,
  };
};

export const fieldConfirmPassword = (args: ITextInput) => {
  return {
    type: "password",
    autoComplete: "off",
    validation_type: "string",
    validations: [
      {
        type: "required",
        params: [required],
      },
      {
        type: "oneOf",
        params: [[yup.ref("password")], confirmPasswordMatch],
      },
    ],
    component: PasswordField,
    ...args,
  };
};
