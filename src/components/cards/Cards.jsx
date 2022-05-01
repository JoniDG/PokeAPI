import React, { useContext } from 'react'
import CardsPokemon from './CardsPokemon'
import './Cards.css'
import { useFilter } from '../../hooks/useFilter'
import { PokeApiContext } from '../../contexts/PokeApi.Context'

export const Cards = ({search}) => {
  const pokemones = useContext(PokeApiContext);
  const filtered = useFilter(pokemones, search);
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
