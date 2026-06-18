/**
 * InputField.jsx — Form Component
 * Input teks standar dengan label dan pesan error
 * Props: label, name, type, placeholder, value, onChange, error, required, icon
 */
export default function InputField({
  label,
  name,
  type = "text",
  placeholder = "",
  value,
  onChange,
  error = "",
  required = false,
  icon = null,
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
      <div className="relative">
        {icon && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
            {icon}
          </span>
        )}
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          className={`
            w-full ${icon ? "pl-10" : "pl-4"} pr-4 py-2.5
            bg-gray-50 border rounded-xl text-sm
            outline-none transition-colors
            placeholder-gray-400
            disabled:bg-gray-100 disabled:cursor-not-allowed
            ${error
              ? "border-merah focus:border-merah focus:ring-1 focus:ring-merah"
              : "border-gray-300 focus:border-biru focus:ring-1 focus:ring-biru"
            }
          `}
        />
      </div>
      {error && (
        <p className="text-xs text-merah flex items-center gap-1">
          <span>⚠️</span> {error}
        </p>
      )}
    </div>
  );
}
