import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import './Home.css';
import Cards from '../components/Cards';


export default function Home() {
    return (
      <>
        <Hero />
        <Cards />
      </>
    );
}
