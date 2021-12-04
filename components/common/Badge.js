export const Badge = ({ children, className }) => {
  return (
    <div className={`flex flex-row justify-center bg-mintable-purple text-white font-bold text-lg h-10 w-10 rounded-full items-center ${className}`}>
      { children }
    </div>
  )
}
