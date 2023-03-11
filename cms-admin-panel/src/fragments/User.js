import { Tabs } from 'antd';
import Item from 'antd/lib/list/Item';
import { DataSnapshot , getDatabase, onValue, ref } from 'firebase/database';
import React from 'react'
import { useEffect, useState } from 'react';
import Admin from './admin';
import Client from './Client';
import './users.css'
let  firebase =require('../components/firebase');
const { TabPane } = Tabs;

const User =()=> {
 let [AdminData,setData]=useState([])
 let [ClientData,setclientData]=useState([])
 useEffect(()=>{
   onValue(firebase.refData,(snapShot)=>{
    let usersData=snapShot.child('users').val()
    if(usersData){
      let adminData=[]
      let ClientData=[]
      Object.keys(usersData).map((item)=>{  
        if(usersData[item].role=='admin'){
          adminData.push(usersData[item])
         setData(adminData)
        }else{
          ClientData.push(usersData[item])
         setclientData(ClientData)
        }
      })
    }
   })
},[])
 return  <div>
  <Tabs defaultActiveKey="1" centered>
    <TabPane tab="Client" key="1">
<Client ClientData={ClientData}/>
    </TabPane>
    <TabPane tab="Admin" key="2">
    <Admin AdminData={AdminData}/>
    </TabPane>
  </Tabs>
    </div>
}

export default User