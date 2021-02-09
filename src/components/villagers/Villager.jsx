import React from 'react';
import PropTypes from 'prop-types';
import styles from './Villager.css';

const Villager = ({ name, image, quote, skill }) => (

    <figure className={styles.Villager}>
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
