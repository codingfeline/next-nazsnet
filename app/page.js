'use client'
// prettier-ignore
import { useEffect, useState,  useDispatch,axios,  setJournal, useSelector, Modal } from '@components'

const Page = () => {
  const counter = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  const [isOpen, setIsOpen] = useState(false)

  const openDialog = () => {
    setIsOpen(true)
  }

  const closeDialog = () => {
    setIsOpen(false)
  }

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
      <div className="fixed inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={openDialog}
          className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Open dialog
        </button>
      </div>
      <Modal isOpen={isOpen} onClose={closeDialog} />
    </>
  )
}

export default Page

const getJournals = async () => {
  const res = await fetch('https://nazs.net/api/journals')
  if (!res.ok) {
    throw new Error('Failed to fetch')
  }
  return res.json()
}
