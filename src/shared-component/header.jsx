import { Link } from "react-router-dom";



function Header() {
    return (
        <header>
            <div className="title bg-yellow h-28  flex gap-80 font-bold">
               
                <h1 className="mt-10 ml-16">Players</h1>
               <nav>
                <ul className=" flex gap-48 mt-10 ">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/services">Services</Link>
                    </li>
                    <li>
                        <Link to= "/contacts">contacts</Link>
                    </li>
                </ul>
            </nav>
           
            </div>
        
        </header>
        

    );
}

export default Header;