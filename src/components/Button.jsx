function Button({ children, onClick, disabled }) {
  return (
    <button
      className="flex items-center justify-center p-3 border-2 rounded-lg gap-2 shadow-custom border-gray-200 text-sm disabled:cursor-not-allowed"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
