import { Box } from "@mui/material";
import { useContext } from "react";
import BlogPage from "../../components/BlogPage";
import { ArticleDetailContext, ArticleDetailProvider } from "../../context/ArticleDetailContext";
import { useParams } from "react-router-dom";

export const SingleBlogLayout = () => {
    const {slug} = useParams();

    return (
        <ArticleDetailProvider slug={slug}>
            <SingleBlog/>
        </ArticleDetailProvider>
    )
}

const SingleBlog = () => {
    const { articleDetails, loading, error } = useContext(ArticleDetailContext);

    return (
        <Box>
            {loading && <h1>Loading...</h1>}
            {!loading && error && <h1>Some error occured!</h1>}
            {!loading && !error && articleDetails && <BlogPage article={articleDetails}/>}
        </Box>
    )
}

export default SingleBlogLayout;