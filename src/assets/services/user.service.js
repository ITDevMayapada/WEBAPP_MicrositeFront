import axios from "axios"

export const getUsers = (callback) => {
    axios
    .get('https://fakestoreapi.com/products')
    .then((res) => {
        callback(true, res);
    })
    .catch((err) => {
        callback(false, err);
    })
}