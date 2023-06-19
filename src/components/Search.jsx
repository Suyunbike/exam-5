import React from 'react'

const Search = ({ setSearch }) => {
  return (
   <label className='search flex w-full items-center gap-4 rounded-lg bg-slate-200 p-4 px-6'>
    <i className='bx bx-search-alt-2 text-4xl text-slate-400'></i>
    <input
    className=' w-full border-none bg-transparent py-4 text-2xl text-slate-600'
    onChange={e => setSearch(e.target.value)}
     type="text" placeholder='Enter your favourite food...' />
   </label>
  )
}

export default Search