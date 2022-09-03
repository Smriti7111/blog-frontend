import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Button, TableRow, TableCell } from "@mui/material";
import { useState } from 'react';
import DeleteDialog from '../DeleteDialog';
import { useNavigate } from 'react-router-dom';




const BlogRowList = ({ article }) => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const handleClickOpen = (slug) => {
        setOpen(true);
    };

    const handleUpdate = (slug) => {
        navigate(`/blogs/edit/${slug}`)
    }

    return (
        <TableRow key={article.title}>
            <TableCell component="th" scope="row">
                {article.title}
            </TableCell>
            <TableCell style={{ width: 160 }} align="right">
                {article.category}
            </TableCell>
            <TableCell style={{ width: 160 }} align="right">
                {article.slug}
            </TableCell>
            <TableCell style={{ width: 160 }} align="right">
                <Button onClick={() => {
                    handleClickOpen(article.slug)
                }} startIcon={<DeleteIcon />} />
                <Button onClick={() => handleUpdate(article.slug)} startIcon={<EditIcon />} />
            </TableCell>
            <DeleteDialog setOpen={setOpen} open={open} article={article} />
        </TableRow>
    )
}

export default BlogRowList;