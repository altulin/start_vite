import { ITextInput } from "../../api/types";
import MyDatePicker from "../../ui/components/Datepicker";
import { required } from "../validation/errText";

export const fieldDatePicker = (args: ITextInput) => {
  return {
    validation_type: "string",
    validations: [
      {
        type: "required",
        params: [required],
      },
    ],
    ...args,
    component: MyDatePicker,
  };
};
