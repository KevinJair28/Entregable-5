import React, { useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';

const Paginacion = ({ postsPerPage,  totalPokemon, paginate}) => {

    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalPokemon/postsPerPage); i++){
        pageNumbers.push(i);
    }
    
    return (
        <nav >
            
            <ul className='pagination'>
                <p className='page-item'>Pag.</p>
                {pageNumbers.map(number => (
                    <li key={number} className='page-item'>
                        <a onClick={() =>paginate(number)} href="!#" className='page-link'>
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Paginacion;