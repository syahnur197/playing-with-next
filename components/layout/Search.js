export const Search = () => {
  return (
    <div className="flex flex-row items-center border-mintable-light-purple border">
      <input type="text" className="bg-mintable-light-purple opacity-40 h-10 px-4 placeholder-mintable-gray" placeholder="Searh for anything"/>
      <select className="hidden md:block bg-mintable-light-purple h-10 px-2">
        <option>Type</option>
      </select>
      <span className="hidden md:flex bg-mintable-light-purple h-10 px-2 flex-row items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </span>
    </div>
  )
}
