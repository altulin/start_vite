import { ITextInput } from "../api/types";

export const fieldForm = ({ ...args }: ITextInput) => {
  return {
    validation_type: args.validation_type || "string",
    validations: args.validations || [],
    component: args.component || undefined,
    type: args.type || "text",
    ...args,
  };
};
