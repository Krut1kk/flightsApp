// react
import { ChangeEvent, FC } from "react";
// styles
import styles from "./Input.module.scss";

interface InputProps {
  value: string | number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

export const Input: FC<InputProps> = ({ value, onChange, placeholder }) => {
  return (
    <input
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={styles.Input}
    />
  );
};
