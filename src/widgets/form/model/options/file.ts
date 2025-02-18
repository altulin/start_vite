import { ITextInput } from "../../api/types";
import File from "../../ui/components/File";
import { required } from "../validation/errText";

export const fieldFile = (args: ITextInput) => {
  return {
    type: "file",
    validation_type: "string",

    validations: [
      {
        type: "required",
        params: [required],
      },
    ],

    component: File,
    ...args,
  };
};
