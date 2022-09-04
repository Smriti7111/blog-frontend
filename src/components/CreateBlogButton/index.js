import { useNavigate } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
import { Box, Button } from "@mui/material";

const CreateBlogButton = () => {

    const navigate = useNavigate();
    const navigateToCreatePage = () => {
        navigate('/blogs/new');
    };

    return (
        <Box display={"flex"} justifyContent={"flex-end"} pb={2}>
            <Button variant="outlined" onClick={navigateToCreatePage} startIcon={<AddIcon />}>Create a Blog
            </Button>
        </Box>
    )
}

export default CreateBlogButton;