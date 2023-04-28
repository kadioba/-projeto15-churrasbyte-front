import { Link } from "react-router-dom";
import { UserOptions, LoginOptions, UserIcon, UserContainerBoxed } from "./styled";
import { FaUserCircle } from "react-icons/fa"
import { useContext, useState } from "react";
import AuthContext from "../../contexts/AuthContext";


export default function UserContainer({setOpen}) {
    const {userImage, username, token} = useContext(AuthContext)
    
    return (
        <>
            {!token ?
                <UserContainerBoxed>
                    <UserIcon>
                        <FaUserCircle />
                    </UserIcon>

                    <LoginOptions logged={token} >
                        <h1>Faça <Link to={"/login"} onClick={()=> setOpen(false)}>LOGIN</Link> ou&nbsp;</h1>
                        <h1>crie seu <Link to={"/sign-up"} onClick={()=> setOpen(false)}> CADASTRO</Link></h1>
                    </LoginOptions>
                </UserContainerBoxed>

                :

                <UserContainerBoxed>
                    <UserIcon>
                        <img 
                            src={userImage ? userImage : "https://images.nightcafe.studio//assets/profile.png" }/>
                    </UserIcon>

                    <LoginOptions logged={token} >
                        <h1>Seja bem vindo, {username}</h1>
                        <UserOptions>
                            <Link to={"/sign-up"} onClick={()=> setOpen(false)}> MINHA CONTA</Link>
                            <Link to={"/sign-up"} onClick={()=> setOpen(false)}> SAIR</Link>
                        </UserOptions>
                    </LoginOptions>
                </UserContainerBoxed>
            }
        </>
    )
}