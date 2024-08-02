import s from "./Profile.module.css";
const Profile = ({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={s.profile}>
      <div>
        <img className={s.img} src={image} alt="User avatar" />
        <p className={s.name}>{name}</p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.location}>{location}</p>
      </div>

      <ul className={s.list}>
        <li className={s.listItem}>
          <span className={s.listName}>Followers</span>
          <span className={s.listValue}>{followers}</span>
        </li>

        <li className={s.listItem}>
          <span className={s.listName}> Views</span>
          <span className={s.listValue}>{views}</span>
        </li>

        <li className={s.listItem}>
          <span className={s.listName}>Likes</span>
          <span className={s.listValue}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};
export default Profile;
