import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Home = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="container text-center text-light mt-5">
            <h1>DEBES IDENTIFICARTE Y AUTENTICARTE</h1>
			<img 
                src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNjF6cG9nMTN5eG93end4dHp0eWt3cG9xeXlwdGJvencwaGt6ZjV2aSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/whzQo9wK8OuoiDtAnz/giphy.gif" 
                alt="Animación de autenticación"
                className="img-fluid mb-4" 
                style={{ maxWidth: "500px" }} 
            />
            <p className="mt-5 mb-2">registrate aca abajo</p>
            
            

            <div>
                <Link to="/signup">
                    <button className="btn btn-primary mb-5">Sign Up</button>
                </Link>
            </div>
        </div>
    );
};