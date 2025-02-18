import { ITextInput } from "../../api/types";
import TextArea from "../../ui/components/TextArea";
import { required } from "../validation/errText";

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
