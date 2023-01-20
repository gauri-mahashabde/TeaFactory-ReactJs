import React from 'react'
import Cradomom from "./Types/Cradomom"
import Ginger from "./Types/Ginger"
import Lemon from "./Types/Lemon"

function Falvour() {
  return (
    <>
    <div>Flavour</div>
    <select name="selectList" id="selectList">
        <option value="option 1"><Cradomom/></option>
        <option value="option 2"><Ginger/></option>
        <option value="option 3"><Lemon/></option>
        </select>
    </>
  )
}

export default Falvour