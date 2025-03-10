import { ReactNode, FC } from "react";
// styles
import styles from "./Button.module.scss";

interface ButtonProps {
  onClick: () => void;
  children: ReactNode;
  disabled?: boolean;
}

export const Button: FC<ButtonProps> = ({ children, onClick, disabled }) => {
  return (
    <button onClick={onClick} disabled={disabled} className={styles.Button}>
      {children}
    </button>
  );
};
