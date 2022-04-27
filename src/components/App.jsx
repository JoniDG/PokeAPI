import { useState } from "react";
import useGetData from "../hooks/useGetData";
import {Cards} from "./cards/Cards";


const defurl = "https://pokeapi.co/api/v2/pokemon";

function App() {
  const [url, setUrl] = useState(defurl);
  const [data, loading, error] = useGetData(url);
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
    
  return (
    <>
      <h1 style={{textAlign: "center"}}>Pokemon</h1>
      <div style={{textAlign: "center"}}>
        <input 
        type="text" 
        className="buscador"
        placeholder="Ingrese Pokemon a Buscar"
        onChange={handleChange}>
        </input>
      </div>
      {
        loading ? (
          <h2>Cargando...</h2>
        ) : error ?(
          <h3>Error: {error.message}</h3>
        ) : <Cards pokemones={data.results} search={search}/>
      }
      <div style={{textAlign: "center"}}>
        <button
          onClick={() => {
            if(data.previous == null){
              setUrl(defurl);
            }else{
              setUrl(data.previous)
            }
          }}
        >Previous  
        </button>
        <button
          onClick={() => {
            setUrl(data.next)
          }}
        >Next 
        </button>
      </div>
    </>
  );
};
export default App;


