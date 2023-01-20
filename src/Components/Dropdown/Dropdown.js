import React from "react";
import BlackTea from "../TeaPowder/Types/BlackTea";
import GreenTea from "../TeaPowder/Types/GreenTea";
import Herbal from "../TeaPowder/Types/Herbal";
import IceTea from "../TeaPowder/Types/IceTea";
import MasalaTea from "../TeaPowder/Types/MasalaTea";
import WhiteTea from "../TeaPowder/Types/WhiteTea";
import Cradomom from "./Falvour/Types/"

export default function Dropdown(props) {
  //console.log(props);

  return (
    <>
      {/*( {props.types[0] == "blacktea"} <BlackTea/>)*/}
      <select name="selectList" id="selectList">
        <option value="option 1">
          {" "}
          {props.types[0] == "black Tea"} <BlackTea />
        </option>
        <option value="option 2">
          {" "}
          {props.types[1] == "Green Tea"} <GreenTea />
        </option>
        <option value="option 3">
          {" "}
          {props.types[2] == "Herbal"} <Herbal />
        </option>
        <option value="option 4">
          {" "}
          {props.types[3] == "IceTea"} <IceTea />
        </option>
        <option value="option 5">
          {" "}
          {props.types[4] == "Masala Tea"} <MasalaTea />
        </option>
        <option value="option 6">
          {" "}
          {props.types[5] == "White Tea"} <WhiteTea />
        </option>
      </select>

      <select name="selectList" id="selectList">
        <option value="option 1"><BlackTea/></option>
        <option value="option 2"><GreenTea/></option>
        <option value="option 3"><Herbal/></option>
        <option value="option 4"><IceTea/></option>
        <option value="option 5"><MasalaTea/></option>
        <option value="option 6"><WhiteTea/></option>
        
  </select>
    </>
  );
}
