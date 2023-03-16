import { ReactNode } from "react";
import Logo from "../global/Logo";
import RegisterLoginCompositeClasses from "./registerLoginComposite.module.scss";

function RegisterLoginComposite({ children }: { children?: ReactNode }) {
  return (
    <div className={RegisterLoginCompositeClasses.RLCompositeContainer}>
      <div>
        <Logo maxWidth={175} />
      </div>
      <div>{children}</div>
    </div>
  );
}

export default RegisterLoginComposite;
