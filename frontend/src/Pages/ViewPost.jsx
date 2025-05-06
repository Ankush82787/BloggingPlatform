import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getPostById } from "../api/blogApi";

function ViewPost() {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        getPostById(id).then(setPost);
    }, [id]);

    if (!post) return <p>Loading...</p>;

    const formattedDate = new Date(post.timestamp).toLocaleString();

    return (
        <div className="p-4 bg-white rounded shadow">
            <h2 className="text-2xl font-bold">{post.title}</h2>
            <p className="text-gray-600 mb-2">Author: {post.author}</p>
            <p className="text-gray-500 text-sm mb-4">Posted on: {formattedDate}</p>
            <p>{post.content}</p>

            <Link
                to={`/edit/${post._id}`}
                className="inline-block mt-4 bg-white-500 text-blue px-4 py-2 rounded"
            >
                Edit Post
            </Link>
        </div>
    );
}

export default ViewPost;
