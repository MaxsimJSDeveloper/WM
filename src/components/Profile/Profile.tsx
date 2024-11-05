import Contacts from "../Contacts/Contacts";
import Links from "../Links/Links";
import Services from "../Services/Services";
import css from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={css.container}>
      <img
        className={css.profileImage}
        src="../../img/profile.png"
        alt="Профильное изображение"
      />
      <p className={css.username}>@dr_iryna_holovko</p>
      <Contacts />
      <p className={css.description}>
        Лікар, який досконало знає страхи батьків та потреби немовлят
      </p>
      <Services />
      <Links />
    </div>
  );
};

export default Profile;
