import React, { useEffect, useState } from 'react';
import Style from './BaseLayout.module.scss'
import Navbar from "./Navbar";
import Home from "./home/Home";
import About from "./about/About";
import Portfolio from "./portfolio/Portfolio";
import { Route, Routes } from "react-router-dom";
import { Box, Grid } from "@mui/material";

export default function BaseLayout() {
   // Initialize darkMode with true to default to dark mode
   let [darkMode, setDarkMode] = useState(true);

   function handleToggleDarkMode() {
      let oppositeOfCurrentDarkMode = !darkMode;
      console.log(oppositeOfCurrentDarkMode);
      localStorage.setItem('darkMode', `${oppositeOfCurrentDarkMode}`);
      setDarkMode(oppositeOfCurrentDarkMode);
   }

   useEffect(() => {
      // Retrieve the darkMode value from localStorage, defaulting to true if not found
      let detectedDarkMode = localStorage.getItem('darkMode') === 'false' ? false : true;

      setDarkMode(detectedDarkMode);

      // Save the initial darkMode state to localStorage
      localStorage.setItem('darkMode', `${detectedDarkMode}`);
   }, []);


   return (
      <Box className={darkMode ? Style.dark : Style.light}>
         <Grid className={darkMode ? Style.dark : Style.light} container display={'flex'} flexDirection={'column'} minHeight={'100vh'}
            justifyContent={'space-between'}>
            <Grid item className={darkMode ? Style.dark : Style.light}>
               <Navbar darkMode={darkMode} handleClick={handleToggleDarkMode} />
            </Grid>
            <Grid className={darkMode ? Style.dark : Style.light} item flexGrow={1}>
               <Routes >
                  <Route exact path={'/'} element={<Home />} />
                  <Route exact path={'/about'} element={<About />} />
                  <Route exact path={'/portfolio'} element={<Portfolio />} />
               </Routes>
            </Grid>
            <Grid className={darkMode ? Style.dark : Style.light} item>
               <Box className={darkMode ? Style.dark : Style.light} component={'footer'} display={'flex'} flexDirection={'column'} alignItems={'center'}
                  py={'1.9rem'} sx={{ opacity: 0.7 }} width={'100%'}>
                  <p>
                     Created with <span className={Style.redHeart}>&hearts;</span> by Adarsh Khatri
                  </p>
                  <p>&copy; 2023</p>
               </Box>
            </Grid>
         </Grid>
      </Box>
   )
}

