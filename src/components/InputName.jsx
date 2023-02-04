import React from 'react';
import pokemongo from '../assets/img/pokemongo.png'
import openingpokemon from '../assets/img/openingpokemon.mp4'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changName } from '../store/slices/name.slice';

const InputName = () => {

    const [userName, setUserName] = useState("");
    const [ volume, setVolume] = useState(true)

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const enterName = () => {
        dispatch(changName(userName))
        navigate("/pokedex")
    }
    const soundVolume = () =>{
        //alert("Quitar sonido")
        setVolume(!volume)
    }

    return (
        <div className='fondo-input'>
            <video className='input-video' src={openingpokemon} autoPlay loop></video>
            <div className='input-name'>
                <nav className='volume'>
                    {volume ? <i onClick={soundVolume} class="fa-solid fa-volume-low"></i> : <i onClick={soundVolume} class="fa-solid fa-volume-xmark"></i>}
                </nav>
                <img className='logo-imagen' src={pokemongo} alt="Logo" />
                <h2 className='input-h2'>iniciar sesión:</h2>
                <input className='input-sesión'
                    placeholder='user...'
                    type="text"
                    value={userName}
                    onChange={e => setUserName(e.target.value)}
                />
                <button className='button-name' onClick={enterName}>Enter</button>
                <p>Hecho por <b>KEVIN</b> de Academlo ♥</p>
            </div>
        </div>

    );
};

export default InputName;