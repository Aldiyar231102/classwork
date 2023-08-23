import Button from "../Button/Button";
import Input from "../Input/Input";

export default function Form({
  placeholder,
  inputValue,
  onChange,
  buttonValue,
  onClick,
}) {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Input placeholder={placeholder} onChange={onChange} value={inputValue} />
      <Button value={buttonValue} onClick={onClick} />
    </div>
  );
}
