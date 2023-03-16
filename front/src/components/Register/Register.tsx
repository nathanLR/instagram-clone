import { useState } from "react";
import Button from "../form/Button";
import Input from "../form/Input";
import Logo from "../global/Logo";
import RegisterClasses from "./register.module.scss";
import { validationEmail } from "../../constants";
import RegisterLoginComposite from "../RegisterLoginComposite/RegisterLoginComposite";
import CTARegisterLogin from "../RegisterLoginComposite/CTARegisterLogin";

const Register = () => {
  const [form, setForm] = useState<Record<string, string>>({
    email: "",
    userName: "",
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
    return (
      form.email.length > 0 &&
      validationEmail.test(form.email) &&
      form.userName.length > 0 &&
      form.password.length > 0
    );
  };
  const handleSubmit = (): void => {};

  return (
    <>
      <RegisterLoginComposite>
        <form>
          <h2 className={RegisterClasses.registerTitle}>
            Inscrivez-vous pour voir les photos et vidéos de vos amis.
          </h2>
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
            placeholder="Nom d'utilisateur"
            label="Nom d'utilisateur"
            type="text"
            name="userName"
            id="userName"
            value={form.userName}
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
            event={() => {
              console.log("cliqué");
            }}
            disabled={!isFormValid()}
          >
            Suivant
          </Button>
        </form>
      </RegisterLoginComposite>
      <CTARegisterLogin
        text="Vous avez un compte ? "
        linkContent="Connectez-vous"
        linkHref="/account/login"
      />
    </>
  );
};

export default Register;
