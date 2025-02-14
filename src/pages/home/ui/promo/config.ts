import {
  fieldCheckbox,
  fieldConfirmPassword,
  fieldDatePicker,
  fieldEmail,
  fieldFile,
  fieldName,
  fieldPassword,
  fieldPhone,
  fieldRadio,
  fieldSelect,
  fieldTextArea,
} from "@/shared/form";
import { ITextInput } from "@/shared/types";

export const radio_list = [
  { label: "Тест_1", value: "test_1" },
  { label: "Тест_2", value: "test_2" },
  { label: "Тест_3", value: "test_3" },
];

export const formData: ITextInput[] = [
  fieldName({
    label_text: "Name",
    name: "name",
    placeholder: "Enter your name",
  }),
  fieldCheckbox({
    name: "checkbox",
    label_text: "Checkbox",
    checked: true,
  }),
  fieldDatePicker({
    name: "datepicker",
    label_text: "Datepicker",
  }),
  fieldEmail({
    name: "email",
    label_text: "Email",
  }),
  fieldFile({
    name: "file",
    label_text: "File",
  }),
  fieldPassword({
    name: "password",
    label_text: "Password",
    placeholder: "Enter your password",
  }),
  fieldConfirmPassword({
    name: "confirmPassword",
    label_text: "Confirm password",
    placeholder: "Enter your password",
  }),
  fieldPhone({
    name: "phone",
    label_text: "Phone",
  }),
  fieldRadio({
    name: "radio",
    label_text: "Radio",
    radio_list,
    init_value: radio_list[0],
  }),
  fieldSelect({
    name: "select",
    label_text: "Select",
  }),
  fieldTextArea({
    name: "textarea",
    label_text: "Textarea",
    minRows: 1.5,
  }),
];
