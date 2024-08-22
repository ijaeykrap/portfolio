import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";

import style from "./Main.module.css";

function Main() {
  useEffect(() => {
    if (!ref) return;

    function callback(es) {
      es.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add(style.animate);
        }
      });
    }
    const options = { root: null, rootmargin: "0px", threshold: 0.5 };

    const io = new IntersectionObserver(callback, options);

    ref.current.forEach((el) => {
      if (el) io.observe(el);
    });
    return () => {
      io.disconnect();
    };
  }, []);
  const ref = useRef([]);
  return (
    <section className={style.home}>
      <div className={style.inner}>
        <div className={style.left} ref={(el) => (ref.current[0] = el)}></div>
        <div className={style.right}>
          <div className={style.web} ref={(el) => (ref.current[1] = el)}>
            <Link to="web-design">
              <h3>01</h3>
              <h3>Web design</h3>
            </Link>
          </div>
          <div className={style.branding} ref={(el) => (ref.current[2] = el)}>
            <Link to="branding">
              <h3>02</h3>
              <h3>Branding</h3>
            </Link>
          </div>
          <div className={style.school} ref={(el) => (ref.current[3] = el)}>
            <Link to="school-works">
              <h3>03</h3>
              <h3>School works</h3>
            </Link>
          </div>
          <div className={style.resume} ref={(el) => (ref.current[4] = el)}>
            <Link to="resume">
              <h3>04</h3>
              <h3>Résumé</h3>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Main;
