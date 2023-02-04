import axios from 'axios';
import React, { useEffect, useState } from 'react';
import pokeball5 from '../assets/img/pokeball5.png'
import { useNavigate, useParams } from 'react-router-dom';


const PokedexId = () => {

    const [pokemon, setPokemon] = useState({});
    const [movement, setMovement] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();

    const backPokedex = () =>{
        navigate('/pokedex')
    }

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
            .then(res => setPokemon(res.data))

        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
            .then(res => setMovement(res.data.moves))
    }, [])

    const newMove = [];
    for( let i=0; i<movement.length; i++){
        if(i % 4 == 0){
            newMove.push(movement[i]);
        }
    }
    console.log(movement)
    //const hpWidth = () =>{
    //  width: `pokemon.stats?.[0].base_stat`;
    //}

    console.log(pokemon)

    return (
        <div className='pokedex-style'>
            <nav className='logo-pokemon'></nav>
            <button onClick={backPokedex} className='btn-search back'>Back</button>
            <div className='pokemon-characteristics'>
                <div className={`characterisctics ${pokemon.types?.[0].type.name}`}>
                    <img className='characterisctics-img' src={pokemon.sprites?.other.home.front_default} alt="img" />
                    <nav className={`nav-container ${pokemon.types?.[0].type.name}`}>
                    </nav>
                    <div className='number'>
                        <h1 className='order color-black'># {pokemon.order}</h1>
                        <h1 className='pokemon-name color-black'>{pokemon.name}</h1>
                    </div>
                    <div className='weight'>
                        <p className='color-black'><b>Peso </b><br /> {pokemon.height}</p>
                        <p className='color-black'><b>Altura </b><br />{pokemon.weight}</p>
                    </div>
                    <div className='type-ability'>
                        <div >
                            <h3 className='type'>Tipo</h3>
                        </div>
                        <div>
                            <h3 className='ability'>Habilidades</h3>
                        </div>
                    </div>
                    <div className='description'>
                        <p className={`description-text `}>
                            <b>{pokemon.types?.[0].type.name}</b>
                        </p>
                        <p className='description-text'><b>{pokemon.abilities?.[0].ability.name}</b></p>
                        <p className='description-text'><b>{pokemon.abilities?.[1].ability.name}</b></p>
                    </div>
                    <div className='stats'>
                        <h1 className='stats-h1'>Stats</h1>
                        <div className='stats-div'></div>
                        <img className='stats-img' src={pokeball5} alt="pokeball" />
                    </div>
                    <div className='statistics'>
                        <div>
                            <div className='statistics-text'>
                                <p ><b> HP</b></p>
                                <p><b>{pokemon.stats?.[0].base_stat}/100</b> </p>
                            </div>
                            <div className='percentage' >
                                <div className={`percentage-div`} style={{ width: `${pokemon.stats?.[0].base_stat}%` }}></div>
                            </div>
                        </div>
                        <div>
                            <div className='statistics-text'>
                                <p ><b>Ataque</b> </p>
                                <p><b>{pokemon.stats?.[1].base_stat}/100</b> </p>
                            </div>
                            <div className='percentage'>
                                <div className={`percentage-div`} style={{ width: `${pokemon.stats?.[1].base_stat}%` }}></div>
                            </div>
                        </div>
                        <div>
                            <div className='statistics-text'>
                                <p ><b>Defensa</b> </p>
                                <p><b>{pokemon.stats?.[2].base_stat}/100</b> </p>
                            </div>
                            <div className='percentage'>
                                <div className={`percentage-div`} style={{ width: `${pokemon.stats?.[2].base_stat}%` }}></div>
                            </div>
                        </div>
                        <div>
                            <div className='statistics-text'>
                                <p ><b>Velocidad</b> </p>
                                <p><b>{pokemon.stats?.[5].base_stat}/100</b> </p>
                            </div>
                            <div className='percentage'>
                                <div className={`percentage-div`} style={{ width: `${pokemon.stats?.[5].base_stat}%` }}></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`movementns ${pokemon.types?.[0].type.name}`}>
                    <div className='stats'>
                        <h1 className='movements-h1'>Movements</h1>
                        <div className='movements-div'></div>
                        <img className='stats-img' src={pokeball5} alt="pokeball" />
                    </div>

                    <div className='move'>
                        {
                            newMove.map(movements => (
                                <p className='map-p' key={movements.move.url}><b>{movements.move.name}</b></p>
                            ))
                        }
                    </div>
                </div>
            </div>
            <nav className='logo-pokemon reverse'></nav>
        </div>
    );
};

export default PokedexId;