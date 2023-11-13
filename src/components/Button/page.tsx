interface ButtonProps {
  text: string;
  onClick?: () => void;
}

const Button = (props: ButtonProps) => {
  return (
    <div className="flex justify-end">
      <button
        className={`
                bg-primary
                w-1/4 
                rounded-lg p-2
                text-white font-bold 
                hover:bg-primaryDark transition duration-100 ease-in-out`}
      >
        {props.text}
      </button>
    </div>
  );
};

export default Button;
