import Fields from "./Component/Home/Fields";
import Home from "./Component/Home/Home";
import OurPartners from "./Component/Home/Our-partners";
import Partners from "./Component/Home/Partners";
import "./style/style.scss";

function App() {
  return (
    <>
      <div>
        <Home />
        <Partners />
        <Fields />
      </div>
    </>
  );
}

export default App;
