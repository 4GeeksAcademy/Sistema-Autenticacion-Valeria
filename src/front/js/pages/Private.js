import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Private = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.private();
	}, [])

	if (store.token) {
		return (
			<div className="container text-center text-light mt-5">
				<h1>Welcome {store.loggedUser}</h1>
				<p className="my-5">FUNCIONÓ!!!! fuiste autenticado</p>
                <img 
                    src="https://media.giphy.com/media/3oz8xAFtqoOUUrsh7W/giphy.gif?cid=790b7611u9vxetd5k5wwepgizohhaz4wk79mgpvtzadr3sqq&ep=v1_gifs_search&rid=giphy.gif&ct=g" 
                    alt="Animación de CONGRATS"
                    className="img-fluid mb-4" 
                    style={{ maxWidth: "300px" }} 
                />
			</div>
		);
	} else {
		return (
			<div className="container text-center text-light mt-5">
				<h1>Acceso restringido</h1>
				<p className="my-5">Ocurrió un problema :(</p>
                    <img 
                    src="https://media.giphy.com/media/26gJzc8gAkTImtSLe/giphy.gif?cid=ecf05e47ulo70vstwx8o0tdz0a8q990rj8u46ytpx3kvx67d&ep=v1_gifs_search&rid=giphy.gif&ct=g" 
                    alt="Animación de OOPS"
                    className="img-fluid mb-4" 
                    style={{ maxWidth: "300px" }} 
                />
			</div>
		);
	}
};