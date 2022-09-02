import "./form"
import "./submit"
import "./database"

// Import CSS
import "../css/index.css"

// Import Bootstrap
import { Tooltip, Toast, Popover } from 'bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"

// images
import Logo from "../images/cageBunny.jpeg"
import Bear from "../images/bear.png"
import Dog from "../images/dog.png"
import { initDb } from "./database"

window.addEventListener('load', function() {
    initDb()
    document.getElementById('logo').src = Logo
    document.getElementById('bearThumbnail').src = Bear
    document.getElementById('dogThumbnail').src = Dog
})