import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { SnackBar } from "../../components/SnackBar";
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
        author: "",
        publishDate: ""
    }

    const [userBlog, setUserBlog] = useState(articleDetails || initialState)
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

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
            setUserBlog({ ...userBlog, publishDate: Date.now() })
        } else {
            handleUpdateBlog();
        }
    }

    useEffect(() => {
        if (userBlog.publishDate !== "" && !slug) {
            handleCreateBlog();
        }
    }, [userBlog])

    const handleCreateBlog = async () => {
        const { response, status } = await createBlog(userBlog);
        if (status === 200) {
            setArticles([...articles, userBlog]);
            setUserBlog(initialState);
            navigate('/');
        } else {
            console.log("Some error occured");
            console.log(response.data);
            setOpen(true);
        }
    }

    const handleUpdateBlog = async () => {
        const { status } = await updateBlog(userBlog, slug);
        console.log(status);
        if (status === 200) {
            setArticles([...(articles.filter((article) => article._id !== userBlog._id)), userBlog]);
            navigate('/');
        } else {
            console.log("Some error occured");
            setOpen(true);
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
            p={5}
        >
            <Typography variant="h4">
                {!slug ? 'Create a New Blog' : 'Update Blog'}
            </Typography>
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
            <Button variant="contained" onClick={handleSubmit} style={{ maxWidth: '200px' }}>{!slug ? 'Create' : 'Update'}</Button>
            <SnackBar setOpen={setOpen} open={open} />
        </Box>
    )
}

export default CreateBlogLayout;