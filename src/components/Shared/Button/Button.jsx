
/**
 * Button Component
 *
 * A reusable button component with customizable styles and click event handling.
 *
 * @param {Object} props - The component's props.
 * @param {string} [props.style='primary'] - The style of the button.
 * @param {string} [props.className=''] - Additional CSS classes for the button.
 * @param {ReactNode} [props.children=''] - The content to be displayed inside the button.
 * @param {function} [props.onClick=''] - The onClick event handler for the button.
 *
 * @returns {ReactNode} The rendered button component.
 */

// Example
{
  /* <Button type="button" onClick={() => { console.log("Clicked"); }}style="secondary">hello world</Button>; */
}

const styles = {
  primary:
    "bg-green-500 text-white py-3 px-4 w-full font-nunito font-bold text-base",
  secondary: "bg-red-500 text-white py-2 px-4 w-full font-nunito font-bold",
  outline:
    "border border-primary rounded-full py-2 px-4 text-base font-semibold text-primary font-nunito w-full",
  custom: "",
};

const Button = ({
  style = "primary", // Default style to 'primary'
  className = "",
  type = "button",
  children = "",
  onClick,
  disabled = false,
}) => {
  return (
    <button
      className={`${styles[style]} ${className}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
