import { React, useState, useEffect } from "react";
import InfoRow from "./InfoRow";
import axios from 'axios';


function RightInfo({Data, token, setData}) {

    // let Rows =  <InfoRow key={Data.id} data = {Data} setData = {setData} token = {token} name = {Data.name} id = {Data.id} email = {Data.email} phone_number = {Data.phone_number}/>;

    let Rows =  <InfoRow key={Data.id} Data = {Data} setData = {setData} token = {token}/>;
    
  return (
    <>
      <div className="col-sm-12 col-md-6 col-lg-6">
        {Rows}
      </div>
    </>
  );
}

export default RightInfo;
