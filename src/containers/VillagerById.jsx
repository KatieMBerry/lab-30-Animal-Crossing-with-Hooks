import React, { Component, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Villager from '../components/villagers/Villager';
import { findVillagerById } from '../services/findVillagers';

// const VillagerById = () => {
//     const [loading, setLoading] = useState(true);
//     const [villager, setVillager] = useState('');

//     useEffect(() => {
//         const { match } = this.props;
//         findVillagerById(match.params.id)
//             .then(setVillager(villager));
//         (setLoading(false));
//     });

//     if (loading) return <h1>Loading</h1>;
//     return <VillagerList villagers={villagers} />
// }

// VillagerById.propTypes = {
//     match: PropTypes.shape({
//         id: PropTypes.string.isRequired
//     }).isRequired
// };

export default class VillagerById extends Component {
    static propTypes = {
        match: PropTypes.shape({
            params: PropTypes.shape({
                id: PropTypes.string.isRequired
            }).isRequired,
        }).isRequired
    };

    state = {
        loading: true,
        villager: ''
    };

    async componentDidMount() {
        const { match } = this.props;
        const villager = await findVillagerById(match.params.id);
        this.setState({ loading: false, villager });
    }

    render() {
        const { loading, villager } = this.state;
        if (loading) return <h1>Loading</h1>;
        return <Villager villager={villager} />;
    }
}

// export default VillagerById;


