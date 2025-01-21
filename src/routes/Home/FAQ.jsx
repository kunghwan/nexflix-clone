import { useState, useEffect } from "react";
import styles from "./faq.css";
import { faqs } from "../../assets/fakebase";
import { Link } from "react-router-dom";
import homestyle from "./home.css";

const FAQ = () => {
  const initialState = Array.from({ length: faqs.length }, () => {
    return false;
  });

  const [booleans, setBooleans] = useState(initialState);

  return (
    <div className={homestyle.container.div}>
      <p className={homestyle.container.p}>자주 묻는 질문</p>
      <ul className={homestyle.container.ul}>
        {faqs.map((faq, index) => {
          return (
            <FAQItem
              key={faq.q}
              {...faq}
              state={booleans[index]}
              onClick={() => {
                setBooleans((prev) => {
                  let copy = [...prev];
                  const foundIndex = copy.findIndex((item) => {
                    if (item === true) {
                      return item;
                    } // 너 참이면 내보내기
                  });
                  if (foundIndex >= 0 && foundIndex !== index) {
                    // 0이
                    copy[foundIndex] = false;
                  }

                  copy[index] = !copy[index];
                  return copy;
                });
              }}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default FAQ;

const FAQItem = ({ q, a, path, pathText, state, onClick }) => {
  return (
    <li>
      <button className={styles.button} onClick={onClick}>
        <p className={styles.q}>{q}</p>
        <span className={styles.icon}>++</span>
      </button>

      <div className={styles.div({ state })}>
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

// 저장
