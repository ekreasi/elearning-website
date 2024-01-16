import "./input.css";
import { INPUT_TYPES } from "../../Data/input";

const Input = (props) => {
  const { type, icon, inputText, inputType } = props;

  const getInputClass = () => {
    switch (type) {
      case INPUT_TYPES.PRIMARY:
        return "primary-input input";
      case INPUT_TYPES.SECONDARY:
        return "secondary-input input";
      default:
        return "tertiary-button input";
    }
  };

  return (
    <div className="input-container">
      <input
        className={getInputClass()}
        type={inputType}
        placeholder={`${icon} ${inputText}`}
      />
    </div>
  );
};

export default Input;
