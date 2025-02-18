import { ICheckbox } from "../../api/types";
import Checkbox from "../../ui/components/Checkbox";
import { requiredCheck } from "../validation/errText";

export const fieldCheckbox = (args: ICheckbox) => {
  return {
    type: "checkbox",
    validation_type: "boolean",
    validations: [
      {
        type: "oneOf",
        params: [[true], requiredCheck],
      },
    ],
    component: Checkbox,
    ...args,
  };
};
