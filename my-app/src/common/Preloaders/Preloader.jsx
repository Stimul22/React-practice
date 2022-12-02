import React from "react"
import preloaderGif from 'D:/ReactLearning/my-app/src/common/preloaderGifs/Rocket.gif'

const Preloader = (props) => {
return <div style={{backgroundColor: 'white'}}>
    <img src={preloaderGif} alt='preloader'/>
</div>
}


export default Preloader