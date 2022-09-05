import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { formatDate } from "../../data/service";

const BlogCard = ({ article }) => {
  const navigate = useNavigate();

  const navigateBlogDetail = (slug) => {
    navigate(`/blogs/${slug}`);
  };

  return (
    <Card
      sx={{ maxWidth: 345 }}
      onClick={() => navigateBlogDetail(article.slug)}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://thumbs.dreamstime.com/b/blog-information-website-concept-workplace-background-text-view-above-127465079.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {article.title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: "2",
              WebkitBoxOrient: "vertical",
            }}
            gutterBottom
          >
            {article.description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            By <strong>{article.author}</strong>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {formatDate(article.publishDate)}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default BlogCard;
