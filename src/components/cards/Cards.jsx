import React from 'react'
import CardsPokemon from './CardsPokemon'
import './Cards.css'

export const Cards = ({pokemones,search}) => {
  const filtered = pokemones.filter((pokemon)=>{
    return pokemon.name.toLowerCase().includes(search.toLowerCase());
  })
  return (
    <div className='container'>
        <ul className='cards'>
            {
                filtered.map((x,y)=> {
                    return <li className='card-item' key={x.name}>
                        <CardsPokemon url={x.url}/>
                    </li>
                  })
            }
        </ul>
    </div>
  )
}

