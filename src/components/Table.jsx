/**
 * Table.jsx — Data Display Component
 * Menampilkan data dalam bentuk tabel
 * Props: headers, children, loading
 */
export default function Table({ headers = [], children, loading = false }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-[0_1px_8px_rgba(0,0,0,0.06)]">
      <table className="w-full text-sm bg-white">
        <thead className="bg-gray-50">
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                className="px-5 py-3 text-left text-[11px] font-semibold text-gray-400 uppercase tracking-wide whitespace-nowrap"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan={headers.length} className="px-5 py-10 text-center text-gray-400 text-sm">
                <div className="flex items-center justify-center gap-2">
                  <svg className="animate-spin w-4 h-4 text-biru" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                  </svg>
                  Loading data...
                </div>
              </td>
            </tr>
          ) : (
            children
          )}
        </tbody>
      </table>
    </div>
  );
}