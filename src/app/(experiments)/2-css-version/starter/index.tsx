import styles from "./style.module.css";

export default function Page() {
 
  const text = [
    "CSS".split(""),
    "version".split(""),
  ]

  return (
    <div className="bg-blue-300 text-black">
      <div className="flex h-screen items-end justify-left overflow-hidden">
        <h1 className="title font-black text-[min(20rem,30vw)] leading-none pb-[0.1em] text-left">
          {text[0].map((char, i) => {
            return <span key={i} className={styles.letter}
            style={
              {
                "--index": i,
              } as React.CSSProperties
            }
            >
              {char}
            </span>
          })}
          <br />
          {text[1].map((char, i) => {
            return <span key={i} className={styles.letter}
            style={
              {
                "--index": i,
              } as React.CSSProperties
            }
            >
              {char}
            </span>
          })}
        </h1>
      </div>
    </div>
  );
}
