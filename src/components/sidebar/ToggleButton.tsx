type ToggleButtonProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const ToggleButton = ({ setOpen }: ToggleButtonProps) => {
  return (
    <button
      onClick={() => setOpen((prev) => !prev)}
      className="w-12.5 h-12.5 rounded-[50%] fixed top-6.25 left-6.25 bg-transparent cursor-pointer border-none"
    >
      button
      <></>
    </button>
  );
};
export default ToggleButton;
