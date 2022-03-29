import React, { useEffect } from 'react';
import Footer from '../components/footer/Footer';
import Navigation from '../components/navigation/Navigation';
import Head from 'next/head';


const MainLayout = ({ children, title }) => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <React.Fragment>
            <Head>
                <title>{typeof title !== "undefined" && title !== null ? `Wavy Sharks Scoiety || ${title}` : "Wavy Sharks Scoiety"}</title>
            </Head>
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