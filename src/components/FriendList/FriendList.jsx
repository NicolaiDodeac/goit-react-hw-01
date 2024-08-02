import FriendListItem from "./FriendListItem";
import s from "./FriendList.module.css";

const FriendList = ({ friends }) => {
  return (
    <ul className={s.list}>
      {friends.map((item) => {
        return (
          <li className={s.card} key={item.id}>
            <FriendListItem
              avatar={item.avatar}
              name={item.name}
              isOnline={item.isOnline}
            />
          </li>
        );
      })}
    </ul>
  );
};
export default FriendList;
