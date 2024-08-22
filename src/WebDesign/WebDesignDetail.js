import style from "./WebDesginDetail.module.css";
import { WebDesignInfo } from "../Assets/data";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function WebDesignDetail() {
  const params = useParams();
  const id = params.webId;
  const index = WebDesignInfo.findIndex((i) => i.link === id);
  const arr = WebDesignInfo[index];

  console.log(arr.move);

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
          <div className={style.titleArea}>
            <h4>{arr.title}</h4>
            {arr.move && (
              <Link to={arr.move} className={style.link} target="_blank">
                move to site
              </Link>
            )}
          </div>
          <p>{arr.p}</p>
          <div className={style.tool}>
            {arr.tool.map((t) => {
              return (
                <span style={{ backgroundColor: `${t.color}` }} key={t.name}>
                  {t.name}
                </span>
              );
            })}
          </div>
          <div className={style.listBtn}>
            <Link to="/web-design" className={style.list}>
              목록으로
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
