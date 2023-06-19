import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Search from './components/Search'
import useDebounce from './useDebounced'
import FoodItem from './components/FoodItem'
import Food from './components/Food'
const App = () => {
    const [search, setSearch] = useState('')
    const debounceSearch = useDebounce(search, 500)
    const [foods, setFoods] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
      setLoading(true)
      axios
      .get (`https://www.themealdb.com/api/json/v1/1/search.php?s=Chicken`)
      .then(res => {
        setFoods(res.data.Search)
      })
      .finally(() => setLoading(false))
    }, [debounceSearch])

  return (
    <div className='min-h-screen w-full bg-slate-900'>
    <div className='w-[80%] min-h-[50vh] mx-auto my-[10vh] bg-blue-300 rounded-md p-6 shadow-md'>
      <Search search={search} setSearch={setSearch} />
      {!loading && !foods ? (
        <h1 className='center my-12 flex h-[400px] items-center justify-center rounded-md bg-slate-50 text-3xl text-slate-400'>
          Foods not found!!
        </h1>
      ) : (
        <Food foods={foods} loading={loading} />
      )}
    </div>
    </div>
  )
}

export default App