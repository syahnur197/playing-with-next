export const Button = ({ children, onClick, className }) => {
  return <button onClick={onClick} className={`bg-primary-400 py-2 px-4 ${className}`}>
    {children}
  </button>
}
