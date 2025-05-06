const Blog = require("../models/blogmodels");

// new blog post
const createBlog = async (req, res) => {
    try {
        const { title, content, author } = req.body;
        const newPost = new Blog({ title, content, author });
        const savedPost = await newPost.save();
        res.status(201).json(savedPost);
    } catch (error) {
        res.status(500).json({ message: "Error creating blog post", error });
    }
};

// Get all blog posts
const getAllBlogs = async (req, res) => {
    try {
        const posts = await Blog.find().sort({ createdAt: -1 });
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ message: "Error fetching blog posts", error });
    }
};

// Get a single blog post by ID
const getBlogById = async (req, res) => {
    try {
        const post = await Blog.findById(req.params.id);
        if (!post) return res.status(404).json({ message: "Post not found" });
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ message: "Error fetching the post", error });
    }
};

// Update a blog post
const updateBlog = async (req, res) => {
    try {
        const updatedPost = await Blog.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!updatedPost) return res.status(404).json({ message: "Post not found" });
        res.status(200).json(updatedPost);
    } catch (error) {
        res.status(500).json({ message: "Error updating the post", error });
    }
};

// Delete a blog post
const deleteBlog = async (req, res) => {
    try {
        const deletedPost = await Blog.findByIdAndDelete(req.params.id);
        if (!deletedPost) return res.status(404).json({ message: "Post not found" });
        res.status(200).json({ message: "Post deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting the post", error });
    }
};

module.exports = {
    createBlog,
    getAllBlogs,
    getBlogById,
    updateBlog,
    deleteBlog,
};
