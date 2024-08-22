import style from "./Branding.module.scss";
import { Link } from "react-router-dom";
import { BrandingInfo } from "../Assets/data";

export default function Branding() {
  return (
    <section className={style.branding}>
      <div className={style.inner}>
        <div className={style.headArea}>
          <h3>branding</h3>
        </div>
        <ul className={style.list}>
          {BrandingInfo.map((b, index) => {
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
