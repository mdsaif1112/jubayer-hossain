
import ActiveLink from "../../../components/ActiveLink/ActiveLink";
import { Drawer } from "@mui/material";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {


    const [rightDrawer, setRightDrawer] = useState(false)


    const toggleRightDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setRightDrawer(open);
    };


    const closeRightDrawer = (e) => {
        setRightDrawer(false)
    }

    return (
        <header className={`px-5 sticky top-0 left-0 w-full mb-[-76px] duration-300 bg-white z-50`}>
            <div className="my-container py-5 flex justify-between items-center">
                <div>
                    <a href={'#'}>
                        <span className="text-3xl font-bold uppercase">Jubayer</span>
                    </a>
                </div>
                <div>
                    <FaBars onClick={toggleRightDrawer(true)} className="xl:hidden text-[26px]" />
                    <ul className="xl:flex justify-end gap-5 hidden">
                        <li>
                            <ActiveLink className="list-item" href={'#'}>
                                Home
                            </ActiveLink>
                        </li>
                        <li>
                            <ActiveLink className="list-item" href={'/#aboutSection'}>
                                About
                            </ActiveLink>
                        </li>
                        <li>
                            <ActiveLink className="list-item" href={'/#portfolioSection'}>
                                Portfolio
                            </ActiveLink>
                        </li>
                        <li>
                            <ActiveLink className="list-item" href={'/contact'}>
                                Contact
                            </ActiveLink>
                        </li>
                    </ul>
                </div>
            </div>

            <Drawer
                anchor={'right'}
                open={rightDrawer}
                onClose={toggleRightDrawer(false)}
            >
                <div className='menu-drawer h-full w-screen bg-black py-5 '>
                    <div className='w-full flex justify-end mb-5'>
                        <FaTimes onClick={toggleRightDrawer(false)} className='text-white mr-5 text-[20px]' />
                    </div>
                    <ul className='text-white flex justify-start items-stretch flex-col w-full gap-5'>
                        <li onClick={closeRightDrawer} className="header-li py-2 px-5 inline-block hover:bg-white hover:text-black">
                            <ActiveLink className="list-item" href={'#'}>
                                Home
                            </ActiveLink>
                        </li>
                        <li onClick={closeRightDrawer} className="header-li py-2 px-5 inline-block hover:bg-white hover:text-black">
                            <ActiveLink className="list-item" href={'/#aboutSection'}>
                                About
                            </ActiveLink>
                        </li>
                        <li onClick={closeRightDrawer} className="header-li py-2 px-5 inline-block hover:bg-white hover:text-black">
                            <ActiveLink className="list-item" href={'/#portfolioSection'}>
                                Portfolio
                            </ActiveLink>
                        </li>
                        <li onClick={closeRightDrawer} className="header-li py-2 px-5 inline-block hover:bg-white hover:text-black">
                            <ActiveLink className="list-item" href={'/contact'}>
                                Contact
                            </ActiveLink>
                        </li>
                    </ul>
                </div>
            </Drawer>
        </header>
    );
}
export default Header;