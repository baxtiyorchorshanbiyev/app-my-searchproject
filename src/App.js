import React, {useState, useEffect} from "react";
import Header from "./components/ui/Header";
import Character from "./components/characters/Character";
import Search from "./components/ui/Search";
import axios from "axios";
import Outdown from "./components/ui/Outdown";

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");
  useEffect(() =>{
    const fetchItems = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)
      setItems(result.data);
      setIsLoading(false);
      
    };
    fetchItems()
  }, [query]);
  return (
    <div className="container">
      <Header /> 
      <Outdown />
      <Search getQuery = {(q) =>setQuery(q)} />
      <Character isLoading = {isLoading} items = {items} /> 
      
    </div>
  );
}

export default App;
