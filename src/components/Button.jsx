

const Button = ({ title, className,onClick }) => {
  return (
    <button
      className={`px-4 py-2 rounded-md text-2xl font-bold cursor-pointer border active:scale-95 duration-200 ${className}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
