import { ITextInput } from "@/shared/types";
import { required } from "@/shared/form/model/validation/lib/errText";
import File from "@/shared/form/ui/components/File";

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
