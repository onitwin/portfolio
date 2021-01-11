import React,{useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import items from "../data";



const Circuit=()=>{

  const projectsMap=items.map((item,key)=>{
    return(
      <Carousel.Item key={item.id}>
      <div className="carousel-internal-block">
        <img
          className={item.className}
          src={item.image}
          alt={item.projectName}
        />
        <Carousel.Caption>


        </Carousel.Caption>
        </div>
      </Carousel.Item>
    )
  })

  const descriptionMap=items.map((item,key)=>{
    return(
      <div className="carousel-descriptor-container">
      <div className="carousel-descriptor" >
      <h2>{item.description}</h2>
      </div>
      </div>
    )
  })

  const [index, setIndex] = useState(0);

  const handleSelect=(selectedIndex,e)=>{
    setIndex(selectedIndex)
  }


  return (
    <div className="circuit-container">
    <div className="carousel-container">
    <Carousel activeIndex={index} onSelect={handleSelect}>
    {projectsMap}
    </Carousel>
    </div>
    {<div className="carousel-descriptor-container">
    <div className="carousel-descriptor" >
    <h2>{items[index].description}</h2>
    </div>
    </div>}
    </div>
  )
}

export default Circuit;


// <Carousel.Item>
// <div className="carousel-internal-block">
//   <img
//     className="carousel-image"
//     src="Images/scroller.jpeg"
//     alt="First slide"
//   />
//   <Carousel.Caption>
//     <h3>1</h3>
//     <p className="carousel-text">Scroller</p>
//   </Carousel.Caption>
//   </div>
// </Carousel.Item>
// <Carousel.Item>
//   <img
//     className="carousel-image large"
//     src="Images/SpaceX.jpeg"
//     alt="Second slide"
//   />
//
//   <Carousel.Caption>
//     <h3>2</h3>
//     <p className="carousel-text">SpaceX Launch Tracker</p>
//   </Carousel.Caption>
// </Carousel.Item>
// <Carousel.Item>
//   <img
//     className="carousel-image"
//     src="Images/me.jpeg"
//     alt="Third slide"
//   />
//
//   <Carousel.Caption>
//     <h3>3</h3>
//     <p className="carousel-text">
//       ISS Tracker
//     </p>
//   </Carousel.Caption>
// </Carousel.Item>
