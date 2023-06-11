'use client'

import { useState, useEffect } from 'react'
import axios from 'axios'
import parse from 'html-react-parser'

export default function FilterPage() {
  const [data, setData] = useState([])
  const [filteredData, setFilteredData] = useState([])
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
    setFilteredData(filtered)
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Filter by name..."
        value={filter}
        onChange={handleFilterChange}
      />
      {filter && (
        <ul>
          {filteredData.map(item => (
            <li key={item.id}>{parse(item.comment)}</li>
          ))}
        </ul>
      )}
    </div>
  )
}
