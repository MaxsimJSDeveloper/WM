import Contacts from "../Contacts/Contacts";
import Services from "../Services/Services";
import css from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={css.container}>
      <img
        style={{ marginBottom: 8 }}
        width={300}
        height={600}
        src="../../../img/profile.jpg"
      ></img>
      <p style={{ marginBottom: 5, color: "#6c9247" }}>@dr_iryna_ivanivna</p>
      <Contacts />
      <p
        style={{
          textTransform: "uppercase",
          color: "#6c9247",
          fontStyle: "italic",
          fontSize: 18,
          textAlign: "center",
          marginBottom: 12,
        }}
      >
        Лікар, який досконало знає страхи батьків та потреби немовлят
      </p>
      <Services />
    </div>
  );
};

export default Profile;
