import { Link } from "react-router-dom";

export default  function Tags(props){
    console.log(props.textcolor)
    return(<>
        <li className="nav-item active">
            <Link className={'nav-link ' + props.textcolor} to="/">{props.tag1} <span className="sr-only"></span></Link>
        </li>
        <li className="nav-item active">
            <Link className="nav-link" to="/about">{props.tag2} <span className="sr-only"></span></Link>
        </li>
        </>
    );
}

Tags.defaultProps = {
    tag1 : "Home",
    tag2 : "About us",
    textcolor : "text-dark"
}