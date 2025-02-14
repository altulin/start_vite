/* eslint-disable no-useless-escape */

import { ITextInput } from "@/shared/types";
import { onPhoneInput } from "@/shared/form/model/masks/lib/phone";
import { required } from "@/shared/form/model/validation/lib/errText";
import { valid } from "../../validation/lib/errText";

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
