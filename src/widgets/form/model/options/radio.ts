import { ITextInput_radio } from "../../api/types";
import RadioGroup from "../../ui/components/RadioGroup";

export const fieldRadio = (args: ITextInput_radio) => {
  return {
    type: "radio",
    validation_type: "string",
    validations: [],
    ...args,
    component: RadioGroup,
  };
};
