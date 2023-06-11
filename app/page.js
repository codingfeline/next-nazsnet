'use client'

import {
  useEffect,
  useDispatch,
  axios,
  setJournal,
  useSelector,
} from '@components'

const page = () => {
  const counter = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://nazs.net/api/journals')
        const journals = response.data
        dispatch(setJournal(journals))
      } catch (error) {
        console.error('Error fetching journals:', error)
      }
    }

    fetchData()
  }, [dispatch])

  return (
    <>
      <div className="flex flex-col justify-center items-center   bg-lime-100">
        <input type="text" onChange={e => setQuery(e.target.value)} />
        {counter}
      </div>
    </>
  )
}

export default page

const getJournals = async () => {
  const res = await fetch('https://nazs.net/api/journals')
  if (!res.ok) {
    throw new Error('Failed to fetch')
  }
  return res.json()
}
