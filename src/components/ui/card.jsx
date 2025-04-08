export function Card({ children, className = "" }) {
  return <div className={`rounded shadow p-4 ${className}`}>{children}</div>;
}

export function CardContent({ children, className = "" }) {
  return <div className={`mt-2 text-sm text-gray-600 ${className}`}>{children}</div>;
}
