import React, { useEffect, useState } from "react";
import Home from "../HomePage/Home1/Home1";
import Header from "./home/header";
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

const Final = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
        // Redirect to the '/Signin' route when user is not authenticated
        navigate('/Signin', { replace: true });
      }
    });

    return () => {
      // Unsubscribe from the auth state change listener when the component unmounts
      unsubscribe();
    };
  }, [navigate]);

  if (!isAuthenticated) {
    // This part is for rendering a loading component or message
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header />
      <Home />
    </div>
  );
};

export default Final;
