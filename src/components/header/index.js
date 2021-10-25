import React,{useState} from 'react'
import './header.css'
import Web from './web/index'
import Mobile from './mobile/index'
import Menu from './images/Menu.png'

function Header() {
    const [isOpen,setIsOpen] = useState(false)
    return (
        <div className="header">
            {/* <div className="logo">Saurabh Apraj</div> */}
            <div className="menu">
                <div className="web-menu">
                    <Web />
                </div>
                <div className="mobile-menu">
                    <div onClick = {()=>setIsOpen(!isOpen)}>
                        <img src={Menu} alt="Menu" width="20px" className="menu-icon"/>
                    </div>
                    {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen}/>}
                </div>
            </div>
        </div>
    )
}

export default Header
