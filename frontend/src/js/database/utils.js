import path from "path-browserify";
import axios from "axios";

export const postData = async (path, data) => {
    try {
        await axios.post(path, data, {
            headers: {
                "Content-Type": "application/json",
            },
        });
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const deleteData = async (path) => {
    try {
        await axios.delete(path);
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const putData = async (path, data) => {
    try {
        await axios.put(path, data, {
            headers: {
                "Content-Type": "application/json",
            },
        });
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const patchData = async (path, data) => {
    try {
        const response = await axios.patch(path, data, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const getData = async (path) => {
    try {
        const response = await axios.get(path);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const getResourcePath = (pathInfo) => {
    const protocol = "http://";
    const dbPath = import.meta.env.VITE_LOCAL_DB_PATH;

    return protocol + dbPath + "/api/" + path.join(...pathInfo);
};
