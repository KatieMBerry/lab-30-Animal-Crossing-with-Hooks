import React, { useState, useEffect } from 'react';
import VillagerList from '../components/villagers/VillagerList';
import { findVillagers } from '../services/findVillagers';

const AllVillagers = () => {
    const [loading, setLoading] = useState(true);
    const [villagers, setVillagers] = useState([]);

    useEffect(() => {
        findVillagers().then((villagers) => {
            setVillagers(villagers);
            setLoading(false);
        });
    }, []);

    if (loading) return <h1>Loading</h1>;
    return <VillagerList
        villagers={villagers} />
}

export default AllVillagers;
