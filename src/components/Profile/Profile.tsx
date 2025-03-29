import Contacts from "../Contacts/Contacts";
import Links from "../Links/Links";
import Services from "../Services/Services";
import profile from "../../img/profile.png";

const Profile = () => {
  return (
    <main className="flex flex-col items-center justify-center">
      <h1 className="text-center font-secondFamily font-bold text-[42px] leading-tight text-[#009688]">
        Ментор <br />
        твого материнства
      </h1>
      <img
        style={{ marginBottom: 8 }}
        width={300}
        height={600}
        className="mb-2"
        src={profile}
        alt="Фото лікаря Ірини Головко"
      />
      <p className="text-card-color mb-1">@dr_iryna_holovko</p>
      <Contacts />
      <Services />
      <Links />
    </main>
  );
};

export default Profile;
