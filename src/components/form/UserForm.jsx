
/**Retorna el formulalio del las opciones de Usuario*/
/**Agregar opciones segun necesite */
export const UserSidebar = () => {
    return(
        <div className='button-sidebar-container'>
        <ul>
            <li>Store</li>
            <li>Transaction</li>
            <li>Credit</li>
        </ul>
    </div>
    )
}

export const UserSidebarRight = () =>{
    return(
        <div className='input-sidebar-container'>
            <ul >
                <li><input className="form-sidebar-button" type="button" value="Profile"/></li>
                <li><input className="form-sidebar-button" type="button" value="Setting"/></li>
                <li><input className="form-sidebar-button" type="button" value="History"/></li>
                <li><input className="form-sidebar-button" type="button" value="Help"/></li>
                
            </ul>
        </div>
    )
}