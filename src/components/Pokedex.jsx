import axios from 'axios';
import React from 'react';
import pokemonlogo from '../assets/img/pokemonlogo.png'
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PokedexCard from './PokedexCard';
import Paginacion from './Paginacion';

const Pokedex = () => {

    const userName = useSelector(state => state.name);
    const [pokemons, setPokemons] = useState([]);
    const [pokemonName, setPokemonName] = useState("");
    const [typePokemon, setTypePokemon] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage] = useState(8);

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/`)
            .then(res => setPokemons(res.data.results))

        axios.get(`https://pokeapi.co/api/v2/type/`)
            .then(res => setTypePokemon(res.data.results))

    }, [])

    console.log(pokemons)

    const searchPokemon = () => {
        navigate(`/pokedex/${pokemonName.toLowerCase()}`)
    }

    const closeSesion = () =>{
        navigate(`/`)
    }

    console.log(typePokemon.name);
    const filterType = (e) => {
        const url = e.target.value;
        axios.get(url)
            .then(res => setPokemons(res.data.pokemon))
    }

    // Get current pokemons

    const indexOfLastPokemons = currentPage * postPerPage;
    const indexOfFirstPokemons = indexOfLastPokemons - postPerPage;
    const currentPokemons = pokemons.slice(indexOfFirstPokemons, indexOfLastPokemons)

    // Change page

    const paginate = pageNumber => setCurrentPage(pageNumber);
    return (
        <div className='pokedex-style'>
            <nav className='logo-pokemon'></nav>
            <div className='logo-welcome'>
                <img className='pokedex-imagen' src={pokemonlogo} alt="logo" />
                <p><b>Bienvenido {userName},</b> Aquí podrás encontrar tu Pokemon favorito.</p>
            </div>
            <div className='search-pokemon'>
                <div className='search-input'>
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <input
                        type="text"
                        placeholder='Search Pokemon'
                        value={pokemonName}
                        onChange={e => setPokemonName(e.target.value)}
                    />
                </div>

                <button className='btn-search' onClick={searchPokemon}>Search</button>
                <select className='btn-search' onChange={filterType} name="Todos los pokemones" id="">
                    {typePokemon.map(type => (
                        <option
                            value={type.url}
                            key={type.name}
                        >
                            {type.name}
                        </option>
                    ))}
                </select>
                <button onClick={closeSesion} className='btn-search close'>Cerrar Sesión</button>
            </div>
            <Paginacion
                postsPerPage={postPerPage}
                totalPokemon={pokemons.length}
                paginate={paginate}
            />

            <div className='card-container'>
                {
                    currentPokemons.map(pokemon => (
                        <>
                            <PokedexCard
                                url={pokemon.url ? pokemon.url : pokemon.pokemon.url}
                                key={pokemon.url ? pokemon.url : pokemon.pokemon.url}

                            />
                        </>
                    ))
                }
            </div>
            <header className='header-pokemon'>
                <h1>Hecho con amor en Academlo ♥</h1>
                <nav className='logo-pokemon reverse'></nav>
            </header>
        </div>
    );
};

export default Pokedex;