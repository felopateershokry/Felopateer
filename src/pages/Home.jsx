import React , { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import './Home.css';
import HomeBody from '../components/HomeBody';


export default function Home() {


    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);


    return (
      <>
        <Hero />
        <HomeBody />
      </>
    );
}
