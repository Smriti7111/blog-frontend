import { Box, Typography, CardMedia } from "@mui/material";
import { formatDate } from "../../data/service";

const BlogPage = ({ article }) => {
  return (
    <Box>
      <Typography gutterBottom variant="h5" component="div">
        {article.title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        By <strong>{article.author}</strong>
      </Typography>
      <Typography variant="body2" color="text.secondary" gutterBottom>
        Published on: {formatDate(article.publishDate)}
      </Typography>
      <CardMedia
        component="img"
        height="500"
        image="https://thumbs.dreamstime.com/b/blog-information-website-concept-workplace-background-text-view-above-127465079.jpg"
        alt="green iguana"
      />
      <Box pt={4}>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          {article.description}
        </Typography>
      </Box>
    </Box>
  );
};

export default BlogPage;
