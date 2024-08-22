import { Link } from "react-router-dom";
import { SchoolWorksInfo } from "../Assets/data";

import style from "./SchoolWorks.module.css";

export default function SchoolWorks() {
  return (
    <section className={style.school}>
      <div className={style.inner}>
        <div className={style.headArea}>
          <h3>School Works</h3>
        </div>
        <ul className={style.list}>
          {SchoolWorksInfo.map((b, index) => {
            return (
              <li key={index}>
                <div className={style.container}>
                  <div
                    className={style.img}
                    style={{ backgroundImage: `url(${b.src})` }}
                  >
                    {b.alt}
                  </div>
                  <div className={style.hoverArea}>
                    <span className={style.title}>{b.title}</span>
                    <Link to={b.link}>더보기</Link>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
