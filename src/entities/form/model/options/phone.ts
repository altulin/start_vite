/* eslint-disable no-useless-escape */

import { ITextInput } from "@/entities/types";
import { onPhoneInput } from "@/entities/form/model/masks/phone";
import { required } from "@/entities/form/model/validation/errText";
import { valid } from "../validation/errText";

export const fieldPhone = (args: ITextInput) => {
  return {
    type: "tel",
    onInput: onPhoneInput,
    validation_type: "string",
    validations: [
      {
        type: "required",
        params: [required],
      },
      {
        type: "matches",
        params: [/^(\+7|8) \(\d{3}\) \d{3}\-\d{2}\-\d{2}$/gm, valid],
      },
    ],
    ...args,
  };
};
