import { ITextInput } from "@/entities/types";
import { required } from "@/entities/form/model/validation/errText";
import MyDatePicker from "@/entities/form/ui/components/Datepicker";

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
