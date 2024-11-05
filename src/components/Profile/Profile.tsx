import Contacts from "../Contacts/Contacts";
import Links from "../Links/Links";
import Services from "../Services/Services";
import profile from "../../img/profile.png";

import css from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={css.container}>
      <img
        style={{ marginBottom: 8 }}
        width={300}
        height={600}
        className={css.profileImage}
        src={profile}
        alt="Фото лікаря Ірини Головко"
      />
      <p className={css.username}>@dr_iryna_holovko</p>
      <h1 className={css.description}>
        Лікар, який досконало знає страхи батьків та потреби немовлят
      </h1>
      <Contacts />
      <Services />
      <Links />
    </div>
  );
};

export default Profile;
