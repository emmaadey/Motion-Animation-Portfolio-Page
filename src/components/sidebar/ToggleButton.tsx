import { motion } from "motion/react";
type ToggleButtonProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const ToggleButton = ({ open, setOpen }: ToggleButtonProps) => {
  return (
    <button
      onClick={() => setOpen((prev) => !prev)}
      className="w-12.5 h-12.5 rounded-[50%] fixed top-6.25 left-6.25 bg-transparent cursor-pointer border-none"
    >
      <motion.svg animate={open ? "open" : "closed"}>
        <motion.path
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
        />

        <motion.path
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
        />

        <motion.path
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          variants={{
            closed: { d: "M 2 16.5 L 20 16.5" },
            open: { d: "M 3 2.5 L 17 16.5" },
          }}
        />
      </motion.svg>
    </button>
  );
};
export default ToggleButton;
