import { Link } from "react-router-dom";
import CTARegisterLoginClasses from "./CTARegisterLogin.module.scss";

type CTARegisterLoginPropType = {
  text: string;
  linkHref: string;
  linkContent: string;
};

function CTARegisterLogin({ text, linkHref, linkContent }: CTARegisterLoginPropType) {
  return (
    <div className={CTARegisterLoginClasses.container}>
      <p className={CTARegisterLoginClasses.ctaP}>
        {text}
        <Link to={linkHref} role="link">
          {linkContent}
        </Link>
      </p>
    </div>
  );
}

export default CTARegisterLogin;
