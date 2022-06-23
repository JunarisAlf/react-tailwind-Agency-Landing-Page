import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import Container from '@/components/MainContainer';
import Home from '@/pages/Home';
import '@/assets/styles/tailwind.css';
import Navbar from '@/components/Navbar';
import Footer from '@/pages/Home/components/Footer';
import ActiveTabContextProvider from '@/contexts/ActiveTabContext';

const App = () => {
    return (
        <ActiveTabContextProvider>
            <Navbar />
            <Container>
                <Home />
            </Container>
            <Footer />
        </ActiveTabContextProvider>
    );
};

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
