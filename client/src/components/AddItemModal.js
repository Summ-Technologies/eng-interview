import {
  Button,
  createStyles,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  makeStyles,
  TextField,
} from "@material-ui/core";
import { useDispatch } from "react-redux";

const useStyles = makeStyles((theme) =>
  createStyles({
    formBody: {
      "& > *": {
        marginTop: theme.spacing(1),
      },
    },
  })
);

export default function AddItemModal({ onClose }) {
  let classes = useStyles();
  let dispatch = useDispatch();
  function submitNewItem(e) {
    e.preventDefault();
    // dispatch(postTodo(title))
    onClose();
  }
  return (
    <Dialog maxWidth="md" fullWidth open onClose={onClose}>
      <form onSubmit={submitNewItem}>
        <DialogTitle>Add new item</DialogTitle>
        <DialogContent className={classes.formBody}>
          <TextField
            type="text"
            fullWidth
            variant="outlined"
            label="Item title"
            required
          />
          <TextField
            label="Item description"
            type="text"
            multiline
            minRows={2}
            fullWidth
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button color="primary" variant="contained" type="submit">
            Submit
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
