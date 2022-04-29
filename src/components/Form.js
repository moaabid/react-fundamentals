import { useState } from 'react'
export const Form = () => {
  const [userName, setUserName] = useState('')
  const [description, setDescription] = useState('')
  const [dropDown, setdropDown] = useState('volvo')

  const handleSubmit = (event) => {
    event.preventDefault()
    alert(`${userName} ${description} ${dropDown}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username</label>
        <input
          type="text"
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        ></input>
      </div>
      <div>
        <label>Description</label>
        <textarea
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        ></textarea>
      </div>
      <div>
        <label>Select</label>
        <select
          name="cars"
          id="cars"
          value={dropDown}
          onChange={(event) => setdropDown(event.target.value)}
        >
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
      </div>
      <button type="submit">submit</button>
    </form>
  )
}
