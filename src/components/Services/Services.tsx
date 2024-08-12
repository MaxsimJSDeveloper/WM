import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import css from "./Services.module.css";

const Services = () => {
  return (
    <div className={css.container} id="serv">
      <h2 style={{ textAlign: "center", marginBottom: 12 }}>Мої послуги</h2>
      <ul className={css.list}>
        <li className={css.item}>
          Якісно підготую тебе до пологів і батьківства ‌(он-лайн курс з 11 тем)
          ПЕРША ЗУСТРІЧ БЕЗОПЛАТНА
        </li>
        <li className={css.item}>
          Навчу годувати та доглядати твою дитину безпечно
        </li>
        <li className={css.item}>
          Надам вчасні рекомендації щодо прикорму з 6 місяців
        </li>
        <li className={css.item}>
          Заключу декларацію з свідомими людьми міста Харків та передмістя.
          Контакти нижче:
          <p style={{ marginTop: 6 }}>
            <FaPhoneAlt style={{ color: "#bccdac" }} /> +38(099) 915 10 40
          </p>
          <p>
            <FaMapMarkerAlt style={{ color: "#bccdac" }} /> м.Харків пр.Людвіга
            Свободи, 31
          </p>
        </li>
        <li className={css.item}>
          Щомісячно огляну і надам консультацію щодо здоров’я твого малюка
        </li>
        <li className={css.item}>
          Безпечно вакциную тебе і твого малюка згідно календаря щеплень
        </li>
        <li className={css.item}>Консультую з питань профілактики хвороб ‌</li>
        <li className={css.item}>
          Надам якісну консультацію діткам та дорослим
        </li>
      </ul>
      <i style={{ color: "#234800" }}>Зростимо разом здорових малюків!</i>
    </div>
  );
};

export default Services;
