import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import './Home.css';
import Cards from '../components/Cards';
import HomeBody from '../components/HomeBody';


export default function Home() {
    return (
      <>
        <Hero />
        {/* <Cards /> */}
        <HomeBody />
      </>
    );
}
