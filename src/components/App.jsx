import React from "react";
import Footer from "./Footer.jsx";
import Card from "./Card.jsx";
import Header from "./Header.jsx"

function App(){
    return (
    <div>
    <Header />
    <div className="box">
    <div className="links">
    <Card name="Github" icon="github" url="https://github.com/siddhi-244"/>
    <Card name="LinkedIn" icon="linkedin" url="https://www.linkedin.com/in/siddhi-bhanushali-4178591b2/"/>
    <Card name="Blogs" icon="blogger" url="https://pirogrammer1.blogspot.com/"/>
    <Card name="Youtube" icon="youtube" url="https://www.youtube.com/channel/UCx552qBEz4esUv5YWqh7RmQ"/>
    <Card name="Instagram" icon="instagram" url="https://www.instagram.com/siddhi.tech_/?utm_medium=copy_link"/>
    <Card name="Twitter" icon="twitter" url="https://twitter.com/SiddhiB6"/>
    <Card name="DEV to" icon="laptop" url="https://dev.to/siddhi244"/>

    </div>
    </div>
    <Footer />
	</div>
   
    )
    
    
}

export default App;