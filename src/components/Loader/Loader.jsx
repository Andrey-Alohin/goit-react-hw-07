import { HashLoader } from "react-spinners";
import css from "./Loader.module.css";

export default function Loader({ isLoading }) {
  return (
    <div className={css.loaderContainer}>
      <HashLoader loading={isLoading} color="#00d1ff" size={45} />
    </div>
  );
}
