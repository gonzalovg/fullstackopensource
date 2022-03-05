import axios from "axios";
const url = "http://localhost:3001/api/persons";

const getAll = () => {
    const request = axios.get(url);
    return request.then((res) => res.data);
};

const add = (newPerson) => {
    const request = axios.post(url, newPerson);
    return request.then((res) => res.data);
};

const update = (id, newPerson) => {
    const request = axios.put(`${url}/${id}`, newPerson);
    return request.then((res) => res.data);
};

const deletePerson = (id) => {
    const request = axios.delete(`${url}/${id}`);
    return request.then((res) => res.data);
};

export default { getAll, add, update, deletePerson };
