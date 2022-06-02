
import { useState } from 'react'
import Logo from './../assets/icons/logo.svg'
export default () => {
    const [open, setOpen] = useState(false);
    const onClickHandler = () => {
        setOpen(!open);
    }
    return (
        <nav className="flex flex-row justify-between items-center pt-8 pb-4">
            <img className="w-[91px] h-[33px]" src={Logo} alt="logo" />
            <div className="flex flex-col gap-y-1 w-min items-center" onClick={onClickHandler}>
                <span className={"block w-5 bg-black h-0.5  ease-in duration-100" +( open ? ' rotate-45 translate-y-1.5' : '')}/>
                <span className={"block w-4 bg-black h-0.5 ease-in duration-75" + ( open ? ' invisible' : 'visible')}/>
                <span className={"block w-5 bg-black h-0.5 ease-in duration-100" +( open ? ' -rotate-45 -translate-y-1.5' : '')}/>
            </div>
        </nav>
    )
}