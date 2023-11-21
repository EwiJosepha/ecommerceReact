import { Link } from "react-router-dom";
import "./nav.css";
function Nav() {
  // const itemcount = (JSON.parse(localStorage.getItem("addedcards")) || []).length

  return (
    <>
      <div className="container1">
        <div class="title">
          <a href="/index.html" id="atag">
            <h1 id="fashionhub">
              <i>FashionHub</i>
            </h1>
          </a>
          <div class="navlinks">
            <span>
              <select id="category"></select>
            </span>
            <span id="brand">Brand</span>
            <Link to="/" id="contactdisplay">
              <span class="contactt">Contact</span>
            </Link>
            <span id="faq">FAQ's</span>
          </div>
        </div>

        <div className="basket">
          <button id="basketimg">
            <span id="items-selected">${itemcount}</span>
            <a href="http:${base_url}viewcards/cards.html">
              {" "}
              <i className="fa-solid fa-bag-shopping" id="navto-nextp"></i>
            </a>
          </button>
          <button id="bell">
            <span id="bells"></span>
            <i className="fa-regular fa-bell"></i>
          </button>
          <div className="title-image">
            <img src="https://media.istockphoto.com/id/1253920275/fr/photo/femme-avec-le-b%C3%A9b%C3%A9-nouveau-n%C3%A9.webp?b=1&s=170667a&w=0&k=20&c=zIRObcgZ_XtXXZqWlRk_VptXdvd00YiX_vHEH7lwkqg=" />
            <div className="name">
              <span id="gmorning">Good morning</span>
              <span id="johnson">Scarlet Johnson</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;