export default function Input({
  label,
  type = "text",
  value = "",
  handleChange,
}) {
  return (
    <p>
      <label htmlFor={label}>{label}</label>
      <input
        id={label}
        type={type}
        value={value}
        required
        onChange={handleChange}
      />
    </p>
  );
}
