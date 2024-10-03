import React from 'react'

const Womancollection=(props)=>{
    const{title, image1, image2, image3, image5,image6}=props.ladiesFashion
    return(
        <div className='collectionSection'>
            <h2>{title}</h2>
            <div className='bannerSection'>
            <div className="bannerBox"></div>
            <img src="https://github.com/nagakalyanpro/react-shoppin-ui/blob/main/public/assets/LadiesBanner.gif?raw=true" alt="banner"/>
        </div>
            
            <div className="menImages">
            <img src="https://github.com/nagakalyanpro/react-shoppin-ui/blob/main/public/assets/Woman/1.jpg?raw=true" alt={title} />
          <img src="https://github.com/nagakalyanpro/react-shoppin-ui/blob/main/public/assets/Woman/2.jpg?raw=true" alt={title} />
          <img src="https://github.com/nagakalyanpro/react-shoppin-ui/blob/main/public/assets/Woman/3.jpg?raw=true" alt={title} />
          <img src="https://github.com/nagakalyanpro/react-shoppin-ui/blob/main/public/assets/Woman/4.jpg?raw=true" alt={title} />
          <img src="https://github.com/nagakalyanpro/react-shoppin-ui/blob/main/public/assets/Woman/5.jpg?raw=true" alt={title} />
          <img src="https://github.com/nagakalyanpro/react-shoppin-ui/blob/main/public/assets/Woman/6.jpg?raw=true" alt={title} />
 
            </div>
        </div>
    )
}
export default Womancollection