export const Badge = ({ children, className }) => {
  return (
    <div className={`flex flex-row justify-center bg-mintable-purple text-white font-bold md:h-10 md:w-10 h-8 w-8 rounded-full items-center md:text-lg text-sm ${className}`}>
      { children }
    </div>
  )
}
