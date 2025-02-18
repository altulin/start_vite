/* eslint-disable no-useless-escape */
import { TValidations } from "../../api/types";
import {
  confirmPasswordMatch,
  nameMax,
  nameMin,
  passwordMax,
  passwordMin,
  required,
  requiredCheck,
  valid,
} from "./errText";
import * as yup from "yup";

enum fields {
  NAME = "name",
  CHECKBOX = "checkbox",
  DATEPICKER = "datepicker",
  EMAIL = "email",
  FILE = "file",
  PASSWORD = "password",
  CONFIRMPASSWORD = "confirmPassword",
  PHONE = "phone",
  SELECT = "select",
  TEXTAREA = "textarea",
}

const req = {
  type: "required",
  params: [required],
};

export const validateFields: Record<fields, TValidations[]> = {
  [fields.NAME]: [
    req,
    {
      type: "min",
      params: [2, nameMin],
    },
    {
      type: "max",
      params: [50, nameMax],
    },
  ],

  [fields.CHECKBOX]: [
    {
      type: "oneOf",
      params: [[true], requiredCheck],
    },
  ],

  [fields.DATEPICKER]: [req],

  [fields.EMAIL]: [
    req,
    {
      type: "matches",
      params: [/@[^.]*\./, valid],
    },
    {
      type: "email",
      params: [valid],
    },
  ],

  [fields.FILE]: [req],

  [fields.PASSWORD]: [
    req,
    {
      type: "min",
      params: [8, passwordMin],
    },
    {
      type: "max",
      params: [14, passwordMax],
    },
  ],

  [fields.CONFIRMPASSWORD]: [
    req,
    {
      type: "oneOf",
      params: [[yup.ref("password")], confirmPasswordMatch],
    },
  ],

  [fields.PHONE]: [
    req,
    {
      type: "matches",
      params: [/^(\+7|8) \(\d{3}\) \d{3}\-\d{2}\-\d{2}$/gm, valid],
    },
  ],

  [fields.SELECT]: [req],

  [fields.TEXTAREA]: [
    req,
    {
      type: "max",
      params: [100, "Не более 100 символов"],
    },
  ],
};
