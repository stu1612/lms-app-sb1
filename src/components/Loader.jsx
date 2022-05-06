// npm
import { RotatingLines } from "react-loader-spinner";

export default function Loader() {
  return (
    <div
      className="loader-container"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <RotatingLines width="150" visible={true} strokeColor="#fafafa" />
    </div>
  );
}
