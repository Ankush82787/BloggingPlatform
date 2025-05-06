import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getPostById, updatePost } from "../api/blogApi";

function EditPost() {
    const [form, setForm] = useState({ title: "", content: "", author: "" });
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getPostById(id).then(setForm);
    }, [id]);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await updatePost(id, form);
        navigate("/");
    };

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Edit Post</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    name="title"
                    value={form.title}
                    onChange={handleChange}
                    className="w-full border p-2"
                />
                <textarea
                    name="content"
                    value={form.content}
                    onChange={handleChange}
                    rows={6}
                    className="w-full border p-2"
                />
                <input
                    name="author"
                    value={form.author}
                    onChange={handleChange}
                    className="w-full border p-2"
                />
                <button className="bg-yellow-500 text-black px-4 py-2 rounded">
                    Update
                </button>
            </form>
        </div>
    );
}

export default EditPost;
