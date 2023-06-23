'use client'

import { useState, useEffect, axios, parse, ContentEditable, useRef } from '@components'

export default function FilterPage() {
  const [data, setData] = useState([])
  const [filteredJournals, setFilteredJournals] = useState([])
  const [filter, setFilter] = useState('')
  const text = useRef('hello there')

  const handleChange = e => {
    text.current = e.target.value
  }

  const handleBlur = () => {
    console.log(text.current)
  }

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
      <ContentEditable
        html={text.current}
        onBlur={handleBlur}
        onChange={handleChange}
        className="bg-blue-100 p-2 m-1"
      />
    </>
  )
}
