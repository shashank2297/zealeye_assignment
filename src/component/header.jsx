import { FaHome } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { IoIosSettings } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import "../css/style.css";
import Cards from "./cards.jsx";

function Header() {
  return (
    <div>
      <section>
        <p>
          <FaHome /> / Dashboard
        </p>
      </section>
      <section className="searchbar">
        <input type="text" placeholder="Search Here" />
        <span>
          {" "}
          <CgProfile />
        </span>
        <span>
          <IoIosSettings />
        </span>
        <span>
          <IoIosNotifications size={16} />
        </span>
      </section>
    </div>
  );
}

export default Header;
