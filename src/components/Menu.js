import { FaHome, FaAngleLeft } from "react-icons/fa";

export default function Menu() {
  return (
    <div className="Menu">
      <ul>
        <li>
          <FaHome />
          DashBoard
          <FaAngleLeft />
        </li>

        <li>
          <FaHome />
          Page Kits
          <FaAngleLeft />
        </li>
        <p style={{ fontSize: "12.5px" }}>USER INTERFACE</p>
        <li>
          <FaHome />
          Blocks
          <FaAngleLeft />
        </li>

        <li>
          <FaHome />
          Widgets
          <FaAngleLeft />
        </li>

        <li>
          <FaHome />
          Elements
          <FaAngleLeft />
        </li>

        <li>
          <FaHome />
          Forms
          <FaAngleLeft />
        </li>

        <p style={{ fontSize: "12.5px" }}>BUILD</p>
        <li>
          <FaHome />
          Layout
          <FaAngleLeft />
        </li>
        <li>
          <FaHome />
          Components
          <FaAngleLeft />
        </li>
        <li>
          <FaHome />
          Main Menu
          <FaAngleLeft />
        </li>
      </ul>
    </div>
  );
}
