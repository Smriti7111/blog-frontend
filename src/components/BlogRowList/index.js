import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Button, TableRow, TableCell } from "@mui/material";
import { useState } from 'react';
import DeleteDialog from '../DeleteDialog';


const handleUpdate = () => {

}

const BlogRowList = ({ article }) => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = (slug) => {
        setOpen(true);
    };

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
                <Button onClick={handleUpdate} startIcon={<EditIcon />} />
            </TableCell>
            <DeleteDialog setOpen={setOpen} open={open} slug={article.slug} />
        </TableRow>
    )
}

export default BlogRowList;