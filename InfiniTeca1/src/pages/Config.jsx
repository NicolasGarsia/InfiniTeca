import Infos from "../components/configp/Infos";
import NavBC from "../components/NavBC";
import "../css/config.css";
import "../css/navc.css";

export default function Config() {
  return (
    <>
      <NavBC User={"@Garsa"} Email={"otario@gmail.com"} />

      <Infos Senha={"Otario2276-"} Email={"otario@gmail.com"} />
    </>
  );
}
