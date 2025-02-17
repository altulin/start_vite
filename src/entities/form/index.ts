import { fieldCheckbox } from "@/entities/form/model/options/checkbox";
import { fieldDatePicker } from "@/entities/form/model/options/datepicker";
import { fieldEmail } from "@/entities/form/model/options/email";
import { fieldFile } from "@/entities/form/model/options/file";
import { fieldName } from "@/entities/form/model/options/name";
import {
  fieldPassword,
  fieldConfirmPassword,
} from "@/entities/form/model/options/password";
import { fieldPhone } from "@/entities/form/model/options/phone";
import { fieldRadio } from "@/entities/form/model/options/radio";
import { fieldSelect } from "@/entities/form/model/options/select";
import { fieldTextArea } from "@/entities/form/model/options/textarea";
import Field from "@/entities/form/ui/hoc/Field";
import { validateSchema } from "@/entities/form/model/validation/yupSchemaCreator";
import { makeInitialValues } from "@/entities/form/model/initial/initialValues";

import { ITextInput, EnumTextInput } from "./api/types";

export {
  fieldCheckbox,
  fieldDatePicker,
  fieldEmail,
  fieldFile,
  fieldName,
  fieldPassword,
  fieldConfirmPassword,
  fieldPhone,
  fieldRadio,
  fieldSelect,
  fieldTextArea,
  Field,
  validateSchema,
  makeInitialValues,
};

export type { ITextInput, EnumTextInput };
