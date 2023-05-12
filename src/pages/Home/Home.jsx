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
      
      <div className={style.home}>
    
      <img src ="https://media.istockphoto.com/id/1320306462/video/4k-abstract-luxury-black-grey-gradient-backgrounds-with-diagonal-golden-metallic-stripes.jpg?s=640x640&k=20&c=zwBGZfYlbYVMNcnJirViOlEOFHLkPJeg9z-HvfLr77Y=" alt = ""/>
        <div className={style.card}>
          <CardList/>
          <DescriptionComp/>
        </div>
        
      </div>
      </div>
      
    </div>
  )
}