import RadioGroup from "@/entities/form/ui/components/RadioGroup";
import { ITextInput_radio } from "@/entities/types";

export const fieldRadio = (args: ITextInput_radio) => {
  return {
    type: "radio",
    validation_type: "string",
    validations: [],
    ...args,
    component: RadioGroup,
  };
};
