import { ButtonProps } from "@/interface";

const Button = ({ buttonLabel, buttonSize, buttonBackgroundColor, action }: ButtonProps) => {
  // Map background colors to Tailwind classes
 const backgroundColorClass = buttonBackgroundColor
  ? {
      red: "bg-red-500",
      blue: "bg-blue-500",
      orange: "bg-orange-500",
      green: "bg-green-500",
    }[buttonBackgroundColor] || "bg-slate-500"
  : "bg-slate-500";
 // Default to gray if no valid color is provided

  return (
    <button
      onClick={action}
      className={`${backgroundColorClass} ${buttonSize || "px-4 py-2"} text-sm font-semibold rounded-lg hover:opacity-80 transition duration-300 text-white`}
    >
      {buttonLabel}
    </button>
  );
};

export default Button;
