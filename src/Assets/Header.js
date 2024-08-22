import style from "./Header.module.scss";
import { NavLink } from "react-router-dom";
import { Menu } from "./data";
export default function Header() {
  return (
    <header>
      <div className={style.inner}>
        <ul>
          {Menu.map((m, index) => {
            return (
              <li key={index}>
                <NavLink
                  to={m.link}
                  className={({ isActive }) => (isActive ? style.active : null)}
                >
                  {m.title}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}
