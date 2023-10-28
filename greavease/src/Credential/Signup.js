import React from "react";
import {
  Grid, Paper, Avatar, Typography, TextField, Button, FormControlLabel, Checkbox, FormControl, InputLabel, MenuItem, Select,
} from "@mui/material";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { FormHelperText } from "@mui/material";
import * as Yup from "yup";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, database } from ".././firebase";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";



const Signup = () => {
  const [As, setAs] = React.useState("");

  const handleChange = (event) => {
    setAs(event.target.value);
  };
  const paperStyle = { padding: 20, width: 300, margin: "0 auto" };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const initialValues = {
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
    password: "",
    confirmPassword: "",
    termsAndConditions: false,
  };



  const validationSchema = Yup.object().shape({
    name: Yup.string().min(3, "It's too short").required("Required"),
    email: Yup.string().email("Enter valid email").required("Required"),
    phoneNumber: Yup.number()
      .typeError("Enter valid Phone Number")
      .required("Required"),
    address: Yup.string().required("Required"),
    password: Yup.string()
      .min(8, "Password minimum length should be 8")
      .required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Password not matched")
      .required("Required"),
    termsAndConditions: Yup.string().oneOf(
      ["true"],
      "Accept terms & conditions"
    ),
  });



  const navigate = useNavigate();
  const UserRef = collection(database, "user");
  const onSubmit = (values, props) => {
    //  console.log(props);
    createUserWithEmailAndPassword(auth, values.email, values.password).then(res => {
      //console.log(res);
      alert("Sign up successfully");
      if(As==="Government Official"){
      console.log(As);
      navigate('/GovernmentHome', { replace: true });
    } 
      else{
     navigate('/home', { replace: true})
    }
      const user = res.user;
      try {
        addDoc(UserRef, {
          Name: values.name,
          Email: values.email,
          Address: values.address,
          phoneNumber: values.phoneNumber,
          signInType: As,
          UID: user.uid,
        });
      }
      catch { alert("Invalid Credentials") };
      updateProfile(user, {
        displayName: values.name,
      });
      console.log(values);
    }).catch((err) => alert("Invalid Credentials"));
    setTimeout(() => {
      props.resetForm();
      props.setSubmitting(false);
    }, 2000);
  };


  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <AddCircleIcon />
          </Avatar>
          <h2 style={headerStyle}>Sign Up</h2>
          <Typography variant="caption" gutterBottom>
            Please fill this form to create an account !
          </Typography>
        </Grid>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(props) => (
            <Form>
              <Field
                as={TextField}
                fullWidth
                name="name"
                label="Name"
                placeholder="Enter your name"
                helperText={<ErrorMessage name="name" />}
              />
              <Field
                as={TextField}
                fullWidth
                name="email"
                label="Email"
                placeholder="Enter your email"
                helperText={<ErrorMessage name="email" />}
              />

              <Field
                as={TextField}
                fullWidth
                name="phoneNumber"
                label="Phone Number"
                placeholder="Enter your phone number"
                helperText={<ErrorMessage name="phoneNumber" />}
              />

              <Field
                as={TextField}
                fullWidth
                name="address"
                label="Locality"
                placeholder="Enter your Locality"
                helperText={<ErrorMessage name="address" />}
              />

              <FormControl
                sx={{ m: 0, minWidth: 260, marginBottom: 0.4 }}
                size="medium"
                fullWidth
              >
                <InputLabel id="demo-select-small-label">SignUp As</InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  name="As"
                  id="demo-select-small"
                  value={As}
                  label="As"
                  onChange={handleChange}
                >
                  <MenuItem value={'Locality Member'}>Locality Member</MenuItem>
                  <MenuItem value={'Community'}>Community</MenuItem>
                  <MenuItem value={'Government Official'}>Government Official</MenuItem>
                </Select>
              </FormControl>
              <Field
                as={TextField}
                fullWidth
                name="password"
                type="password"
                label="Password"
                placeholder="Enter your password"
                helperText={<ErrorMessage name="password" />}
              />
              <Field
                as={TextField}
                fullWidth
                name="confirmPassword"
                type="password"
                label="Confirm Password"
                placeholder="Confirm your password"
                helperText={<ErrorMessage name="confirmPassword" />}
              />
              <FormControlLabel
                control={<Field as={Checkbox} name="termsAndConditions" />}
                label="I accept the terms and conditions."
              />
              <FormHelperText>
                <ErrorMessage name="termsAndConditions" />
              </FormHelperText>
              <Button
                type="submit"
                variant="contained"
                disabled={props.isSubmitting}
                color="primary"
                fullWidth
              >
                {props.isSubmitting ? "Loading" : "Sign up"}
              </Button>
            </Form>
          )}
        </Formik>
      </Paper>
    </Grid>
  );
};

export default Signup;