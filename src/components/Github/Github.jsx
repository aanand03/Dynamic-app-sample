import React, { useEffect, useState } from 'react'

function Github() {
    const [data, setData] = useState("")

    useEffect(() => {
        fetch('https://api.github.com/users/aanand03')
        .then((data) => data.json())
        .then((info) => setData(info))
    })

  return (
    <div className='bg-orange-700 m-4 p-4 flex items-center'>
        <div>
        <img src={data.avatar_url} alt="Git picture" width={300} />
        </div>
     
    Github Followers: {data['followers']}
    </div>
  )
}

export default Github