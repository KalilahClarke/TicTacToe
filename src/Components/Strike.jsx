import React from 'react'

export default function Strike({ strike }) {
  console.log(strike);
  return (
    <div className={`strike ${strike}`}></div>
  )
}
