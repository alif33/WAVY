import React, { useEffect } from 'react';
import Footer from '../components/footer/Footer';
import Navigation from '../components/navigation/Navigation';
import Head from 'next/head';


const MainLayout = ({ children }) => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <React.Fragment>
            <Navigation />
            <main>
                {
                    children
                }
            </main>
            <Footer />
        </React.Fragment>
    );
};

export default MainLayout;