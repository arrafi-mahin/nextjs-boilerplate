/**
 * Input Component
 *
 * A reusable input component with customizable styles and attributes.
 *
 * @param {Object} props - The component's props.
 * @param {string} [props.style='style1'] - The style of the input.
 * @param {string} [props.className=''] - Additional CSS classes for the input.
 * @param {string} [props.id=''] - The HTML id attribute for the input.
 * @param {string} [props.name=''] - The HTML name attribute for the input.
 * @param {string} [props.value=''] - The value attribute for the input.
 * @param {function} [props.onChange=''] - The onChange event handler for the input.
 * @param {function} [props.onBlur=''] - The onBlur event handler for the input.
 * @param {Object} [props.rest={}] - Additional props to be spread onto the input element.
 * @param {ReactNode} [props.children=''] - The content to be displayed inside the input.
 *
 * @returns {ReactNode} The rendered input component.
 */
// Example

{/* <Input
  style="primary"
  size="lg"
  label="Input Filed large"
  type="text"
  onBlur={()=>{}}
  onChange={()=>{}}
  value={''}
  placeholder="Enter Text"
  rest={{}}
/>; */}

const styles = {
  primary: "",
  secondary: "",
  custom: "",
};
const labelStyle = {
  primary: "",
  secondary: "",
  custom: "",
};
const inputSize = {
  lg: "",
  md: "",
  sm: "",
};
const Input = ({
  style = "primary",
  className = "",
  id = "",
  name = "",
  value,
  onChange,
  type = "text",
  onBlur,
  rest = {},
  placeholder = "",
  size = "md",
  label,
  error,
  min = 0,
  max,
}) => {
  return (
    <div className="flex flex-col">
      {label && (
        <label className={`${labelStyle[style]} mb-1`} htmlFor={id}>
          {label}
        </label>
      )}
      <input
        className={`${styles[style]} ${className} ${
          inputSize[size]
        } focus:outline-none px-6 ${error ? "border-danger" : ""}`}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        type={type}
        min={min}
        max={max}
        placeholder={placeholder}
        {...rest}
      />
    </div>
  );
};

export default Input;
