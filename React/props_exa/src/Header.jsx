import React from 'react'

function Header({ title, dep, year }) {
  return (
    <div>
      <h1>{title} - {dep} - {year}</h1>
      <hr />
    </div>
  )
}

export default Header
