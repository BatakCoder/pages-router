import React from 'react'
import { useRouter } from 'next/router'
const index = () => {
  const { query } = useRouter()
  console.log(query.slug)

  return (
    <div>
      <h1>Shop Page</h1>
      {query.slug ? (
        <p>
          Product : {query.slug[0]} - {query.slug[1]}
        </p>
      ) : null}
    </div>
  )
}

export default index
