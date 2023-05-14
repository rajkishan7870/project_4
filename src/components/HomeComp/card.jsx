import React from 'react'
import style from './card.module.css'

export default function Card({cardInfo}) {
  return (
    <div className={style.card}>
        {cardInfo.title}
    </div>
  )
}
