import React, { useState } from 'react';
// import axios from 'axios';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button/Button';
import { makeStyles } from '@material-ui/core/styles';
import LockOpenOutlinedIcon from '@material-ui/icons/LockOpenOutlined';
// import { connect } from "react-redux";

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 100
  },
  root: {
    padding: theme.spacing(3, 2),
    width: '40%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 100
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  },
  button: {
    marginLeft: 350,
    display: 'flex'
  },
  centered: {
    display: 'flex',
    justifyContent: 'center'
  }
}));

const SignIn = () => {
  const classes = useStyles();
  const [user, setUser] = useState({ username: '', password: '' });

  const handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // eslint-disable-next-line no-alert
    alert(user.username);
    // eslint-disable-next-line no-alert
    alert(user.password);
  };

  return (
    <div>
      <Paper className={classes.root}>
        <form
          onSubmit={event => handleSubmit(event)}
          className={classes.container}
          noValidate
          autoComplete="off"
        >
          <div className={classes.centered}>
            <Typography variant="h1" gutterBottom>
              auxilium
            </Typography>
          </div>
          <div className={classes.centered}>
            <LockOpenOutlinedIcon />
          </div>
          <div className={classes.centered}>
            <TextField
              name="username"
              label="Username"
              type="text"
              className={classes.textField}
              InputLabelProps={{
                shrink: true
              }}
              margin="normal"
              value={user.username}
              onChange={event => handleChange(event)}
            />
          </div>
          <div className={classes.centered}>
            <TextField
              name="password"
              label="Password"
              type="password"
              className={classes.textField}
              InputLabelProps={{
                shrink: true
              }}
              margin="normal"
              value={user.password}
              onChange={event => handleChange(event)}
            />
          </div>
          <div className={classes.centered}>
            <Button
              type="submit"
              color="secondary"
              variant="contained"
              className="classes.button"
            >
              Submit
            </Button>
          </div>
        </form>
      </Paper>
    </div>
  );
};

export default SignIn;

//     handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
//       if (values.username === "alreadytaken@atb.dev") {
//         setErrors({ username: "That username is already taken" });
//       } else {
//         axios
//             .post("https://devdesk-backend.herokuapp.com/api/auth/login", values)
//             .then(res => {
//               console.log(res);
//               resetForm();
//               setSubmitting(false);
//             })
//             .catch(err => {
//               console.log(err);
//               setSubmitting(false);
//             });
//       }
//     }
//   }
// })(LoginForm);

// const SignIn = () => {
//   const classes = useStyles();
//   const [state, setState] = useState({});

//   // const handleChange = e => {
//   //   setLogin({
//   //     [e.target.username]: e.target.value
//   //   });
//   // };
//   //
//   // const handleSubmit = e => {
//   //   e.preventDefault();
//   //   const { username, password } = logIn;
//   // };
// function LoginForm({ values, errors, touched, isSubmitting }) {
//   return (
//       <div>
//         <Paper className={classes.root}>
//           <form
//               onSubmit={() => {}}
//               className={classes.container}
//               noValidate
//               autoComplete="off"
//           >
//             <div className={classes.centered}>
//               <Typography variant="h1" gutterBottom>
//                 auxilium
//               </Typography>
//             </div>
//             <div className={classes.centered}>
//               <LockOpenOutlinedIcon />
//             </div>
//             <div className={classes.centered}>
//               <TextField
//                   id="standard-text"
//                   label="Username"
//                   type="text"
//                   className={classes.textField}
//                   InputLabelProps={{
//                     shrink: true
//                   }}
//                   margin="normal"
//                   onChange={handleChange}
//               />
//             </div>
//             <div className={classes.centered}>
//               <TextField
//                   id="standard-text"
//                   label="Password"
//                   type="password"
//                   className={classes.textField}
//                   InputLabelProps={{
//                     shrink: true
//                   }}
//                   margin="normal"
//                   onChange={handleChange}
//               />
//             </div>
//             <div className={classes.centered}>
//               <Button
//                   type="submit"
//                   color="secondary"
//                   variant="contained"
//                   className="classes.button"
//               >
//                 Submit
//               </Button>
//             </div>
//           </form>
//         </Paper>
//       </div>
//   );
// }

// const FormikLoginForm = withFormik({
//   mapPropsToValues({ username, password, tos }) {
//     return {
//       username: username || "",
//       password: password || "",
//       tos: tos || ""
//     };
//   },
//   validationSchema: Yup.object().shape({
//     username: Yup.string()
//         .username("Username is not valid")
//         .required("Username is required"),
//     password: Yup.string()
//         .min(8, "Password must be 8 characters or longer")
//         .required("Password is required")
//   }),
//   handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
//     if (values.username === "alreadytaken@atb.dev") {
//       setErrors({ username: "That username is already taken" });
//     } else {
//       axios
//           .post("https://devdesk-backend.herokuapp.com/api/auth/login", values)
//           .then(res => {
//             console.log(res);
//             resetForm();
//             setSubmitting(false);
//           })
//           .catch(err => {
//             console.log(err);
//             setSubmitting(false);
//           });
//     }
//   }
// }
// })(LoginForm);

// export default FormikLoginForm;
