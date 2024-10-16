import { Outlet } from "react-router-dom"
import Headnavi from "../../components/Headnavi"
import Sidenavi from "../../components/Sidenavi";
import index from "../../style/indexpage.module.scss"
export default function Indexpage(){
    return (
        <div>
            <Headnavi></Headnavi>   
            <div className={index.divide}>
            <Sidenavi></Sidenavi>
            <Outlet/>
            </div>     
        </div>
    )
}