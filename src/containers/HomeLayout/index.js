import { Box } from "@mui/material";
import { useContext } from "react";
import BlogCard from "../../components/BlogCard";
import { ArticleContext } from "../../context/ArticleContext";

const HomeLayout = () => {
    const { articles, loading, error } = useContext(ArticleContext);
    return (
        <Box p={10} display="flex" flexWrap={"wrap"} gap={4}>
            {loading && <h1>Loading...</h1>}
            {!loading && error && <h1>Some error occured!</h1>}
            {!loading && !error && articles && articles.map((article, index) => {
                return <BlogCard key={index} article={article} />
            })}
        </Box>
    )
}

export default HomeLayout;