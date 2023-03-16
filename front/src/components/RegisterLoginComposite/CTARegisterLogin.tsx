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
        <a href={linkHref} role="link">
          {linkContent}
        </a>
      </p>
    </div>
  );
}

export default CTARegisterLogin;
