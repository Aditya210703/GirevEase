import React from "react";
import { Grid, Paper, Avatar, TextField, Button, Typography, Link, Checkbox, FormControlLabel } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, database } from ".././firebase";
import { useNavigate } from "react-router-dom";
import { collection, query, getDocs, where } from "firebase/firestore";

const initialValues = {
  username: "",
  password: "",
  remember: false,
};

const validationSchema = Yup.object().shape({
  username: Yup.string().email("Please enter a valid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const Login = () => {
  const navigate = useNavigate();

  const onSubmit = (values, props) => {
    signInWithEmailAndPassword(auth, values.username, values.password)
      .then(async (userCredential) => {
        const user = userCredential.user;

        const fetchUserType = async () => {
          const userDataCollection = 'user';
          const userCollection = collection(database, userDataCollection);
          const q = query(userCollection, where('UID', '==', user.uid));
          const querySnapshot = await getDocs(q);
          const doc = querySnapshot.docs[0];
          const userData = doc.data();

          return userData.signInType;
        }

        fetchUserType().then((userType) => {
          if (userType === 'Government Official') {
            alert("Sign In successful");
            navigate('/GovernmentHome', { replace: true });
          } else {
            alert("Sign In successful");
            navigate('/home', { replace: true });
          }
        }).catch((error) => {
          if (error.code === "auth/wrong-password") {
            alert("Invalid password");
          } else if (error.code === "auth/user-not-found") {
            alert("User not found");
          } else {
            alert("Sign In failed");
          }
        }).finally(() => {
          props.resetForm();
          props.setSubmitting(false);
        });
      });
  };

  return (
    <Grid>
      <Paper className="bc" style={{ padding: 20, height: "73vh", width: 300, margin: "0  auto" }}>
        <Grid align="center">
          <Avatar style={{ backgroundColor: "#1bbd7e" }}>
            <LockOpenIcon />
          </Avatar>
          <h2>Sign In</h2>
        </Grid>
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
          {(props) => (
            <Form>
              <Field
                as={TextField}
                label="Username"
                name="username"
                placeholder="Enter username"
                fullWidth
                required
                helperText={<ErrorMessage name="username" />}
              />
              <Field
                as={TextField}
                label="Password"
                name="password"
                placeholder="Enter password"
                type="password"
                fullWidth
                required
                helperText={<ErrorMessage name="password" />}
              />
              <Field
                as={FormControlLabel}
                name="remember"
                control={<Checkbox color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                color="primary"
                variant="contained"
                disabled={props.isSubmitting}
                style={{ margin: "8px 0" }}
                fullWidth
              >
                {props.isSubmitting ? "Loading" : "Sign in"}
              </Button>
            </Form>
          )}
        </Formik>
        <Typography>
          <Link href="#">Forgot password ?</Link>
        </Typography>
        <Typography>
          Do you have an account ?
          <Link to="/signup">Sign Up</Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Login;
