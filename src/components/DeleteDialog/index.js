import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { deleteBlog } from "../../data/service";
import { useContext } from "react";
import { ArticleContext } from "../../context/ArticleContext";

const DeleteDialog = ({ open, setOpen, article }) => {
  const { articles, setArticles } = useContext(ArticleContext);
  const { slug } = article;

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = async () => {
    const { status } = await deleteBlog(slug);
    if (status === 200) {
      setArticles(articles.filter((article) => article.slug !== slug));
    } else {
      console.log("Some error occured");
    }
    setOpen(false);
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete <b>{article.title}</b> ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleDelete} autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DeleteDialog;
