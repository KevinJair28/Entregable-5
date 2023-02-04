import axios from 'axios';
import React from 'react';
import waterIce from '../assets/img/waterIce.mp4'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const PokedexCard = ({ url }) => {

    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        axios.get(url)
            .then(res => setPokemons(res.data))
    }, [])

    console.log(pokemons)
    return (
        <Link className='card-pokemon' to={`/pokedex/${pokemons.id}`}>
            <div className={`card-pokemon ${pokemons.types?.[0].type.name}`}>
                <div className='nav-card'>
                    <img className='img-card' src={pokemons.sprites?.other.home.front_default} alt="img" />
                </div>
                <div className='name-pokemon'>
                    <h1>{pokemons.name}</h1>
                    <p className='color-black'>{pokemons.types?.[0].type.name}</p>
                    <p className='type-text'>type</p>
                    <div className='hp-attack'>
                        <p><b>HP </b><br /><p className='color-black'>{pokemons.stats?.[0].base_stat}</p></p>
                        <p><b>ATTACK </b><br /><p className='color-black'>{pokemons.stats?.[1].base_stat}</p></p>
                    </div>
                    <div className='defense-speed'>
                        <p><b >DEFENSE </b><br /><p className='color-black'>{pokemons.stats?.[2].base_stat}</p></p>
                        <p><b>SPEED </b><br /><p className='color-black'>{pokemons.stats?.[5].base_stat}</p></p>
                    </div>
                </div>

            </div>

        </Link>
    );
};

export default PokedexCard;