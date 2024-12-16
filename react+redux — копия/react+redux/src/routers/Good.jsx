
import s from './Good.module.css'
import { Outlet, NavLink } from "react-router-dom"
import logo from './images/logo.svg'
import korzina from './images/korzina.svg'
import dfh from './images/dfh.svg'



export let Good = () => {
    return (
        <>
            <div className={s.goods_body}>
                <div className={s.body}>
                    <NavLink to={'/'}><img className={s.logo} src={logo} alt="" /> </NavLink>
                    <h1>Signature Guitars</h1>
                    <NavLink to={'/Bin'}><img className={s.logo2} src={korzina} alt="" /></NavLink>
                </div>

                <div className={s.name_goods}>
                    <p className={s.name}>Dean ml</p>
                </div>

                <dir className={s.ots}>
                    <img className={s.img_good} src={dfh} alt="" />
                </dir>

                <div className={s.opisanie}>
                    <div className={s.white_backplayte}>
                        <p className={s.txt_good}>Specs</p>
                        <p className={s.txt_good1}>Orientation Right-hand</p>
                        <p className={s.txt_good1}>Number of Strings: 6 </p>
                        <p className={s.txt_good1}>Neck ConstructionBolt-On with Graphite Reinforcement</p>
                        <p className={s.txt_good1}>Scale Length: 25.5" (64.77 cm) </p>
                        <p className={s.txt_good1}>Tremolo ArmFloyd Rose® 1000 Series Locking </p>
                        <p className={s.txt_good1}>Bridge PickupDirect DMT Humbucking </p>
                        <p className={s.txt_good2}>Price: $1,749.99 </p>
                        <div className={s.ebanaya_knopka}>
                            <button className={s.btn_order}>Order</button>
                        </div>

                    </div>
                </div>



                <Outlet />
            </div>
        </>
    )
}