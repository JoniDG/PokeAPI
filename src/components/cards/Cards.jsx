import React from 'react'
import CardsPokemon from './CardsPokemon'
import './Cards.css'
import { useFilter } from '../../hooks/useFilter'

export const Cards = ({pokemones,search}) => {
  
  const filtered = useFilter(pokemones, search);
  /* const filtered = pokemones.filter((pokemon)=>{
    return pokemon.name.toLowerCase().includes(search.toLowerCase());
  }) */
  return (
    <div className='container'>
        <ul className='cards'>
            {
            filtered.map((m)=>{
              return <li
              className='card-item' key={m.name}>
                <CardsPokemon url={m.url}/>
              </li>
            })
            /* {
                pokemones.map((x)=> {
                    return <li className='card-item' key={x.name}>
                        <CardsPokemon url={x.url}/>
                    </li>
                  })
            } */}
        </ul>
    </div>
  )
}
