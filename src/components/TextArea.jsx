/**
 * TextArea.jsx — Form Component
 * Area teks untuk deskripsi panjang
 * Props: label, name, placeholder, value, onChange, error, required, rows
 */
export default function TextArea({
  label,
  name,
  placeholder = "",
  value,
  onChange,
  error = "",
  required = false,
  rows = 4,
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
      <textarea
        id={name}
        name={name}
        rows={rows}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`
          w-full px-4 py-2.5 bg-gray-50 border rounded-xl text-sm
          outline-none transition-colors resize-none
          placeholder-gray-400
          disabled:bg-gray-100 disabled:cursor-not-allowed
          ${error
            ? "border-merah focus:border-merah"
            : "border-gray-300 focus:border-biru focus:ring-1 focus:ring-biru"
          }
        `}
      />
      {error && (
        <p className="text-xs text-merah flex items-center gap-1">
          <span>⚠️</span> {error}
        </p>
      )}
    </div>
  );
}