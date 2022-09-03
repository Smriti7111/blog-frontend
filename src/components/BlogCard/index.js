import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

const BlogCard = ({ article }) => {
    return (
        <Link to={`/blogs/${article.slug}`}>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image="/static/images/cards/contemplative-reptile.jpg"
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {article.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {article.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Link>
    )
}

export default BlogCard;