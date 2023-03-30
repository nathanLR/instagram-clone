import { useState } from "react";
import { useMutation } from "urql";
import { validationEmail } from "../../constants";
import { login } from "../../graphql/mutations";
import Button from "../form/Button";
import Input from "../form/Input";
import CTARegisterLogin from "../RegisterLoginComposite/CTARegisterLogin";
import RegisterLoginComposite from "../RegisterLoginComposite/RegisterLoginComposite";

const Login = () => {
  const [loginResult, loginFn] = useMutation(login);

  const [form, setForm] = useState<Record<string, string>>({
    email: "",
    password: "",
  });

  const handleFormState = ({ currentTarget }: React.FormEvent<HTMLInputElement>): void => {
    setForm((prev) => {
      return {
        ...prev,
        [currentTarget.name]: currentTarget.value,
      };
    });
  };

  const isFormValid = (): boolean => {
    return form.email.length > 0 && validationEmail.test(form.email) && form.password.length > 0;
  };
  const handleSubmit = (): void => {
    console.log(form);
    loginFn({ loginOptions: form }).then((retour) => {
      console.log(retour);
    });
  };
  return (
    <>
      <RegisterLoginComposite>
        <form>
          <Input
            placeholder="Adresse email"
            label="Adresse email"
            type="text"
            name="email"
            id="email"
            value={form.email}
            onChange={handleFormState}
          />
          <Input
            placeholder="Mot de passe"
            label="Mot de passe"
            type="password"
            name="password"
            id="password"
            value={form.password}
            onChange={handleFormState}
          />
          <Button
            id="submitRegistration"
            type="button"
            bgColor="rgb(0,149,246)"
            name="submit"
            color="white"
            event={handleSubmit}
            disabled={!isFormValid()}
          >
            Se connecter
          </Button>
        </form>
      </RegisterLoginComposite>
      <CTARegisterLogin
        text="Vous n'avez pas de compte ? "
        linkContent="Inscrivez-vous"
        linkHref="/register"
      />
    </>
  );
};

export default Login;
