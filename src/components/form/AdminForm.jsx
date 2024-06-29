import { NavLink } from 'react-router-dom';
import iconClients from "../../assets/img/ClientsIcon.png"
import iconCreateClient from "../../assets/img/CreateClient.png"
import iconCreateAdmin from "../../assets/img/CreateAdmin.png"
import iconProductList from "../../assets/img/Product.png"

export const AdminSidebar = () => {
    return (
        <div className='button-sidebar-container'>
            <ul>
                <li>
                    <img src={iconClients} alt="iconClients" />
                    <NavLink to="/dashboard/clients">Clients</NavLink>
                </li>
                <li>
                    <img src={iconCreateClient} alt="iconCreateClient" />
                    <NavLink to="/dashboard/create-client">Create Client</NavLink>
                </li>
                <li>
                    <img src={iconCreateAdmin} alt="iconCreateAdmin" />
                    <NavLink to="/dashboard/create-admin">Create Admin</NavLink>
                </li>
                <li>
                    <img src={iconProductList} alt="iconProductList" />
                    <NavLink to="/dashboard/products">Products</NavLink>
                </li>
            </ul>
        </div>
    );
};

export const AdminSidebarRight = () =>{
    return(
        <div className='input-sidebar-container'>
            <ul >
                <input className="form-sidebar-button" type="button" value="Profile"/>
                <input className="form-sidebar-button" type="button" value="Setting"/>
                <input className="form-sidebar-button" type="button" value="Help"/>
            </ul>
        </div>
    )
}