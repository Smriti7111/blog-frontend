import { Box } from "@mui/material";
import { useContext } from "react";
import BlogCard from "../../components/BlogCard";
import { ArticleContext } from "../../context/ArticleContext";

const HomeLayout = () => {
    const { articles, loading, error } = useContext(ArticleContext);
    return (
        <Box p={10}>
            {loading && <h1>Loading...</h1>}
            {!loading && error && <h1>Some error occured!</h1>}
            {!loading && !error && articles && articles.map((article) => {
                return <BlogCard article={article}/>
            }) }
        </Box>
    )
}

export default HomeLayout;