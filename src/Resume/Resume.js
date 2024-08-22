import { ResumeInfo } from "../Assets/data";
import style from "./Resume.module.css";
export default function Resume() {
  return (
    <section className={style.resume}>
      <div className={style.inner}>
        <div className={style.headArea}>
          <h3>Résumé</h3>
        </div>
        <div className={style.content}>
          {ResumeInfo.map((r, index) => {
            return (
              <div key={index} className={style.container}>
                <div className={style.title}>{r.title}</div>
                <div className={style.text}>
                  {index == 3
                    ? ResumeInfo[index].content.map((c) => {
                        return (
                          <span
                            style={{ backgroundColor: `${c.color}` }}
                            key={c.name}
                          >
                            {c.name}
                          </span>
                        );
                      })
                    : ResumeInfo[index].content.map((c, index) => {
                        return <span key={index}>{c}</span>;
                      })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
