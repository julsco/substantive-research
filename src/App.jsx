import { React, useState, useEffect, createContext } from 'react';
import Home from "./components/Home"
import Navigator from './components/Navigator';
import { API_URL } from './helpers/API';

export const WindowWidthContext = createContext();
export const InteractionsContext = createContext();

function App() {
  
  ///////////////////----------------Create context window width for responsiveness--------- ////////////////////////


  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
            
  useEffect(() => {
      const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
      };
  
      window.addEventListener('resize', handleWindowResize);
  
      return () => {
      window.removeEventListener('resize', handleWindowResize);
      };
  },[]);


  ///////////////////----------------API call--------- ////////////////////////
  
  const [dataClient, setDataClient] = useState();

  useEffect(() => {
    fetch(API_URL)
       .then((response) => response.json())
       .then((data) => {
          setDataClient(data);
       })
       .catch((err) => {
          console.log(err.message);
       });
    }, []);

  ///////////////////----------------Get interactions--------- ////////////////////////

  const sectors = [...new Set(dataClient?.map(data=> data.name))]; // array containing all the sectors

  const interactions = sectors.map(sector => {
    const numberOfInteractions = dataClient?.filter(data => data.name === sector).length;  //Get the interactions for each sector
    const sectorID = dataClient?.find(data => data.name === sector).sector_id; //Get the sector ID
    const sectorInteractions = {"sector": `${sector}`, "sector_id" : sectorID, "number_interactions": `${numberOfInteractions}`}; // create an object of type { sector: sectorName, sector_id: id, number_interactions: numberInteractions}
    return sectorInteractions
  });

  //Calculate and add percentage  
  interactions.map(interaction => {
    const percentage = (interaction.number_interactions/dataClient?.length*100).toFixed(2);
    interaction.percentage = percentage;
  });

  //Sort by descending
  interactions.sort((a, b) => b.percentage - a.percentage);



  return (
    <WindowWidthContext.Provider value={windowWidth}>
      <InteractionsContext.Provider value={interactions}>
          <Navigator />
          <Home />
        </InteractionsContext.Provider>
    </WindowWidthContext.Provider>
  )
}

export default App
