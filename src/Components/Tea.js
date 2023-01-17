import "./Tea.css";
import "./App.css";
import Header from "./Header";
import Milk from "./Milk/Milk";
import Sugar from "./Sugar/Sugar";
import Teapowder from "./TeaPowder/Teapowder";
import Flavours from "./Flavours/Falvour";
import Water from "./Water/Water";
import Button from "./Button/Button";
import Dropdown from "./Dropdown/Dropdown";


function Tea() {
  return (
    <>
      <div className="App">
        <Header />
        <div className="box">
          <Milk />
         <Dropdown/>
        </div>
        <div className="box">
          <Teapowder />
        </div>
        <div className="box">
          <Flavours />
        </div>
        <div className="box">
          <Sugar />
        </div>
        <div className="box">
          <Water />
        </div>
        <div className="box1">
          <Button />
        </div>
      </div>
    </>
  );
}

export default Tea;
