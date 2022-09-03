import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ArticleDetailContext, ArticleDetailProvider } from "../../context/ArticleDetailContext";
import { createBlog, updateBlog } from "../../data/service";

const CreateBlogLayout = () => {
    const { slug } = useParams();
    return (
        <ArticleDetailProvider slug={slug}>
            <CreateBlog slug={slug} />
        </ArticleDetailProvider>
    )
}

const CreateBlog = ({ slug }) => {
    const { articleDetails } = useContext(ArticleDetailContext);

    const [userBlog, setUserBlog] = useState(articleDetails || {
        title: "",
        description: "",
        slug: "",
        category: "",
        author: ""
    })

    //loads data into the form if it is in edit mode
    useEffect(() => {
        if (!articleDetails) return;
        setUserBlog(articleDetails);
    }, [articleDetails])

    const handleChange = (e) => {
        setUserBlog({ ...userBlog, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!slug) {
            createBlog(userBlog);
        } else {
            updateBlog(userBlog, slug);
        }
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
            <Button variant="outlined" onClick={handleSubmit} style={{ maxWidth: '200px' }}>{!slug ? 'Create' : 'Update'}</Button>
        </Box>
    )
}

export default CreateBlogLayout;