import { Outlet, NavLink, Router } from "react-router-dom"
import logo from './images/logo.svg'
import dean from './images/dean.svg'
import evh from './images/evh.svg'
import korzina from './images/korzina.svg'
import s from './Root.module.css'
import { Dean } from "./Dean"


export let Root = () => {
    return (
        <>
            <div className={s.body}>
                <NavLink to={'/'}><img className={s.logo} src={logo} alt="" /> </NavLink>
                <h1>Signature Guitars</h1>
                <NavLink to={'/Bin'}><img className={s.logo2} src={korzina} alt="" /></NavLink>
            </div>

            <div className={s.div_for_opisanie}>
                <p className={s.opisanie}> This is an electric guitar store that has signature guitars of musicians</p>
            </div>

            <div className={s.div_for_brends}>
                <p className={s.brends}>Brends</p>
            </div>

            <div className={s.links}>
                <NavLink to={'Dean'}><img className={s.logo_brend} src={dean} alt="" /></NavLink>
                <NavLink to={'Evh'}><img className={s.logo_brend} src={evh} alt="" /></NavLink>
                <Outlet />
            </div>
            
        </>

    )

}