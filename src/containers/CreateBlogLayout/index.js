import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArticleContext } from "../../context/ArticleContext";
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
    const { articles, setArticles } = useContext(ArticleContext);

    const initialState = {
        title: "",
        description: "",
        slug: "",
        category: "",
        author: ""
    }

    const [userBlog, setUserBlog] = useState(articleDetails || initialState)

    const navigate = useNavigate();

    //loads data into the form if it is in edit mode
    useEffect(() => {
        if (!articleDetails) return;
        setUserBlog(articleDetails);
    }, [articleDetails])

    const handleChange = (e) => {
        setUserBlog({ ...userBlog, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!slug) {
            const { status } = await createBlog(userBlog);
            if (status === 200) {
                setArticles([...articles, userBlog]);
                setUserBlog(initialState);
                navigate('/');
            } else {
                console.log("Some error occured")
            }
        } else {
            const { status } = await updateBlog(userBlog, slug);
            if (status === 200) {
                setArticles([...(articles.filter((article) => article._id !== userBlog._id)), userBlog]);
                navigate('/');
            } else {
                console.log("Some error occured")
            }
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