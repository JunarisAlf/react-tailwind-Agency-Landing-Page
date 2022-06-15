import { useRef } from 'react';
import Headline from '@/pages/Home/components/Headline';
import MainImage from '@/pages/Home/components/MainImage';
import AboutUs from '@/pages/Home/components/AboutUs';
import OurServices from '@/pages/Home/components/OurServices';
import OurPortofolio from '@/pages/Home/components/OurPortofolio';
import Testimonial from '@/pages/Home/components/Testimonial';
import SecondaryImage from '@/pages/Home/components/SecondaryImage';
import ClickToAction from '@/pages/Home/components/ClickToAction';

export default function Home() {
    // const homeDOM = useRef();
    // const aboutDOM = useRef();
    // const servicesDOM = useRef();
    // const projectsDOM = useRef();
    // const testimonialDOM = useRef();

    return (
        <>
            <main className="pt-16  ">
                <Headline />
                <MainImage />
                <AboutUs />
                <OurServices />
                <OurPortofolio />
                <Testimonial />
                <SecondaryImage />
                <ClickToAction />
            </main>
        </>
    );
}
