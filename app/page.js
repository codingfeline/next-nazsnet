import React from 'react'
import parse from 'html-react-parser'

const page = async () => {
  const journals = await getJournals()
  // console.log(journals)
  return (
    <>
      <div className="flex flex-col justify-center items-center   bg-lime-100">
        page <hr />
        <ul className="flex flex-col justify-center  w-3/4 overflow-x-clip">
          {/* {JSON.stringify(journals.length)} */}
          {journals.map(journal => (
            <li className="w-3/">{parse(journal.comment)}</li>
          ))}
        </ul>
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
