import { ITextInput } from "@/shared/types";
import { onNameInput } from "@/shared/form/model/masks/lib/name";
import { required } from "@/shared/form/model/validation/lib/errText";
import { nameMax, nameMin } from "../../validation/lib/errText";

export const fieldName = (args: ITextInput) => {
  return {
    onInput: onNameInput,
    validation_type: "string",
    validations: [
      {
        type: "required",
        params: [required],
      },
      {
        type: "min",
        params: [2, nameMin],
      },
      {
        type: "max",
        params: [50, nameMax],
      },
    ],
    ...args,
  };
};
