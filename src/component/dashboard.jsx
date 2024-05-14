import { MdDashboard } from "react-icons/md";
import { LiaTableSolid } from "react-icons/lia";
import { RiBillLine } from "react-icons/ri";
import { RiFileChartLine } from "react-icons/ri";
import { IoIosNotifications } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { IoIosLogIn } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";
import "../css/style.css";
import Header from "./header.jsx";
import Cards from "./cards.jsx";

function Dashboard() {
  return (
    <div className="mainpage">
      <section className="sidebar">
        <p>Material Dashboard 2</p>
        <hr />
        <div>
          <ul>
            <li>
              <MdDashboard size={16} /> <span>Dashboard</span>
            </li>
            <li>
              <LiaTableSolid size={16} />
              <span>Tables</span>
            </li>
            <li>
              {" "}
              <RiBillLine size={16} />
              <span>Billing</span>
            </li>
            <li>
              <RiFileChartLine size={16} />
              <span>RTL</span>
            </li>
            <li>
              <IoIosNotifications size={16} />
              <span>Notifications</span>
            </li>
            <li>
              <CgProfile size={16} />
              <span>Profile</span>
            </li>
            <li>
              <IoIosLogIn size={16} />
              <span>Sign In</span>
            </li>
            <li>
              <IoIosLogOut size={16} />
              <span>SignUp</span>
            </li>
          </ul>
        </div>
      </section>
      <section>
        <header className="hdr">
          <Header />
        </header>
        <Cards />
      </section>
    </div>
  );
}

export default Dashboard;
