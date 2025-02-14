import { ITextInput } from "@/shared/types";
import { required } from "@/shared/form/model/validation/lib/errText";
import TextArea from "@/shared/form/ui/components/TextArea";

export const fieldTextArea = (args: ITextInput) => {
  return {
    validation_type: "string",

    validations: [
      {
        type: "required",
        params: [required],
      },
      {
        type: "max",
        params: [100, "Не более 100 символов"],
      },
    ],
    component: TextArea,
    ...args,
  };
};
