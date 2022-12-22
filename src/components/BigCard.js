import { FaTwitter, FaBriefcase } from "react-icons/fa";
export default function BigCard() {
  return (
    <div className="BigCard">
      <FaTwitter style={{ color: "blue", fontSize: "40px" }} />
      <div className="items" style={{ textAlign: "center" }}>
        <h2>9.25k Subscribers</h2>
        <p>Your main list is growing!</p>
        <button>
          <FaBriefcase style={{ paddingRight: "10px" }} />
          Manage List
        </button>
      </div>
    </div>
  );
}
