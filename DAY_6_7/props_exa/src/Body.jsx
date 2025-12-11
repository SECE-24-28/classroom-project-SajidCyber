import React from 'react'

function Body({ list, handleCheck, handleDelete }) {
  return (
    <ul>
      {list.map((ls) => (
        <li key={ls.id}>
          <input
            type="checkbox"
            checked={ls.fee}
            onChange={() => handleCheck(ls.id)}
          />
          <label>{ls.sname}</label>
          <button onClick={() => handleDelete(ls.id)}>Delete</button>
        </li>
      ))}
    </ul>
  )
}

export default Body
