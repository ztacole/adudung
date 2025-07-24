export function Card({ children, className }) {
  return (
    <div className={`rounded-lg p-4 shadow-md transition-all duration-300 ease-in-out ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({ children, className }) {
  return <div className={`p-2 ${className}`}>{children}</div>;
}
  