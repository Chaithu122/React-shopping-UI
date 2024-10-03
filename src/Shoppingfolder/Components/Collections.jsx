import React from "react";

const Collections=(props)=>{
    const{title, image1, image2, image3, image5,image6}=props.gentsFashion
    return(
        <div className='collectionSection'>
            <h2>{title}</h2>
        <div className="menImages">
          <img src="https://github.com/nagakalyanpro/react-shoppin-ui/blob/main/public/assets/Men/1.jpg?raw=true" alt={title} />
          <img src="https://github.com/nagakalyanpro/react-shoppin-ui/blob/main/public/assets/Men/2.jpg?raw=true" alt={title} />
          <img src="https://github.com/nagakalyanpro/react-shoppin-ui/blob/main/public/assets/Men/3.jpg?raw=true" alt={title} />
          <img src="https://github.com/nagakalyanpro/react-shoppin-ui/blob/main/public/assets/Men/4.jpg?raw=true" alt={title} />
          <img src="https://github.com/nagakalyanpro/react-shoppin-ui/blob/main/public/assets/Men/5.jpg?raw=true" alt={title} />
          <img src="https://github.com/nagakalyanpro/react-shoppin-ui/blob/main/public/assets/Men/6.jpg?raw=true" alt={title} />

        </div>
        </div>
    )
}
export default Collections