import { ITextInput } from "@/shared/types";
import { required } from "@/shared/form/model/validation/lib/errText";
import MySelect from "@/shared/form/ui/components/select/Select";

export const fieldSelect = (args: ITextInput) => {
  return {
    type: "select",
    validation_type: "string",
    validations: [
      {
        type: "required",
        params: [required],
      },
      // {
      //   type: "test",
      //   params: [
      //     "len",
      //     "Must be exactly 5 characters",
      //     (val: string) => val.length > 0,
      //   ],
      // },
    ],
    component: MySelect,
    ...args,
  };
};
