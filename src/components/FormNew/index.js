import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "./validation";
import Form from "../Form";
import Field from "../Field";
import Button from "../Button";

const FormNew = () => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const newUser = (user) => {
    console.log(user);
  };

  return (
    <Form>
      <Field.Text label="Nome" name="name" type="text" ref={register} />
      {errors?.name?.message}
      <Field.Text id="date" type="date" ref={register} />
      <Field.Text label="CPF" name="CPF" inputmode="numeric" ref={register} />
      <Button onSubmit={handleSubmit(newUser)}>Enviar</Button>
    </Form>
  );
};

export default FormNew;
