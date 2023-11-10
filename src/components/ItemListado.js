import React from 'react'

export default function ItemListado(props) {
    const {name, price} = props
  return (
    <div>
      <h3>{name}</h3>
      <p>{price}</p>
    </div>
  )
}
