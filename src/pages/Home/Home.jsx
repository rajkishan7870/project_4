import React from 'react'
import style from './Home.module.css'
import Navbar from '../../components/NavComp/Navbar'
import CardList from '../../components/card'
import DescriptionComp from '../../components/DescriptionComp/DescriptionComp'
import SideNav from '../../components/SideNavComp/SideNav'

export default function Home() {
  return (
    <div>
      <div className={style.nav}>
        <Navbar/>
       
      </div>
      <div className={style.content}>
      <div>
        <SideNav/>
      </div>
      <div className={style.card}>
        <CardList/>
        <DescriptionComp/>
      </div>
      </div>
      
    </div>
  )
}