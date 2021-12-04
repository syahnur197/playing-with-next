export const Button = ({ children, onClick, className }) => {
  return <button onClick={onClick} className={`bg-mintable-purple text-white ${className}`}>
    {children}
  </button>
}
