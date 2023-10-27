import '../App.css'

export default function Arrow({
  children,
  disabled,
  onClick
}) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      style={{
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        right: "1%",
        opacity: disabled ? "0" : "1",
        border: "black",
        userSelect: "none",
        color: "white",
        fontSize: "5vw",
        backgroundColor: "black"
      }}
    >
      {children}
    </button>
  );
}

