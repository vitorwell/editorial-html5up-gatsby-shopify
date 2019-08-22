import React from "react"

import Menu from "../menu"
import Contact from "../contact"
import Latest from "../latest"
import Footer from "../footer"
//import Input from "../search/input"

const Sidebar = (props) => {

    return (
        <div id="sidebar">
            <div className="inner">
                {/* Search */}
                <section id="search" className="Search Alt">
                    {/*<Search collapse indices={searchIndices} />*/}
                    <form method="post" action="">
                        <input type="text" name="query" id="query" placeholder="Search"/>
                    </form>
                </section>

                {/* Menu */}
                <Menu siteMenu={props.siteMenu}/>

                {/* Section */}
                <Latest/>

                {/* Section */}
                <Contact/>

                {/* Footer */}
                <Footer/>
            </div>
        </div>

    )

}

export default Sidebar