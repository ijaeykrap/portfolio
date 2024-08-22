import { Link } from "react-router-dom";
import { WebDesignInfo } from "../Assets/data";

import style from "./WebDesign.module.css";

export default function WebDesign() {
  return (
    <section className={style.web}>
      <div className={style.inner}>
        <div className={style.headArea}>
          <h3>web design</h3>
        </div>
        <ul className={style.list}>
          {WebDesignInfo.map((b, index) => {
            return (
              <li key={index}>
                <Link to={b.link}>
                  <div
                    className={style.img}
                    style={{ backgroundImage: `url(${b.src})` }}
                  >
                    {b.alt}
                  </div>
                  <div className={style.titleArea}>
                    <span>{b.title}</span>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
