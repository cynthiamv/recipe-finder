type IconButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
};

const IconButton = ({ onClick, children }: IconButtonProps) => (
  <button
    onClick={onClick}
    className="p-2 w-10 h-10 rounded-full cursor-pointer flex items-center justify-center hover:bg-[var(--button-hover-bg)] transition"
  >
    {children}
  </button>
);

export default IconButton;
