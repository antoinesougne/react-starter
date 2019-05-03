import React from 'react';

// MODULES
import {uid} from 'react-uid';
import PropTypes from 'prop-types';

// RESSOURCES
import scum from '../img/scum.svg';
import empire from '../img/empire.svg';
import rebel from '../img/rebel.svg';

const TableLine = (props) => {
    const perso = props.perso;
    const imgsize= props.imgsize;
    return (
    <tr>
        <td>{perso.name}</td>
        <td>{perso.role}</td>
        <td>{perso.side}</td>
        <td>
        { perso.side === 'Empire' ? <img src={empire} height={imgsize}  alt={perso.side}/> 
        : perso.side === 'Rebel' ? <img src={rebel} height={imgsize} alt={perso.side} /> 
        : perso.side === 'Scum' ? <img src={scum} height={imgsize}  alt={perso.side}/> 
        : "" }
        </td>
    </tr>
    )
};

TableLine.propTypes = {
    perso: PropTypes.object.isRequired
};

TableLine.defaultProps = {
    imgsize: 33
};

// nouvelle façon d'écrire des fonctions. serait égal à function SimpleComponent
const SimpleComponent = () => {
    let nom = "Luke Skywalker";
    let nom2 = "Han Solo";
    const episode = 6;
    const data = [
        {name:'Darth Vador', role:'Sith', side:'Empire'},
        {name:'Luke Skywalker', role:'Pilot', side:'Rebel'},
        {name:'Boba Fett', role:'Bounty hunter', side:'Scum'},
        {name:'Han Solo', role:'Smuggler', side:'Rebel'},
        {name:'Sheev Palpatine', role:'Emperor', side:'Empire'},
        {name:'Leia Organa', role:'Princess', side:'Rebel'},
        {name:'Bib Fortuna', role:'Groom', side:'Scum'},
    ];
    let templateString = `Hello ${ nom }`;
    console.log({templateString});

    return (
        <div>
        <p>Je suis {nom}, {episode >= 6 ? "chevalier Jedi," : "pilote rebelle,"} ami du cpt {nom2}</p>
        <table border="1">
            <tr><th>Nom</th><th>Role</th><th>Faction</th><th>Emblem</th></tr>
            {/* Fonction Fléchée : */}
            {data.map((perso)=>(  
            <TableLine key={uid(perso)} perso={perso} imgsize={50}/>
            ))}
        </table>
        </div>
    );
}

export default SimpleComponent;
