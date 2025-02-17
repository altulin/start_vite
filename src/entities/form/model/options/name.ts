import { ITextInput } from "@/entities/types";
import { onNameInput } from "@/entities/form/model/masks/name";
import { required } from "@/entities/form/model/validation/errText";
import { nameMax, nameMin } from "../validation/errText";

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
