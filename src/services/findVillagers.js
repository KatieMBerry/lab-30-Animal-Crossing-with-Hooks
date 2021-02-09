export const findVillagers = () => {
    return fetch('https://ac-vill.herokuapp.com/villagers')
        .then(res => res.json());
}

export const findVillagerById = (id) => {
    return fetch(`https://ac-vill.herokuapp.com/villagers/${id}`)
        .then(res => res.json());
}
