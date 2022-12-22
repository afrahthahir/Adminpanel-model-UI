import { FaHome } from "react-icons/fa";
export default function Card() {
  return (
    <div className="Card">
      <FaHome style={{ color: "grey", fontSize: "40px" }} />
      <div className="items">
        <h2>1500</h2>
        <p>SALES</p>
      </div>
    </div>
  );
}
