import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { createBlog } from "../../data/service";

const CreateBlogLayout = () => {
    const [userBlog, setUserBlog] = useState({
        title: "",
        description: "",
        slug: "",
        category: "",
        author: ""
    })

    const handleChange = (e) => {
        setUserBlog({ ...userBlog, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        createBlog(userBlog);
    }

    return (
        <Box
            component="form"
            noValidate
            autoComplete="off"
            display="flex"
            flexDirection={"column"}
            justifyContent={"center"}
            gap={5}
            p={10}
        >
            <TextField
                required
                id="outlined-required"
                label="Title"
                name="title"
                value={userBlog.title}
                onChange={handleChange}
            />
            <TextField
                required
                multiline
                rows={4}
                id="outlined-required"
                label="Description"
                name="description"
                value={userBlog.description}
                onChange={handleChange}
            />
            <TextField
                required
                id="outlined-required"
                label="Slug"
                name="slug"
                value={userBlog.slug}
                onChange={handleChange}
            />
            <TextField
                id="outlined-required"
                label="Category"
                name="category"
                value={userBlog.category}
                onChange={handleChange}
            />
            <TextField
                id="outlined-required"
                label="Author"
                name="author"
                value={userBlog.author}
                onChange={handleChange}
            />
            <Button variant="outlined" onClick={handleSubmit} style={{ maxWidth: '200px' }}>Create a Blog</Button>
        </Box>
    )
}

export default CreateBlogLayout;