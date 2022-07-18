import * as yup from "yup";

const schema = yup.object().shape({
  name: yup
    .string()
    .min(2, "mínimo 2 caracteres")
    .required("O nome é obrigatório"),
  date: yup.number().min().required("Data de nascimento obrigatório"),
});

(async () => {
  try { 
    const cpfIsInvalid = ("")
    const schema = yup.object().shape({
      cpf: yup.string().test("test-invalid-cpf", "cpf inválido", (cpf) =>
        cpfIsInvalid(cpf)
      ),
    });
    await schema.validate({ cpf: "123.123.123-12" });
  } catch (err) {
    throw new Error(err.message);
  }
})();

export default schema;
