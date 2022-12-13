import ReactDOM from "react-dom";
import './style.css';
import App from "./app.js";

 

const root = ReactDOM.createRoot(document.getElementById('root')); // create root hydrate hydrating the DOM
root.render(<App/>); // known as component  render means fetching some component