import css from "./Services.module.css";
import Title from "../../shared/Title/Title";
import FirstVariant from "./FirstVariant/FirstVariant";
import SecondVariant from "./SecondVariant/SecondVariant";

const Services = () => {
  return (
    <section className={css.container} id="serv">
      <Title>Послуги</Title>
      <FirstVariant>
        Якісно підготую тебе до пологів і батьківства ‌(он-лайн курс з 11 тем).
        ПЕРША ЗУСТРІЧ БЕЗОПЛАТНА
      </FirstVariant>

      <SecondVariant
        firstCard="Навчу годувати та доглядати твою дитину безпечно."
        secondCard="Надам вчасні рекомендації щодо прикорму з 6 місяців"
      />

      <FirstVariant>
        Проконсультую після пологів: онлайн - зі всього світу та в Харкові
      </FirstVariant>

      <SecondVariant
        firstCard="Розробка індивідуального графіку вакцинації"
        secondCard="Надам супровід після консультації (за бажанням)"
      />

      <FirstVariant>
        Щомісячно огляну і надам консультацію щодо здоров’я твого малюка
      </FirstVariant>
    </section>
  );
};

export default Services;
