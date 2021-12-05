import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
function Menu(){

    return(

        <div><Link to='/login'>login</Link> | <Link to='/'>signup</Link> </div>
    )

}

export default Menu