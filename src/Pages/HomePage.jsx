import React from 'react';

// @components
import Header from '../Componentes/Header';
import Hero from '../Componentes/Hero';
import Services from '../Componentes/Services';
import StarRating from '../Componentes/StarRating';

const HomePage = () => {
    return (
        <>
            <Header />
            <Hero />
            {/* <StarRating /> */}
            <Services />
        </>
    );
};

export default HomePage;