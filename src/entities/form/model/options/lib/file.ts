import { ITextInput } from "@/entities/types";
import { required } from "@/entities/form/model/validation/lib/errText";
import File from "@/entities/form/ui/components/File";

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
