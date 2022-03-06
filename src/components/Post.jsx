import {
  Card,
  CardActionArea,
  CardMedia,
  makeStyles,
  Typography,
  CardContent,
  CardActions,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  media: {
    height: "300px",
    [theme.breakpoints.down("sm")]:{
        height: 150,
    }
  },
  card: {
    marginBottom: theme.spacing(5),
  },
}));

function Post() {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://wallpaperaccess.com/full/4885937.jpg"
          title="Street Fighter V"
        />
        <CardContent>
          <Typography gutterbottom variant="h5">Street Fighter</Typography>
          <Typography variant="h6">
            Street Fighter V with the surprise release date , coming soon to all
            consoles!
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

export default Post;
