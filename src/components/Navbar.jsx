
import { useState } from 'react'
import Logo from '@/assets/icons/logo.svg'
export default () => {
    const [open, setOpen] = useState(false);
    const onClickHandler = () => {
        setOpen(!open);
    }
    return (
        <nav className={"fixed z-50 px-5 bg-white drop-shadow-md inset-x-0 top-0  grid grid-cols-2 auto-rows-min justify-between items-center py-6 " + (open ? ' bottom-0' : ' ')}>
            <img className="order-1 w-[5.6rem] h-[2rem]" src={Logo} alt="logo" />
            <ul className={"order-3 col-span-2 font-nunito px-8" + (open? ' block' : ' hidden')}>
                <li className="text-center py-4 hover:bg-blue hover:bg-opacity-10" onClick={onClickHandler}><a href="#home" >Home</a></li>
                <li className="text-center py-4 hover:bg-blue hover:bg-opacity-10" onClick={onClickHandler}><a href="#about" >About</a></li>
                <li className="text-center py-4 hover:bg-blue hover:bg-opacity-10" onClick={onClickHandler}><a href="#services" >Services</a></li>
                <li className="text-center py-4 hover:bg-blue hover:bg-opacity-10" onClick={onClickHandler}><a href="#projects" >Prjects</a></li>
                <li className="text-center py-4 hover:bg-blue hover:bg-opacity-10" onClick={onClickHandler}><a href="#testimonial" >Testimonial</a></li>
            </ul>
            <div className="order-2 flex flex-col gap-y-1 w-min items-center justify-self-end" onClick={onClickHandler}>
                <span className={"block w-5 bg-black h-0.5  ease-in duration-100" +( open ? ' rotate-45 translate-y-1.5' : '')}/>
                <span className={"block w-4 bg-black h-0.5 ease-in duration-75" + ( open ? ' invisible' : 'visible')}/>
                <span className={"block w-5  bg-black h-0.5 ease-in duration-100" +( open ? ' -rotate-45 -translate-y-1.5' : '')}/>
            </div>
        </nav>
    )
}