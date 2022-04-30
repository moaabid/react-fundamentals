import { useState } from 'react'

export const PostForm = () => {
  const [userID, setUserID] = useState('')
  const [title, setTitle] = useState('')
  const [body, setbody] = useState('')

  const submitHandler = (event) => {
    event.preventDefault()
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: title,
        body: body,
        userId: userID,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json))
  }

  return (
    <form onSubmit={submitHandler}>
      <div>
        <input
          type="text"
          value={userID}
          onChange={(event) => setUserID(event.target.value)}
          placeholder="User ID"
        ></input>
      </div>
      <div>
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Title"
        ></input>
      </div>
      <div>
        <input
          type="text"
          value={body}
          onChange={(event) => setbody(event.target.value)}
          placeholder="Body"
        ></input>
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}
