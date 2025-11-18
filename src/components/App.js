import React, { useEffect, useState } from "react";
import Loading from './Loading'
import Tours from './Tours'

const App = () => {
  let[loading,setLoading]=useState(true)
  let[tours,setTours]=useState([])


  function fetchTours() {
    setLoading(true)
    let URL='https://www.course-api.com/'
    fetch(`${URL}react-tours-project`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setTours(data)
        setLoading(false)
      })
      .catch(error => {
        console.error(error.message);
        setLoading(false)
      });
  }

  useEffect(() => {
    fetchTours();
  }, []);

  const removeTour=(id)=>{
    const newTour=tours.filter((tour)=> tour.id !== id)
    setTours(newTour)
  }



  if(loading){
    return(
      <main style={{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"}}>
          <Loading/>
      </main>
    )
  }
    if(tours.length===0){
    return(
       <main>
        <h2>No Tours Left</h2>
        <button onClick={fetchTours}>Refresh</button>
      </main>
    )
  }

  return (
    <main id="main">
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
};

export default App;
