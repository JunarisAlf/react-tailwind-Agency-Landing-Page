import { useEffect, useContext } from 'react';
import Headline from '@/pages/Home/components/Headline';
import MainImage from '@/pages/Home/components/MainImage';
import AboutUs from '@/pages/Home/components/AboutUs';
import OurServices from '@/pages/Home/components/OurServices';
import OurPortofolio from '@/pages/Home/components/OurPortofolio';
import Testimonial from '@/pages/Home/components/Testimonial';
import SecondaryImage from '@/pages/Home/components/SecondaryImage';
import ClickToAction from '@/pages/Home/components/ClickToAction';
import {ActiveTabContext} from '@/contexts/ActiveTabContext';

export default function Home() {
    const { setActiveTab} = useContext(ActiveTabContext)
    useEffect(() => {
        const position = {
            headline: document.getElementById('home').offsetTop - 150,
            about: document.getElementById('about').offsetTop - 150,
            services: document.getElementById('services').offsetTop - 150,
            projects: document.getElementById('projects').offsetTop - 150,
            testimonial: document.getElementById('testimonial').offsetTop - 150,
        };
        window.addEventListener('scroll', () => {
            if(window.scrollY > 0 && window.scrollY < position.about){
                setActiveTab('home')
            }else if( window.scrollY > position.about && window.scrollY <  position.services){
                setActiveTab('about')
            }else if(window.scrollY > position.services && window.scrollY <  position.projects){
                setActiveTab('services')
            }else if(window.scrollY > position.projects && window.scrollY <  position.testimonial){
                setActiveTab('projects')
            }else if(window.scrollY > position.testimonial){
                setActiveTab('testimonial')
            }
        })
    }, []);

    return (
        <>
            <main className="pt-16">
                <Headline />
                <MainImage />
                <AboutUs />
                <OurServices />
                <OurPortofolio />
                <Testimonial />
                {/* <SecondaryImage /> */}
                <ClickToAction />
            </main>
        </>
    );
}
