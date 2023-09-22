import { useState } from "react";
import React from "react";


function useScreenSmall(){

  const [isSmall, setIsSmall] = useState(window.innerWidth<1200)

  React.useEffect(() => {
    function handleResize() {
      setIsSmall(window.innerWidth<1200)
  
  }
    window.addEventListener('resize', handleResize)
  })

  return(
    isSmall
  )
}



export default useScreenSmall;