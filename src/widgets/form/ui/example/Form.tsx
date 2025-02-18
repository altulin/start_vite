import { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formData } from "./config";
import { Field, makeInitialValues, validateSchema } from "@/widgets/form";

const Form: FC = () => {
  const { ...methods } = useForm({
    resolver: yupResolver(validateSchema(formData)),
    mode: "onChange",
    defaultValues: { ...makeInitialValues(formData) },
  });

  const { reset, handleSubmit } = methods;

  const onSubmit = (data: Record<string, string>) => {
    console.log(data);
    reset();
  };

  return (
    <div>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          {formData.map((item) => (
            <Field key={item.name} {...item} />
          ))}
        </form>
      </FormProvider>
    </div>
  );
};
export default Form;
