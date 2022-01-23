import React from "react";
function Header(){
    return(
    <div>
    <div className="container">
    <img className="profile" src={require('../images/profile.png')}  alt="profile" />
</div>
<div className="text">
    <p>Siddhi Bhanushali</p>
</div>
</div>)
}
export default Header;