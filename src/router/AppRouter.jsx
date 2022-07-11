import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import { useState, useEffect } from "react";
import About from "../pages/about/About";
import axios from "axios";

const AppRouter = () => {
  const [auted, setAuted] = useState(true);
  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
  });
  const [searchValues, setSearchValues] = useState({
    query: "chicken",
    mealType: "dinner",
  });

  const [receips, setReceips] = useState([]);

  const [receipApi, setReceipApi] = useState({
    ApiId: "efc4e475",
    ApiKey: "e66cb008dcc606f10043c594b95035d4",
  });

  const url = `https://api.edamam.com/search?q=${searchValues.query}&app_id=${receipApi.ApiId}&app_key=${receipApi.ApiKey}&mealType=${searchValues.mealType}`;

  const getReceipApi = async () => {
    try {
      const { data } = await axios.get(url);
      setReceips(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // getReceipApi();
console.log('somechanges happened');
    // console.log(searchValues.mealType, searchValues.query);
  }, [searchValues]);

  const userName = "abdurrahman";
  const userPass = "kucuk";

  const handleFormValues = (e) => {
  

    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const submitButton = () => {
    if (formValues.password === userPass && formValues.username === userName) {
      setAuted(true);
    } else {
      setAuted(false);
    }
  };

  const handleSearchValues = (e) => {
    const [name, value] = e.target
    setSearchValues({ ...searchValues, [name]: value });
    console.log(e.target.value, searchValues);
  };
  console.log(searchValues);
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Login
            handleFormValues={handleFormValues}
            submitButton={submitButton}
            auted={auted}
          />
        }
      />
      <Route path="/navbar" element={<Navbar auted={auted} />}>
        <Route index element={<Home />} />
        <Route
          path="home"
          element={<Home handleSearchValues={handleSearchValues} />}
        />
        <Route path="/navbar/about" element={<About />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
