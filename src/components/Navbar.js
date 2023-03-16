import './Navbar.css'

export const Navbar = () => {
    return (
        <header className="header">
            <div className="header_container">
                <h1 className="header_logo">Padel Shop</h1>

                <nav className="navbar">
                    <p className="navbar_link">Palas</p>
                    <p className="navbar_link">Accesorios</p>
                    <p className="navbar_link">Nosotros</p>
                </nav>
            </div>

        </header>
    )
}