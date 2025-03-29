import ContactsList from "../ContactsList/ContactsList";

const Contacts = () => {
  return (
    <div
      className="flex justify-center items-center gap-4 p-4 mb-4 bg-card rounded-lg shadow-xl w-[335px] h-[50px] transition-all duration-300 ease-in-out"
      aria-label="Контакти"
    >
      <h2 className="sr-only">Зв'язатися зі мною</h2>
      <ContactsList />
    </div>
  );
};

export default Contacts;
