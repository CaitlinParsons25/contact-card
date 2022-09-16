// import modules
import "./form";
import "./submit";

// import css files
import "../css/index.css";

// import bootstrap
import { Tooltip, Toast, Popover } from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// import database
import { initDb, getDb, postDb } from "./database";

// import images
import Logo from '../images/logo.png';
import Bear from '../images/bear.png';
import Dog from '../images/dog.png';

window.addEventListener('load', function() {
    initDb();
    getDb();
    postDb("Lerantino", "lerantino@test.com", 8186601234, "Bear");
    getDb();
    document.getElementById('logo').src = Logo;
    document.getElementById('bearThumbnail').src = Bear;
    document.getElementById('dogThumbnail').src = Dog;
});