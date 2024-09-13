import Infos from "../components/configp/Infos";
import NavBC from "../components/NavBC";
import "../css/config.css";
import "../css/navc.css";

export default function Config() {
  return (
    <>
      <NavBC User={"@Nicolas"} Email={"Nicolas@gmail.com"} />

      <Infos Senha={"Nicolas2276-"} Email={"Nicolas@gmail.com"} />
    </>
  );
}
