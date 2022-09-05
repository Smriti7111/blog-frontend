import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArticleContext } from "../../context/ArticleContext";
import {
  ArticleDetailContext,
  ArticleDetailProvider,
} from "../../context/ArticleDetailContext";
import { createBlog, updateBlog } from "../../data/service";

const CreateBlogLayout = () => {
  const { slug } = useParams();
  return (
    <ArticleDetailProvider slug={slug}>
      <CreateBlog slug={slug} />
    </ArticleDetailProvider>
  );
};

const CreateBlog = ({ slug }) => {
  const { articleDetails } = useContext(ArticleDetailContext);
  const { articles, setArticles } = useContext(ArticleContext);

  const initialState = {
    title: "",
    description: "",
    slug: "",
    category: "General",
    author: "Anonymous",
    publishDate: Date.now(),
  };

  const [userBlog, setUserBlog] = useState(articleDetails || initialState);
  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();

  // loads data into the form if it is in edit mode
  useEffect(() => {
    if (!articleDetails) return;
    setUserBlog(articleDetails);
  }, [articleDetails]);

  const handleChange = (e) => {
    setUserBlog({ ...userBlog, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!slug) {
      handleCreateBlog();
      setFormErrors("");
    } else {
      handleUpdateBlog();
    }
  };

  const handleCreateBlog = async () => {
    const { response, status } = await createBlog(userBlog);
    if (status === 200) {
      setArticles([...articles, userBlog]);
      setUserBlog(initialState);
      navigate("/");
    } else {
      console.log("Some error occured");
      setFormErrors(response.data);
    }
  };

  const handleUpdateBlog = async () => {
    const { response, status } = await updateBlog(userBlog, slug);
    console.log(response);
    if (status === 200) {
      setArticles([
        ...articles.filter((article) => article._id !== userBlog._id),
        userBlog,
      ]);
      navigate("/");
    } else {
      console.log("Some error occured");
      setFormErrors(response.data);
    }
  };

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      display="flex"
      flexDirection={"column"}
      justifyContent={"center"}
      gap={3}
      p={5}
    >
      <Typography variant="h4">
        {!slug ? "Create a New Blog" : "Edit Blog"}
      </Typography>
      <Box>
        <TextField
          required
          id="outlined-required"
          label="Title"
          name="title"
          fullWidth
          value={userBlog.title}
          onChange={handleChange}
          sx={{ paddingBottom: 1 }}
        />
        {formErrors.title && (
          <Typography variant="p" p={0} style={{ color: "red" }}>
            {formErrors.title}
          </Typography>
        )}
      </Box>
      <Box>
        <TextField
          required
          multiline
          rows={4}
          fullWidth
          id="outlined-required"
          label="Description"
          name="description"
          value={userBlog.description}
          onChange={handleChange}
          sx={{ paddingBottom: 1 }}
        />
        {formErrors.description && (
          <Typography variant="p" style={{ color: "red" }}>
            {formErrors.description}
          </Typography>
        )}
      </Box>
      <Box>
        <TextField
          required
          id="outlined-required"
          label="Slug"
          name="slug"
          fullWidth
          value={userBlog.slug}
          onChange={handleChange}
          sx={{ paddingBottom: 1 }}
        />
        {formErrors.slug && (
          <Typography variant="p" style={{ color: "red" }}>
            {formErrors.slug}
          </Typography>
        )}
      </Box>
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
      <Button
        variant="contained"
        onClick={handleSubmit}
        style={{ maxWidth: "200px" }}
      >
        {!slug ? "Create" : "Update"}
      </Button>
    </Box>
  );
};

export default CreateBlogLayout;
