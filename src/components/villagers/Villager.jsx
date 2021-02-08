import React from 'react';
import PropTypes from 'prop-types';

const Villager = ({ name, image, quote, skill }) => (

    <figure>
        <img src={image} alt={name} />
        <figcaption>{name}
            <p>Quote:{quote}</p>
            <p>Skill:{skill}</p>
        </figcaption>
    </figure>

)

Villager.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    quote: PropTypes.string.isRequired,
    skill: PropTypes.string.isRequired
}

export default Villager;
