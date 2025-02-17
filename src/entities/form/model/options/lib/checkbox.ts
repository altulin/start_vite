import { ICheckbox } from "@/entities/types";
import { requiredCheck } from "../../validation/lib/errText";
import Checkbox from "@/entities/form/ui/components/Checkbox";

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
