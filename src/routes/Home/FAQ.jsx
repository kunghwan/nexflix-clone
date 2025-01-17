import styles from "./faq.css";
import { faqs } from "../../assets/fakebase";
import { Link } from "react-router-dom";
import homestyle from "./home.css";

const FAQ = () => {
  return (
    <div className={homestyle.container.div}>
      <p className={homestyle.container.p}>자주 묻는 질문</p>
      <ul className={homestyle.container.ul}>
        {faqs.map((faq) => {
          return <FAQItem key={faq.q} {...faq} />;
        })}
      </ul>
    </div>
  );
};

export default FAQ;

const FAQItem = ({ q, a, path, pathText }) => {
  return (
    <li>
      <button className={styles.button}>
        <p className={styles.q}>{q}</p>
        <span className={styles.icon}>++</span>
      </button>
      <div className={styles.div}>
        <p className={styles.p}>{a}</p>
        {path && pathText && (
          <Link className={styles.link} to={path}>
            {pathText}
          </Link>
        )}
      </div>
    </li>
  );
};
