import clsx from "clsx";
import { FC } from "react";
import style from "./Promo.module.scss";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formData } from "./config";
import { Field, makeInitialValues, validateSchema } from "@/widgets/form";

const Promo: FC = () => {
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
    <section className={clsx(style.promo)}>
      <div className={clsx(style.promo__inner, "container")}>
        <h1>gggllg</h1>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            {formData.map((item) => (
              <Field key={item.name} {...item} />
            ))}
          </form>
        </FormProvider>
      </div>
    </section>
  );
};
export default Promo;
