import {
  createStyles,
  List,
  ListItem,
  ListItemText,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      width: "100%",
      "& > *": {
        marginTop: theme.spacing(1),
      },
    },
  })
);

export default function AppTodoList({ todosList }) {
  let classes = useStyles();
  return (
    <List className={classes.root}>
      {todosList.map((item) => (
        <ListItem>
          <ListItemText primary={item.title} />
        </ListItem>
      ))}
    </List>
  );
}
