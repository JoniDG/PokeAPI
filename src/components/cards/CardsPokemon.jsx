import React from 'react'
import useGetData from '../../hooks/useGetData'

const CardsPokemon = ({url}) => {
    const [data, loading, error] = useGetData(url);
    
    return (
        <div>
            {
                loading ? (
                    <h2>Cargando...</h2>
                ) : error ?(
                    <h3>Error: {error.message}</h3>
                ) : 
                <div className='card' style={{width:'14rem'}}>
                    <div className='card-header'>
                        <h5 className='card-title'>{data.id}</h5>
                    </div>
                    <div className='card-body'>
                        <img src={data.sprites.other.dream_world.front_default} alt='pokemon' width="220" height="100"/>
                    </div>
                    <div className='card-footer'>
                        <p className='card-text'>{data.forms[0].name} </p>
                    </div>
                </div>
                
            }
        </div>
    ) 
}

export default CardsPokemon;