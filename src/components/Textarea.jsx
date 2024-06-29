function Textarea({ value, onChange, disabled, placeholder, onFocus }) {
  return (
    <textarea
      className="w-full resize-none p-3 border-2 shadow-custom my-2 rounded-e-lg rounded-b-lg max-h-16 text-sm outline-none font-normal bg-white"
      maxLength={1001}
      value={value}
      onChange={onChange}
      disabled={disabled}
      placeholder={placeholder}
      onFocus={onFocus}
    ></textarea>
  );
}

export default Textarea;
