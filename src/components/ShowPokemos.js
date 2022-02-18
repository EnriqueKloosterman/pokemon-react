import React from 'react';

const ShowPokemos = ({ pokemon }) => {
    return (
        <>
            {
                pokemon.map((poke, index) =>  
                // console.log('mierda')
                <p key={index}> name: {poke.name} </p>
            
                )
            }
        </>
    )
}

export default ShowPokemos