
import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Link } from "react-router-dom";
// import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import user from "../data/user"

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
  

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function SignIn(props) {
  const classes = useStyles();

  const [account, setAccount] = React.useState({ username: "", password: "" });
  const [error, setError] = React.useState({ username: "", password: "" });
  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleChange = (property, event) => {
    const accountCopy = {
      ...account
    };
    accountCopy[property] = event.target.value;
    setAccount(accountCopy);
    validate(property);
  };

  const validate = (property) => {
    property === "username" ? validateUsername() : validatePassword();
  };

  const validateUsername = () => {
    const errorCopy = { ...error };
    if (account.username.includes(" ")) {
      errorCopy.username = "Username cannot contain a space";
    } else if (account.username.length < 10) {
      errorCopy.username = `Username should be greater than 10 chars`;
    } else {
      errorCopy.username = "";
    }

    setError(errorCopy);
  };

  const validatePassword = () => {
    const errorCopy = { ...error };
    if (account.password.length < 5) {
      errorCopy.password = `Password should be greater than 5 chars`;
    } else {
      errorCopy.password = "";
    }
    setError(errorCopy);
  };


  const handlelogin = () => {
    if (isValidUser(account.username, account.password)) 
      props.history.push("/home");
    else
        setOpen(true);
  };

  const isValidUser = (username, password) => {
    return user.find(
      (acc) => acc.username === username && acc.password === password
    );
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Log in
        </Typography>
        {/* <form className={classes.form} noValidate > */}
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={(event) => handleChange("username", event)}
            error={error.username}
            helperText={error.username}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(event) => handleChange("password", event)}
            error={error.password}
            helperText={error.password}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handlelogin}
          >
            Log In
          </Button>
        {/* </form> */}
      </div>
      <Box mt={8}>
        <Copyright />
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          Incorrect username or password
        </Alert>
      </Snackbar>
      </Box>
      
    </Container>
  );
}