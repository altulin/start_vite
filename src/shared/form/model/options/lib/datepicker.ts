import { ITextInput } from "@/shared/types";
import { required } from "@/shared/form/model/validation/lib/errText";
import MyDatePicker from "@/shared/form/ui/components/Datepicker";

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
