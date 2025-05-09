type ButtonProps = {
  text: string;
  href?: string;
  onClick?: () => void;
  className?: string;
};

function Button({ text, href, onClick, className }: ButtonProps) {
  const buttonClass = `${className || ""}`;

  return (
    <button className={buttonClass} onClick={onClick}>
      <a href={href}> {text}</a>
    </button>
  );
}

export default Button;
