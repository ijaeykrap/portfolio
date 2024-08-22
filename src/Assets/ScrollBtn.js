import style from "./ScrollBtn.module.css";
export default function ScrollBtn() {
  const toTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const toBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };
  return (
    <>
      <button onClick={toTop} className={style.top}>
        <div></div>
      </button>
      <button onClick={toBottom} className={style.bottom}>
        <div></div>
      </button>
    </>
  );
}
