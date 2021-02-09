import React from 'react';
import PropTypes from 'prop-types';
import Villager from './Villager';

const VillagerList = ({ villagers }) => {
    const villagerElements = villagers.map(villager => (
        <li key={villager.name}>
            <Villager
                image={villager.image}
                name={villager.name}
                quote={villager.quote}
                skill={villager.skill} />
        </li>
    ));

    return <ul data-testid="villagers">
        {villagerElements}
    </ul>
}

VillagerList.propTypes = {
    villagers: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            quote: PropTypes.string.isRequired,
            skill: PropTypes.string.isRequired
        }).isRequired
    ).isRequired
}

export default VillagerList;
