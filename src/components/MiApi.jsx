import { useEffect } from "react";

function MiApi( {setData} ) {

    
    const consultarAPI = () => {
        fetch("https://mindicador.cl/api")
          .then((response) => response.json())
          .then((data) => {
        
            const dataArray = Object.values(data).slice(3);
            setData(dataArray)
        
            });
    }
  
    useEffect(() => {
        consultarAPI();
      }, []);
    
    return (
    <button onClick={consultarAPI}>🔄️</button>
  )
}

export default MiApi