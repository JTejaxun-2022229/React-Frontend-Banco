import { NavLink } from 'react-router-dom';
import IconUSerList from "../../assets/img/IconUSerList.png"
import IconCredit from "../../assets/img/IconCredit.png"
import IconNewAdmin from "../../assets/img/iconNewAdmin.png"
import IconProducts from "../../assets/img/IconProducts.png"

export const AdminSidebar = () => {
    return (
        <div className='button-sidebar-container'>
            <ul>
                <li>
                    <img src={IconUSerList} alt="iconClients" />
                    <NavLink to="/dashboard/clients">Clients</NavLink>
                </li>
                <li>
                    <img src={IconCredit} alt="iconCreateClient" />
                    <NavLink to="/dashboard/create-client">Create Client</NavLink>
                </li>
                <li>
                    <img src={IconNewAdmin} alt="iconCreateAdmin" />
                    <NavLink to="/dashboard/create-admin">Create Admin</NavLink>
                </li>
                <li>
                    <img src={IconProducts} alt="iconProductList" />
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