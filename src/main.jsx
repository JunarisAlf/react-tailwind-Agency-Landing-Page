import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Container from '@/components/MainContainer';
import Home from '@/pages/Home';
import '@/assets/styles/tailwind.css';
import Navbar from '@/components/Navbar';
import Footer from '@/pages/Home/components/Footer';
import { ActiveTabContext } from '@/contexts/ActiveTabContext';

const App = () => {
    const [activeTab, setActiveTab] = useState('home')

    return (
        <ActiveTabContext.Provider value={{activeTab, setActiveTab}}>
            <Navbar />
            <Container>
                <Home />
            </Container>
            <Footer />
        </ActiveTabContext.Provider>
    );
};

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
