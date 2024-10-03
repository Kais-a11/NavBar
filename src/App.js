import './App.css';
import Navbar from './components/Navbar';
import { plantList } from './plantList';
import { useState } from 'react';


function App() {
  const [searchTerm, setSearchTerm] = useState(''); // State to store search term
  const filteredPlants = plantList.filter((flower) =>
    flower.name.toLowerCase().includes(searchTerm.toLowerCase())
  ); // Filter plants based on search term (case-insensitive)

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="App">
      <Navbar />
      <div>
        <form>
          <div className="form-group">
            <label htmlFor="plant">Search Plants</label>
            <input
              type="text"
              placeholder="Search plants..."
              name="plant"
              id="plant"
              value={searchTerm}
              onChange={handleChange}
              
            />
          </div>
        </form>
        <div className='plant'>
          {filteredPlants.map((flower) => (
            <div key={flower.id}>
              <img src={flower.cover} alt={flower.name} />
              <h2>{flower.name}</h2>
              <p>Category: {flower.category}</p>
              <p>Price: ${flower.price.toFixed(2)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
