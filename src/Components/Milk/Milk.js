import React from "react";
import Types from "./Types/Types";
//import Dropdown from '../Dropdown/Dropdown'
import AlmondMilk from "./Types/AlmondMilk";
import CashewMilk from "./Types/CashewMilk";
import HazelnutMilk from "./Types/HazelnutMilk";
import HempMilk from "./Types/HempMilk";
import CoconutMilk from "./Types/CoconutMilk";
import OatMilk from "./Types/OatMilk";
import SoyaMilk from "./Types/SoyaMilk";

export default function Milk() {
  return (
    <>
      <div>Milk</div>
      <Types />
      <select name="selectList" id="selectList">
         
        <option value="option 1">
          <AlmondMilk />
        </option>
        <option value="option 2">
          <CashewMilk />
        </option>
        <option value="option 3">
          <HazelnutMilk />
        </option>
        <option value="option 4">
          <HempMilk />
        </option>
        <option value="option 5">
          <CoconutMilk />
        </option>
        <option value="option 6">
          <OatMilk />
        </option>
        <option value="option 7">
          <SoyaMilk />
        </option>
      </select>
    </>
  );
}
