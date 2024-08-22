import { useParams } from "react-router-dom";
import { BrandingInfo } from "../Assets/data";
import { Link } from "react-router-dom";

import style from "./BrandingDetail.module.css";
export default function BrandingDetail() {
  const params = useParams();
  let id = params.brId;
  const index = BrandingInfo.findIndex((i) => i.link === id);
  const arr = BrandingInfo[index];
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
            <div className={style.did}>
              {arr.did.map((a, index) => {
                return <span key={index}>{a}</span>;
              })}
            </div>
            <div className={style.tool}>
              {arr.tool.map((a, index) => {
                return (
                  <span key={index} style={{ backgroundColor: `${a.color}` }}>
                    {a.name}
                  </span>
                );
              })}
            </div>
            <Link to="/branding">목록으로</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
