import React, { useState } from 'react';
import VillagerList from '../components/villagers/VillagerList';

const AllVillagers = () => {
    const [loading, setLoading] = useState(true);
    const [villagers, setVillagers] = useState([]);

    return (
        <>
            <h1>Loading</h1>
            <VillagerList
                villagers={villagers} />
        </>
    );

};

export default AllVillagers;
