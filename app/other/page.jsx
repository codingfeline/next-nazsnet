'use client'

import { useState, useEffect, axios, parse } from '@components'

export default function FilterPage() {
  const [data, setData] = useState([])
  const [filteredJournals, setFilteredJournals] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const response = await axios.get('https://nazs.net/api/journals') // Replace with your API endpoint
      setData(response.data)
      setFilteredData(response.data)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  const handleFilterChange = event => {
    const { value } = event.target
    setFilter(value)

    const filtered = data.filter(
      item =>
        item.comment.toLowerCase().includes(value.toLowerCase()) ||
        item.topic.toLowerCase().includes(value.toLowerCase())
    )
    setFilteredJournals(filtered)
  }

  return (
    <>
      <div className="">
        <input
          type="text"
          placeholder="Filter by name..."
          value={filter}
          onChange={handleFilterChange}
        />
        {filter && (
          <ul>
            {filteredJournals.map(item => (
              <li key={item.id}>{parse(item.comment)}</li>
            ))}
          </ul>
        )}
      </div>
      {filter && filteredJournals.length === 0 && <p>no result </p>}
    </>
  )
}
