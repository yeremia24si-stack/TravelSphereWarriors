/**
 * SelectField.jsx — Form Component
 * Dropdown select dengan label
 * Props: label, name, value, onChange, options, error, required, placeholder
 */
export default function SelectField({
  label,
  name,
  value,
  onChange,
  options = [],
  error = "",
  required = false,
  placeholder = "-- Pilih --",
  disabled = false,
}) {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label htmlFor={name} className="text-sm font-medium text-gray-700">
          {label}
          {required && <span className="text-merah ml-1">*</span>}
        </label>
      )}
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`
          w-full px-4 py-2.5 bg-gray-50 border rounded-xl text-sm
          outline-none transition-colors cursor-pointer appearance-none
          disabled:bg-gray-100 disabled:cursor-not-allowed
          ${error
            ? "border-merah focus:border-merah"
            : "border-gray-300 focus:border-biru focus:ring-1 focus:ring-biru"
          }
        `}
      >
        <option value="" disabled>{placeholder}</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && (
        <p className="text-xs text-merah flex items-center gap-1">
          <span>⚠️</span> {error}
        </p>
      )}
    </div>
  );
}