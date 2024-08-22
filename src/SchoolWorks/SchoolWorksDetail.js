import { useParams } from "react-router-dom";
import { SchoolWorksInfo } from "../Assets/data";
import { Link } from "react-router-dom";

import style from "./SchoolWorksDetail.module.css";

export default function SchoolWorksDetail() {
  const params = useParams();
  let id = params.schoolId;
  const index = SchoolWorksInfo.findIndex((i) => i.link === id);
  const arr = SchoolWorksInfo[index];
  return (
    <section className={style.detail}>
      <div className={style.container}>
        <div className={style.left}>
          {arr.img.map((a, index) => {
            return (
              <div
                key={index}
                className={style.img}
                style={{
                  backgroundImage: `url(${a.src})`,
                  height: `${a.height}px`,
                }}
              >
                {a.alt}
              </div>
            );
          })}
        </div>

        <div className={style.right}>
          <div className={style.text}>
            <h4>{arr.title}</h4>
            <p>{arr.p}</p>
          </div>
          <Link to="/school-works">목록으로</Link>
        </div>
      </div>
    </section>
  );
}
