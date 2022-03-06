import {
  Avatar,
  Container,
  Divider,
  ImageList,
  ImageListItem,
  Link,
  makeStyles,
  Typography,
} from "@material-ui/core";
import AvatarGroup from "@mui/material/AvatarGroup";
import itemData from "../ItemData";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
    position: "sticky",
    top: 0
  },
  title: {
    fontSize: 16,
    fontWeight: 500,
    color: "#555",
  },
  link: {
    marginRight: theme.spacing(2),
    color: "#555",
    fontSize: 16,
  },
}));

function Rightbar() {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Typography className={classes.title} gutterbottom>
        Online Friends
      </Typography>
      <AvatarGroup max={6} style={{ marginBottom: 20 }}>
        <Avatar alt="Dwayne Wynter" src="/static/images/avatar/1.jpg" />
        <Avatar alt="Kanye West" src="/static/images/avatar/2.jpg" />
        <Avatar alt="Al.B Sure" src="/static/images/avatar/3.jpg" />
        <Avatar alt="Rick Ross" src="/static/images/avatar/4.jpg" />
        <Avatar alt="Snoop Dogg" src="/static/images/avatar/5.jpg" />
        <Avatar alt="Dianna Ross" src="/static/images/avatar/4.jpg" />
        <Avatar alt="Michael Jackson" src="/static/images/avatar/5.jpg" />
        <Avatar alt="Cameo" src="/static/images/avatar/5.jpg" />
      </AvatarGroup>
      <Typography className={classes.title} gutterbottom>
        Gallery
      </Typography>
      <ImageList
        sx={{ width: 500, height: 450 }}
        cols={3}
        rowHeight={100}
        style={{ marginBottom: 20 }}
      >
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
      <Typography className={classes.title} gutterbottom>
        Categories
      </Typography>
      <Link href="#" className={classes.link} variant="body2">
        Sport
      </Link>
      <Link href="#" className={classes.link} variant="body2">
        Food
      </Link>
      <Link href="#" className={classes.link} variant="body2">
        Music
      </Link>
      <Divider flexItem style={{marginBottom: 5}} />
      <Link href="#" className={classes.link} variant="body2">
        Movies
      </Link>
      <Link href="#" className={classes.link} variant="body2">
        Science
      </Link>
      <Link href="#" className={classes.link} variant="body2">
        Hobbies
      </Link>
    </Container>
  );
}

export default Rightbar;
