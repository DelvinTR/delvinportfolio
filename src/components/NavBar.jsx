import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
    const location = useLocation();

    return (
        <header className="sticky top-0 z-50 bg-black shadow-md border-b border-gray-800">
            <div className="flex justify-between items-center p-4">
                <span className="text-2xl font-bold">Jacob Portfolio</span>
                <ul className="menu menu-horizontal gap-4">
                    <li>
                        <Link to="/" className={location.pathname === "/" ? "active" : ""}>Accueil</Link>
                    </li>
                    <li>
                        <Link to="/experiences" className={location.pathname === "/experiences" ? "active" : ""}>Expériences</Link>
                    </li>
                    <li>
                        <Link to="/projets" className={location.pathname === "/projets" ? "active" : ""}>Projets</Link>
                    </li>
                </ul>
            </div>
        </header>
    );
}
