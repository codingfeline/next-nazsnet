'use client'
import React from 'react'
import { useSelector } from 'react-redux'

const Other = () => {
  const count = useSelector(state => state.counter.value)
  return <div>Other {count}</div>
}

export default Other
