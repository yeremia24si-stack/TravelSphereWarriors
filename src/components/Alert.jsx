/**
 * Alert.jsx — Feedback Component
 * Menampilkan pesan notifikasi / feedback
 * Props: type, title, message, onClose, closable
 */
export default function Alert({ type = "info", title = "", message, onClose, closable = true }) {
  const styles = {
    success: {
      wrapper: "bg-green-50 border-green-200 text-hijau",
      icon: "✅",
    },
    danger: {
      wrapper: "bg-red-50 border-red-200 text-merah",
      icon: "❌",
    },
    warning: {
      wrapper: "bg-yellow-50 border-yellow-200 text-kuning",
      icon: "⚠️",
    },
    info: {
      wrapper: "bg-blue-50 border-blue-200 text-biru",
      icon: "ℹ️",
    },
  };

  const style = styles[type] || styles.info;

  return (
    <div className={`border rounded-xl px-4 py-3 flex items-start gap-3 ${style.wrapper}`}>
      <span className="text-base flex-shrink-0 mt-0.5">{style.icon}</span>
      <div className="flex-1">
        {title && <p className="font-semibold text-sm mb-0.5">{title}</p>}
        <p className="text-sm opacity-90">{message}</p>
      </div>
      {closable && onClose && (
        <button
          onClick={onClose}
          className="text-current opacity-60 hover:opacity-100 transition-opacity text-lg leading-none ml-auto cursor-pointer bg-transparent border-none"
        >
          ×
        </button>
      )}
    </div>
  );
}