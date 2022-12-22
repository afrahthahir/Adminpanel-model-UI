import SmallCardList from "./SmallCardList";
import BigCardList from "./BigCardList";
export default function CardList() {
  return (
    <div className="CardList">
      <SmallCardList />
      <BigCardList />
      <SmallCardList />
    </div>
  );
}
