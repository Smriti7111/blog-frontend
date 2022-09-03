import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";

const BlogCard = ({ article }) => {
  const navigate = useNavigate();

  const navigateBlogDetail = (slug) => {
    navigate(`/blogs/${slug}`);
  };

  const formatDate = (dateString) => {
    const nth = function (d) {
      if (d > 3 && d < 21) return "th";
      switch (d % 10) {
        case 1:
          return "st";
        case 2:
          return "nd";
        case 3:
          return "rd";
        default:
          return "th";
      }
    };

    const fortnightAway = new Date(dateString);
    const date = fortnightAway.getDate();
    const month = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ][fortnightAway.getMonth()];
    let newDate = `${date}${nth(
      date
    )} ${month}, ${fortnightAway.getFullYear()}`;
    return newDate;
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
