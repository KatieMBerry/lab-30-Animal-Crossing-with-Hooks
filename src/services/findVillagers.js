export const findVillagers = () => {
    return fetch('https://ac-vill.herokuapp.com/villagers')
        .then(res => res.json());
}
