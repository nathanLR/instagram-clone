import Button from "../form/Button";
import Input from "../form/Input";
import Logo from "../global/Logo";
import RegisterClasses from "./register.module.scss";

const Register = () => {
  return (
    <div className={RegisterClasses.registerContainer}>
      <div>
        <Logo maxWidth={175} />
      </div>
      <div>
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
          />
          <Input
            placeholder="Nom d'utilisateur"
            label="Nom d'utilisateur"
            type="text"
            name="userName"
            id="userName"
          />
          <Input
            placeholder="Mot de passe"
            label="Mot de passe"
            type="password"
            name="password"
            id="password"
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
          >
            Suivant
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Register;
