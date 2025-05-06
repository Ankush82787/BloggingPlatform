import axios from "axios";
const API_URL = "http://localhost:5000/api/posts";


export const getAllPosts = async () => {
    const res = await fetch(API_URL);
    return res.json();
};

export const getPostById = async (id) => {
    const res = await axios.get(`http://localhost:5000/api/posts/${id}`);
    return res.data;
};

export const createPost = async (data) => {
    const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });
    return res.json();
};

export const updatePost = async (id, data) => {
    const res = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });
    return res.json();
};

export const deletePost = async (id) => {
    const res = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
    });
    return res.json();
};
