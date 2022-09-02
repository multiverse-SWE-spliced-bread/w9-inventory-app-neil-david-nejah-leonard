import React from "react";
import './Footer.css'

function Footer ({view, setView}) {
return (
    (view==0 ? 
<footer>
<p>Copyright &copy; All Rights Reserved | Terms of Service | Privacy</p>
</footer> : "" )
)
}

export default Footer