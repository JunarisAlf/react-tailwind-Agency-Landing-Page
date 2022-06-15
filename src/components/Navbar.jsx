import { useState, useRef, useContext } from 'react';
import Logo from '@/assets/icons/logo.svg';
import {ActiveTabContext} from '@/contexts/ActiveTabContext';

export default () => {
    const {activeTab, setActiveTab} = useContext(ActiveTabContext)
    const [open, setOpen] = useState(false);
    const onClickHandler = (tabClicked) => {
        setOpen(!open);
        setActiveTab(tabClicked);
    };
    return (
        <nav
            className={
                'fixed z-50 px-5 md:px-[100px] bg-white drop-shadow-md inset-x-0 top-0  grid grid-cols-2 auto-rows-min justify-between items-center py-6 lg:flex lg:flex-row lg:py-2 lg:bottom-auto' +
                (open ? ' bottom-0' : ' ')
            }
        >
            <img
                className="order-1 w-[5.6rem] h-[2rem]"
                src={Logo}
                alt="logo"
            />
            <ul
                className={
                    'order-3 col-span-2 font-nunito text-[1.3rem] font-semibold mt-5 lg:flex lg:flex-row lg:text-xs lg:gap-6 lg:mt-0 lg:font-light' +
                    (open ? ' block' : ' hidden')
                }
            >
                <li
                    className={"text-center py-4 hover:bg-blue hover:bg-opacity-10 lg:hover:bg-white lg:hover:bg-opacity-100 lg:hover:font-semibold duration-300" + (activeTab == 'home' ? ' lg:font-bold' : '')}
                    onClick={() => onClickHandler('home')}
                >
                    <a href="#home">Home</a>
                </li>
                <li
                    className={"text-center py-4 hover:bg-blue hover:bg-opacity-10 lg:hover:bg-white lg:hover:bg-opacity-100 lg:hover:font-semibold duration-300" + (activeTab == 'about' ? ' lg:font-bold' : '')}
                    onClick={() => onClickHandler('about')}
                >
                    <a href="#about">About</a>
                </li>
                <li
                    className={"text-center py-4 hover:bg-blue hover:bg-opacity-10 lg:hover:bg-white lg:hover:bg-opacity-100 lg:hover:font-semibold duration-300" + (activeTab == 'services' ? ' lg:font-bold' : '')}
                    onClick={() => onClickHandler('services')}
                >
                    <a href="#services">Services</a>
                </li>
                <li
                    className={"text-center py-4 hover:bg-blue hover:bg-opacity-10 lg:hover:bg-white lg:hover:bg-opacity-100 lg:hover:font-semibold duration-300" + (activeTab == 'projects' ? ' lg:font-bold' : '')}
                    onClick={() => onClickHandler('projects')}
                >
                    <a href="#projects">Prjects</a>
                </li>
                <li
                    className={"text-center py-4 hover:bg-blue hover:bg-opacity-10 lg:hover:bg-white lg:hover:bg-opacity-100 lg:hover:font-semibold duration-300" + (activeTab == 'testimonial' ? ' lg:font-bold' : '')}
                    onClick={() => onClickHandler('testimonial')}
                >
                    <a href="#testimonial">Testimonial</a>
                </li>
            </ul>
            <div
                className="order-2 flex flex-col gap-y-1 w-min items-center justify-self-end lg:hidden"
                onClick={onClickHandler}
            >
                <span
                    className={
                        'block w-5 bg-black h-0.5  ease-in duration-100' +
                        (open ? ' rotate-45 translate-y-1.5' : '')
                    }
                />
                <span
                    className={
                        'block w-4 bg-black h-0.5 ease-in duration-75' +
                        (open ? ' invisible' : 'visible')
                    }
                />
                <span
                    className={
                        'block w-5  bg-black h-0.5 ease-in duration-100' +
                        (open ? ' -rotate-45 -translate-y-1.5' : '')
                    }
                />
            </div>
        </nav>
    );
};
