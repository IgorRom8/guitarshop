import s from './Bin.module.css'
import { Outlet, NavLink } from "react-router-dom"
import logo from './images/logo.svg'
import korzina from './images/korzina.svg'

export let Bin = () => {
    return (
        <>
            <div>
                <div className={s.body}>
                    <NavLink to={'/'}><img className={s.logo} src={logo} alt="" /> </NavLink>
                    <h1>Signature Guitars</h1>
                    <NavLink to={'/Bin'}><img className={s.logo2} src={korzina} alt="" /></NavLink>
                </div>

                <div className={s.div_for_opisanie}>
                    <p className={s.opisanie}> This is an electric guitar store that has signature guitars of musicians</p>
                </div>

                <div className={s.bcskt}>
                    <p className={s.bog}>Basket of goods</p>
                </div>

                <Outlet />
            </div>



        </>
    )
}