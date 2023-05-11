import React from 'react'
import style from './Home.module.css'
import Navbar from '../../components/Navbarcomp/Navbar'

export default function Home() {
  return (
    <div>
      <div className={style.nav}>
        <Navbar/>
      </div>
    </div>
  )
}
