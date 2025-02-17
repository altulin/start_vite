import { ITextInput } from "@/entities/types";
import { required } from "@/entities/form/model/validation/errText";
import TextArea from "@/entities/form/ui/components/TextArea";

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
