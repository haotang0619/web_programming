import React from "react";
import {
  makeStyles,
  Button,
  Container,
  TextField,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    textAlign: "center",
  },
  title: {
    color: "#1979a9",
    fontWeight: 500,
    margin: "30px 0",
  },
  form: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "30px",
  },
  text: {
    margin: "15px",
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <Container className={classes.root} fixed maxWidth="xs">
      <img alt="logo" src="/login.jpg" />
      <Typography className={classes.title} variant="h5">
        IoT監測控制系統
      </Typography>
      <div className={classes.form}>
        <span className={classes.text}>帳號</span>
        <TextField label="輸入帳號" variant="outlined" />
      </div>
      <div className={classes.form}>
        <span className={classes.text}>密碼</span>
        <TextField label="輸入密碼" variant="outlined" />
      </div>
      <Button variant="contained">送出</Button>
    </Container>
  );
}