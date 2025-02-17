import { fieldCheckbox } from "@/entities/form/model/options/lib/checkbox";
import { fieldDatePicker } from "@/entities/form/model/options/lib/datepicker";
import { fieldEmail } from "@/entities/form/model/options/lib/email";
import { fieldFile } from "@/entities/form/model/options/lib/file";
import { fieldName } from "@/entities/form/model/options/lib/name";
import {
  fieldPassword,
  fieldConfirmPassword,
} from "@/entities/form/model/options/lib/password";
import { fieldPhone } from "@/entities/form/model/options/lib/phone";
import { fieldRadio } from "@/entities/form/model/options/lib/radio";
import { fieldSelect } from "@/entities/form/model/options/lib/select";
import { fieldTextArea } from "@/entities/form/model/options/lib/textarea";
import Field from "@/entities/form/ui/hoc/Field";
import { validateSchema } from "@/entities/form/model/validation/lib/yupSchemaCreator";
import { makeInitialValues } from "@/entities/form/model/initial/lib/initialValues";

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
