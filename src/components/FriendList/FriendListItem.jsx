import s from "./FriendList.module.css";
const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div>
      <img className={s.avatar} src={avatar} alt="Avatar" width="48" />
      <p className={s.name}>{name}</p>
      {isOnline ? (
        <p className={s.online}>Online</p>
      ) : (
        <p className={s.offline}>Offline</p>
      )}
    </div>
  );
};
export default FriendListItem;
