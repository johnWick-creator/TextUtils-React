import Tags from "./Tags";
import {Link} from 'react-router-dom'



export default function Navbar(props){

    Navbar.defaultProps = {
        title : "set a title here",
        model : {
            navbar : 'dark',
            textcolor : 'text-light',
            title : 'DarkMode'
        }
    }

    return(
    <nav className={'navbar navbar-expand-lg navbar-'+ props.model.navbar +' light bg-'+ props.model.navbar}>
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <Tags textcolor={props.model.textcolor}/>
            </ul>
            <div className="custom-control custom-switch">
                <input type="checkbox" className="custom-control-input" id="customSwitch1"  onClick={props.main} />
                <label className={'custom-control-label mx-3 ' + props.model.textcolor} htmlFor="customSwitch1">Switch Mode</label>
            </div>
        </div>
    </nav>
    );
}






