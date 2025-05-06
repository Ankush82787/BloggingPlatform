import React, { useEffect, useState } from "react";
import { getAllPosts, deletePost } from "../api/blogApi";
import { Link } from "react-router-dom";

function Home() {
    const [posts, setPosts] = useState([]);

    const fetchData = async () => {
        const data = await getAllPosts();
        setPosts(data);
    };

    const handleDelete = async (id) => {
        await deletePost(id);
        fetchData();
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <Link
                to="/create"
                className="inline-block bg-gray-300 text-black px-4 py-2 rounded mb-4 hover:bg-gray-400"
            >
                New Post
            </Link>



            {posts.map((post) => (
                <div key={post._id} className="bg-white border p-4 rounded mb-4 shadow">
                    <h2 className="text-xl font-semibold">{post.title}</h2>
                    <p className="text-gray-700">{post.content.substring(0, 100)}...</p>
                    <p className="text-sm text-gray-500 mt-1">Author: {post.author}</p>

                    <div className="mt-2 space-x-4">
                        <Link to={`/post/${post._id}`} className="text-blue-600">
                            View
                        </Link>
                        <Link to={`/edit/${post._id}`} className="text-yellow-600">
                            Edit
                        </Link>
                        <button
                            onClick={() => handleDelete(post._id)}
                            className="text-red-600"
                        >
                            Delete
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Home;
