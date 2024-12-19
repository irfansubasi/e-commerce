import { buttonStyles } from './buttonStyles';

const Button = ({ children, variant, size, ...props }) => {
  return (
    <button className={buttonStyles({ variant, size })} {...props}>
      {children}
    </button>
  );
};

export default Button;
