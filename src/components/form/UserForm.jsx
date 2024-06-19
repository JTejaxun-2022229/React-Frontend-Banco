import iconStore from "../../assets/img/iconStore.png"
import IconTransaction from "../../assets/img/IconTransaction.png"
import iconCredit from "../../assets/img/IconCredit.png"
import iconFavorite from "../../assets/img/iconFavorite.png"

/**Retorna el formulalio del las opciones de Usuario*/
/**Agregar opciones segun necesite */
export const UserSidebar = () => {
    return(
        <div className='button-sidebar-container'>
        <ul>
            <li><img src={iconStore} alt="iconStore" /><a>Store</a></li>
            <li><img src={iconCredit} alt="iconCredit" /><a>Credit</a></li>
            <li><img src={IconTransaction} alt="iconTransaction" /><a>Transaction</a></li>
            <li><img src={iconFavorite} alt="iconFavorite" /><a>Favorite</a></li>
        </ul>
    </div>
    )
}

export const UserSidebarRight = () =>{
    return(
        <div className='input-sidebar-container'>
            <ul >
                <input className="form-sidebar-button" type="button" value="Profile"/>
                <input className="form-sidebar-button" type="button" value="Setting"/>
                <input className="form-sidebar-button" type="button" value="History"/>
                <input className="form-sidebar-button" type="button" value="Help"/>
                
            </ul>
        </div>
    )
}