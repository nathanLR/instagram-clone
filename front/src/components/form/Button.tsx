import ButtonClasses from "./button.module.scss";

type ButtonPropType = {
  type: "button" | "submit" | "reset"; // a revoir
  name?: string;
  id: string;
  bgColor: string;
  color: string;
  children: React.ReactNode;
  event?: () => void;
  disabled: boolean;
};

const Button = ({ type, name, children, id, bgColor, event, color, disabled }: ButtonPropType) => {
  return (
    <div className={ButtonClasses.buttonContainer}>
      <button
        type={type}
        onClick={event}
        style={{ backgroundColor: bgColor, color: color }}
        name={name}
        id={id}
        disabled={disabled}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
