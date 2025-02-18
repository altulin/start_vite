import { fieldForm, ITextInput, validateFields } from "@/widgets/form";
import { onNameInput } from "@/widgets/form/model/masks/name";
import { onPhoneInput } from "@/widgets/form/model/masks/phone";
import Checkbox from "@/widgets/form/ui/components/Checkbox";
import MyDatePicker from "@/widgets/form/ui/components/Datepicker";
import File from "@/widgets/form/ui/components/File";
import PasswordField from "@/widgets/form/ui/components/password/PasswordField";
import RadioGroup from "@/widgets/form/ui/components/RadioGroup";
import MySelect from "@/widgets/form/ui/components/select/Select";
import TextArea from "@/widgets/form/ui/components/TextArea";
import CheckboxInner from "../../../../widgets/form/ui/example/CheckboxInner";

export const radio_list = [
  { label: "Тест_1", value: "test_1" },
  { label: "Тест_2", value: "test_2" },
  { label: "Тест_3", value: "test_3" },
];

export const formData: ITextInput[] = [
  fieldForm({
    label_text: "Name",
    name: "name",
    placeholder: "Enter your name",
    onInput: onNameInput,
    validations: validateFields.name,
  }),

  fieldForm({
    name: "checkbox",
    type: "checkbox",
    validation_type: "boolean",
    component: Checkbox,
    validations: validateFields.checkbox,
    checked: true,
    inner: CheckboxInner,
  }),

  fieldForm({
    name: "datepicker",
    label_text: "Datepicker",
    component: MyDatePicker,
    validations: validateFields.datepicker,
  }),

  fieldForm({
    type: "email",
    name: "email",
    label_text: "Email",
    validations: validateFields.email,
  }),

  fieldForm({
    type: "file",
    name: "file",
    label_text: "File",
    component: File,
    validations: validateFields.file,
  }),

  fieldForm({
    name: "password",
    label_text: "Password",
    placeholder: "Enter your password",
    autoComplete: "off",
    component: PasswordField,
    validations: validateFields.password,
  }),

  fieldForm({
    name: "confirmPassword",
    label_text: "Confirm password",
    placeholder: "Enter your password",
    autoComplete: "off",
    component: PasswordField,
    validations: validateFields.confirmPassword,
  }),

  fieldForm({
    name: "phone",
    label_text: "Phone",
    placeholder: "+7 (___) ___-__-__",
    type: "tel",
    onInput: onPhoneInput,
    validations: validateFields.phone,
  }),

  fieldForm({
    name: "radio",
    radio_list,
    init_value: radio_list[0],
    type: "radio",
    component: RadioGroup,
  }),

  fieldForm({
    name: "select",
    label_text: "Select",
    component: MySelect,
    validations: validateFields.select,
  }),

  fieldForm({
    name: "textarea",
    label_text: "Textarea",
    minRows: 1,
    component: TextArea,
    validations: validateFields.textarea,
  }),
];
