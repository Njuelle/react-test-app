import { useState, useEffect } from 'react';
import PropertyCard from './components/PropertyCard';

const BACKEND_URL = "http://localhost:3001";

function App() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch(`${BACKEND_URL}/list`);
        const json = await response.json();

        setProperties(json.data);  
      } catch (error) {
        // @TODO: Users should know that an error has occurred
        // with an error toast or visual warning in frontend
        console.error(error)  
      }
    };

    fetchProperties();
  }, []);

  return (
    <div className="App">
      {
        properties.map(item => <PropertyCard key={item._id} property={item}/>)
      }
    </div>
  );
}

export default App;
