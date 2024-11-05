import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { useTrail, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
import css from "./Services.module.css";

const Services = () => {
  const services = [
    "Якісно підготую тебе до пологів і батьківства ‌(он-лайн курс з 11 тем). ПЕРША ЗУСТРІЧ БЕЗОПЛАТНА.",
    "Навчу годувати та доглядати твою дитину безпечно.",
    "Надам вчасні рекомендації щодо прикорму з 6 місяців.",
    "Заключу декларацію з свідомими людьми. Контакти нижче:",
    "Щомісячно огляну і надам консультацію щодо здоров’я твого малюка.",
    "Безпечно вакциную тебе і твого малюка згідно календаря щеплень.",
    "Консультую з питань профілактики хвороб.",
    "Надам якісну консультацію діткам та дорослим.",
  ];

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const trail = useTrail(services.length, {
    opacity: inView ? 1 : 0,
    x: inView ? 0 : 20,
    from: { opacity: 0, x: 20 },
    config: { duration: 200 },
    reset: inView,
  });

  return (
    <section className={css.container} id="serv">
      <h2 className={css.title}>Послуги</h2>
      <ul className={css.list} ref={ref}>
        {trail.map((props, index) => (
          <animated.li key={index} className={css.item} style={props}>
            {services[index]}
            {index === 3 && (
              <article className={css.contactInfo}>
                <p className={css.contact}>
                  <FaPhoneAlt className={css.icon} /> +38(099) 915 10 40
                </p>
                <p className={css.contact}>
                  <FaMapMarkerAlt className={css.icon} /> м.Харків, пр.Людвіга
                  Свободи, 31
                </p>
              </article>
            )}
          </animated.li>
        ))}
      </ul>
      <i className={css.motto}>Зростимо разом здорових малюків!</i>
    </section>
  );
};

export default Services;
