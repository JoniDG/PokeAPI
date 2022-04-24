import { useState } from "react";
import useGetData from "../hooks/useGetData";
import {Cards} from "./cards/Cards";

function App() {
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [data, loading, error] = useGetData(url);
  const [search, setSearch] = useState("");
  
  return (
    <>
      <h1 style={{textAlign: "center"}}>Pokemon</h1>
      <div style={{textAlign: "center"}}>
        <input 
        type="text" 
        className="buscador"
        placeholder="Ingrese Pokemon a Buscar"
        onChange={(e)=>setSearch(e.target.value)}>
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
              setUrl("https://pokeapi.co/api/v2/pokemon/");
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


