import axios from "axios";

const url = "/api/files";

const getAll = async () => {
    const res = await axios.get(url);
    return res.data;
}

const add = async (newFile) => {
    const res = axios.post(url, newFile);
    return (await res).data;
};

const methods = {
    getAll,
    add
}

export default methods;