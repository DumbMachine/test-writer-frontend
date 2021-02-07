import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Card, makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

export default function CarouselSlide(props) {
  const { content } = props;
  console.log(content.backgroundColor, "these are the props");
  const useStyles = makeStyles(() => ({
    card: {
      backgroundColor: content[0].backgroundColor,
      borderRadius: 5,
      // padding: "50px 50px",
      margin: "0px 25px 25px",
      width: "300px",
      boxShadow: "20px 20px 20px black",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
  }));

  const classes = useStyles();

  return (
    <Grid container>
      {content.map((item, index) => {
        return (
          <Grid item xs component={Card} className={classes.card}>
            <CardContent>
              {/* <Typography color="textSecondary" gutterBottom>
            {title}
          </Typography> */}
              {/* <Typography variant="h5" component="h2"> */}
              <Typography variant="h6">{item.title}</Typography>
            </CardContent>
            <CardActions>
              <Button size="small">
                <a
                  style={{ color: "inherit", textDecoration: "none" }}
                  href={item.url}
                >
                  Read More
                </a>
              </Button>
            </CardActions>
          </Grid>
        );
      })}
    </Grid>
  );
}

// <Grid item xs component={Card} className={classes.card}>
//   <CardContent>
//     <Typography color="textSecondary" gutterBottom>
//       {title}
//     </Typography>
//     <Typography variant="h5" component="h2">
//       benevolent
//     </Typography>
//     <Typography variant="body2" component="p">
//       well meaning and kindly.
//       <br />
//       {'"a benevolent smile"'}
//     </Typography>
//   </CardContent>
//   <CardActions>
//     <Button size="small">
//       <a style={{ color: "inherit", textDecoration: "none" }} href={url}>
//         Read More
//       </a>
//     </Button>
//   </CardActions>
// </Grid>
// <Grid item xs component={Card} className={classes.card}>
//   <CardContent>
//     <Typography color="textSecondary" gutterBottom>
//       {title}
//     </Typography>
//     <Typography variant="h5" component="h2">
//       benevolent
//     </Typography>
//     <Typography variant="body2" component="p">
//       well meaning and kindly.
//       <br />
//       {'"a benevolent smile"'}
//     </Typography>
//   </CardContent>
//   <CardActions>
//     <Button size="small">
//       <a style={{ color: "inherit", textDecoration: "none" }} href={url}>
//         Read More
//       </a>
//     </Button>
//   </CardActions>
// </Grid>
// <Grid item xs component={Card} className={classes.card}>
//   <CardContent>
//     <Typography color="textSecondary" gutterBottom>
//       {title}
//     </Typography>
//     <Typography variant="h5" component="h2">
//       benevolent
//     </Typography>
//     <Typography variant="body2" component="p">
//       well meaning and kindly.
//       <br />
//       {'"a benevolent smile"'}
//     </Typography>
//   </CardContent>
//   <CardActions>
//     <Button size="small">
//       <a style={{ color: "inherit", textDecoration: "none" }} href={url}>
//         Read More
//       </a>
//     </Button>
//   </CardActions>
// </Grid>
