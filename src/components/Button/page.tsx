interface ButtonProps {

  text: string;
  justify?: string;
  width: string;
  onClick:() => void;
}

const Button = (props: ButtonProps) => {
  return (
    <div className={props.justify}>
      <button
        className={
          props.width +
            `
              bg-primary
                rounded-lg
                m-3
                px-[1.2em] py-[0.35em]
                inline-block
                box-border
              text-white font-bold 
              hover:bg-primaryDark transition duration-100 ease-in-out`}
            onClick={props.onClick}
      >
        {props.text}
        
      </button>
    </div>
  );
};

export default Button;
