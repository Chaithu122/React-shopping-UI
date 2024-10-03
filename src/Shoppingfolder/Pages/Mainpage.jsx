import React, {useState} from 'react'
import Header from '../Components/Header'
import Banner from '../Components/Banner'
import Collections from '../Components/Collections'
import Footer from '../Components/Footer'
import {Gents,Ladies} from '../data'
import Womancollection from '../Components/Womancollection'

const Mainpage=()=>{

    const[gentsFashion, setGentsFashion]=useState(Gents)
    const[ladiesFashion, setladiesFashion]=useState(Ladies)
    
    
    
    
    console.log(Gents)

 return(
        <div>
            <Header/>
            <Banner/>
            <Collections gentsFashion={gentsFashion}/>
            <Womancollection ladiesFashion={ladiesFashion}/>
            <Footer/>
          
        </div>
    )
}
export default Mainpage