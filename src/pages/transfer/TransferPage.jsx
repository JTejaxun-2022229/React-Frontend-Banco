import { useEffect, useState } from "react";
import { LoadingSpinner } from "../../components/LoadingSpinner";
import { useUserDetails } from "../../shared/hooks";
import { Navbar } from "../../components/navbar/Navbar";
import { Sidebar } from "../../components/navbar/Sidebar";

import "../adminPage/adminPage.css";


export const TransferPage = () => {
    const { isLogged } = useUserDetails();
    /*const [date, setDate] = useState('');*/

    useEffect(() => {
      
        /*fetch('/api/getDate')
            .then(response => response.json())
            .then(data => setDate(data.date));*/
        
        (isLogged);
  }, []);

  return (
    <div className="dashboard-container">
      <div className="Marco">
        <Navbar/>
        <Sidebar/>
      </div>
      <div className="transfer-form-container">
        <form action="" className="transfer-form">
          <h1>Transaction</h1>
          <div className="form-group">
            <label htmlFor="emisor">Emisor</label>
            <input type="text" id="emisor" name="emisor" />
          </div>
          <div className="form-group">
            <label htmlFor="receptor">Receptor</label>
            <input type="text" id="receptor" name="receptor" />
          </div>
          <div className="form-group">
            <label htmlFor="cantidad">Cantidad</label>
            <input type="number" id="cantidad" name="cantidad" />
          </div>
           {/* <div className="form-group">
            <p>Fecha de Envío: {fechaEnvio}</p>
          </div> */}
          <div className="form-group">
            <label htmlFor="descripcion">Descripción</label>
            <textarea id="descripcion" name="descripcion"></textarea>
          </div>
          <div className="form-group">
            <button type="submit" className="submit-btn">Enviar</button>
            <button type="button" className="revert-btn">Revertir</button>
          </div>
        </form>
      </div>  
    </div>
  );
};