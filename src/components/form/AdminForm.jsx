import iconCredit from "../../assets/img/IconCredit.png"
import iconTransaction from "../../assets/img/IconTransaction.png"
import iconUserList from "../../assets/img/IconUSerList.png"
/**Retorna el Formaulario de Administrador que se mostrara en el sideabr izquierdo 
    Agregar opciones segun necesite 
    *Seguir la estructura
*/

export const AdminSidebar = () => {
    return (
        <div className='button-sidebar-container'>
            <ul >
                <li><img src={iconCredit} alt="iconCredit" /><a>Credit</a></li>
                <li><img src={iconTransaction} alt="iconTransfer" /><a>Transaction</a></li>
                <li><img src={iconUserList} alt="iconUserList" /><a>Users</a></li>
            </ul>
        </div>
    )
}

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