import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Auth = () => {
    let navigate = useNavigate();
    let url = "   https://vanlife-h9ye.onrender.com/van/dashboard";
    const token = localStorage.token;
    useEffect(() => {
      getUserName();
    }, []);
  
    const getUserName = () => {
      console.log("Function was seeennn");
      axios
        .get(url, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': "application/json",
            "Content-type": "application/json",
            // bearer:`Bearer ${localStorage.userToken}`,
          },
        })
        .then((res) => {
          if (res.data.status === false) {
            localStorage.removeItem('token')
            navigate("/login");
          } else {
            console.log(res);
            console.log(res.data.userDetails.firstName);
            setUserData(res.data.userDetails.firstName);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };
  return (
    <>

    </>
  )
}

export default Auth