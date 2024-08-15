import { Link, NavLink, replace, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context/AuthContext';
import { useContext } from 'react';


export const Navbar = () => {

    const navigate = useNavigate()
    const {user, logout} = useContext(AuthContext) 

    const Logout = () => {

        logout()


        navigate('/login', { 
            replace: true 
        })
    }





    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-3 mb-4">
            
            <Link 
                className="navbar-brand text-info" 
                to="/"
            >
                HeroesSearch
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={({isActive})=> `nav-link ${isActive? 'active': ''}`} 
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className={({isActive})=> `nav-link ${isActive? 'active': ''}`} 
                        to="/dc"
                    >
                        DC
                    </NavLink>
                    
                    <NavLink 
                        className={({isActive})=> `nav-link ${isActive? 'active': ''}`} 
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className='nav-item nav-link text-warning'>
                        {user?.name}
                    </span>

                    <button className='nav-item nav-link btn'
                    onClick={Logout}>
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}