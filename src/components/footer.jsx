import React from "react"
import "./footer.css"
import ReactTimeAgo from 'react-time-ago'


function Footer(){
    return(
        <footer class="page-footer">
          <div class="footer-copyright">
            <div class="container">
            © 2021 Copyright Daniel Nadja Vesna Snezana          
            </div>
            <ReactTimeAgo date={new Date()} locale="en-US"/>
          </div>
        </footer>

    )
}
export default Footer