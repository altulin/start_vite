import { ITextInput } from "../../api/types";
import { onNameInput } from "../masks/name";
import { nameMax, nameMin, required } from "../validation/errText";

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
