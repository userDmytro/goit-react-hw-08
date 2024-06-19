import style from "./HomePage.module.css";

export default function Home() {
  return (
    <div className={style.container}>
      <h1 className={style.title}>
        <span role="img" aria-label="Greeting icon">📒</span>
       Contact Book
      </h1>
    </div>
  );
}
