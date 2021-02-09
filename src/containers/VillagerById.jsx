import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import VillagerDetail from '../components/details/VillagerDetail';
import { findVillagerById } from '../services/findVillagers';

const VillagerById = () => {
    const [loading, setLoading] = useState(true);
    const [villager, setVillager] = useState([]);

    const { _id } = useParams();

    useEffect(() => {
        findVillagerById(_id)
            .then(villager => {
                setVillager(villager);
                setLoading(false);
            });
    }, []);

    if (loading) return <h1>Loading</h1>;
    return <VillagerDetail
        name={villager.name}
        image={villager.image}
        quote={villager.quote}
        skill={villager.skill}
    />
}

// VillagerById.propTypes = {
//     match: PropTypes.shape({
//         params: PropTypes.shape({
//             _id: PropTypes.string.isRequired
//         }).isRequired
//     }).isRequired
// };

export default VillagerById;


