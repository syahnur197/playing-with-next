export const Card = ({ children, className }) => {
  return <div className={`${className} rounded-lg bg-primary-400 py-4 px-2 flex flex-row justify-center`}>
    {children}
  </div>
}
