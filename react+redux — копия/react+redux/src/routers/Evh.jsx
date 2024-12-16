import s from './Evh.module.css'
import { Outlet, NavLink } from "react-router-dom"
import logo from './images/logo.svg'
import dean from './images/dean.svg'
import evh from './images/evh.svg'
import vanhalen  from './images/vanhalen.svg'
import dfh from './images/dfh.svg'
import kramer from './images/kramer.svg'
import korzina from './images/korzina.svg'


export let Evh = () => {
    return (
        <>
            <div className={s.body_dean}>
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
                    <NavLink to={'/Dean'}><img className={s.logo_brend} src={dean} alt="" /></NavLink>
                    <NavLink to={'/Evh'}><img className={s.logo_brend} src={evh} alt="" /></NavLink>

                </div>

                <div className={s.logo_dean_in_dean}>
                    <img src={evh} alt="" />

                </div>

                <div className={s.Deanguitars}>
                    <p className={s.Deanguitars_txt}>eVh guitars</p>
                    <p className={s.Deanguitars_txt}>We have a lot of eVh guitars</p>
                </div>

                <div className={s.Dime}>
                    <img src={vanhalen} alt="" />
                </div>

                <div className={s.Deanguitars}>
                    <p className={s.Deanguitars_txt}>Guitars in stock</p>
                </div>

                <div className={s.back_back}>
                    <div className={s.goods}>
                        <dir className={s.back_of_goods}>
                            <NavLink to={'/Kramerg'}> <img className={s.img_of_goods} src={kramer} alt="" /></NavLink>
                            <NavLink to={'/Kramerg'}> <p className={s.Name_goods}>Kramer 515</p></NavLink>
                        </dir>
                    </div>

                    <div className={s.goods}>
                        <dir className={s.back_of_goods}>
                            <NavLink to={'/Kramerg'}> <img className={s.img_of_goods} src={kramer} alt="" /></NavLink>
                            <NavLink to={'/Kramerg'}> <p className={s.Name_goods}>Kramer 515</p></NavLink>
                        </dir>
                    </div>
                </div>

                <div className={s.back_back}>
                    <div className={s.goods}>
                        <dir className={s.back_of_goods}>
                            <NavLink to={'/Kramerg'}> <img className={s.img_of_goods} src={kramer} alt="" /></NavLink>
                            <NavLink to={'/Kramerg'}> <p className={s.Name_goods}>Kramer 515</p></NavLink>
                        </dir>
                    </div>

                    <div className={s.goods}>
                        <dir className={s.back_of_goods}>
                            <NavLink to={'/Kramerg'}> <img className={s.img_of_goods} src={kramer} alt="" /></NavLink>
                            <NavLink to={'/Kramerg'}> <p className={s.Name_goods}>Kramer 515</p></NavLink>
                        </dir>
                    </div>
                    
                </div>

                <Outlet />

            </div >
        </>
    )

}