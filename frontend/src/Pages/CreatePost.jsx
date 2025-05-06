import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createPost } from "../api/blogApi";

function CreatePost() {
    const [form, setForm] = useState({ title: "", content: "", author: "" });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createPost(form);
        navigate("/");
    };

    return (
        <div className="w-full min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="w-full max-w-2xl bg-white shadow-md rounded-lg p-8">
                <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
                    Create New Blog Post
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Title
                        </label>
                        <input
                            name="title"
                            className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                            placeholder="Enter post title"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Content
                        </label>
                        <textarea
                            name="content"
                            className="w-full border border-gray-300 p-3 rounded h-40 resize-none focus:outline-none focus:ring-2 focus:ring-green-500"
                            placeholder="Write your content..."
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Author
                        </label>
                        <input
                            name="author"
                            className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                            placeholder="Author name"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-gray-200 text-black px-4 py-2 rounded"
                    >
                        Publish Post
                    </button>

                </form>
            </div>
        </div>
    );
}

export default CreatePost;
