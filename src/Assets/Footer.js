import style from "./Footer.module.css";
export default function Footer() {
  return (
    <footer>
      <div className={style.inner}>
        <div className={style.ref}>
          <h3>Reference</h3>
          <ul>
            <li>loviq</li>
            <li>dealim museum</li>
            <li>pinterest</li>
          </ul>
        </div>
        <div className={style.font}>
          <h3>font</h3>
          <ul>
            <li>Anthony</li>
            <li>PicNic</li>
            <li>NEXON Lv1 Gothic</li>
            <li>Steps - Mono</li>
            <li>Noto Sans KR</li>
          </ul>
        </div>
        <div>
          <h3>&copy;2024</h3>
        </div>
      </div>
    </footer>
  );
}
