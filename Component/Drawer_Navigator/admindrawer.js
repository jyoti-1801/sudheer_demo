import * as React from 'react';
import { Button, View,Image} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import HomeScreen from '../../Screen/Homescreen/Adminhomescrn'
import Rolepermscrn from '../../Screen/Role Permission/index'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Customdrawer from '../customdrawer';
import EmployeeScrn from '../../Screen/EmployeeScreen/index'
import Dmscreen from '../../Screen/Dms_Screen/Admindmsscrn'
import Clientscreen from '../../Screen/Client_screen/index'
import prjctmanagescreen from '../../Screen/project_managment/index'
import Searchdoc from '../../Screen/Search_document/admin'
import Viewdoc from '../../Screen/View_document/admin'
import Upload from '../../Screen/Upload_Document/employeeupdtdcmnt'
import Createproj from '../../Screen/ADMIN_PMS_SCREEN/Create_project/page1'
import Desktop from '../../Screen/PMS_SCREEN/Desktop_study/Client'
import Reconn from './../../Screen/PMS_SCREEN/Reconnasience_Survey/client'


import Detailr from '../../Screen/PMS_SCREEN/Detail_Route_Survey/Client'
import Soilstr from '../../Screen/PMS_SCREEN/Soil_satisfaction_survey/client'
import Corrossion from '../../Screen/PMS_SCREEN/Soil_Corrosion_Survey/Client'

import Geo from '../../Screen/PMS_SCREEN/Geo_Technica;_Survey/Client'
import Topo from '../../Screen/PMS_SCREEN/Topo_Graphical_Survey/Client'
import Cadast from '../../Screen/PMS_SCREEN/Cadastral_Survey_Village_Wise/Client'
import Rou from '../../Screen/PMS_SCREEN/Rou_Detail/Client'
import Crossdoc from '../../Screen/PMS_SCREEN/Crossing_Document/Client'
import Forestdocument from '../../Screen/PMS_SCREEN/Forest_Document/Client'
import Landdoc from '../../Screen/PMS_SCREEN/SV_IP_Land_Document/Client'
import Fundreimburse from '../../Screen/PMS_SCREEN/Fund_Reimbursment/Client'
import RawData from '../../Screen/PMS_SCREEN/Raw_Data/Client'
import Form from '../../Screen/PMS_SCREEN/Forms/Client'
import Clientadd from '../../Screen/ADDING_CLIENT_EMOPLOYEE/addclient'
import Employeeadd from '../../Screen/ADDING_CLIENT_EMOPLOYEE/addemployee'
import { Color } from '../../assets/Color';
const Drawer = createDrawerNavigator();

export default function App() {
  return (
   
      <Drawer.Navigator drawerContent={props => <Customdrawer {...props}/>}  screenOptions={{drawerLabelStyle:{marginLeft:-15,fontFamily:'Roboto-Medium',fontSize:15},drawerActiveBackgroundColor:'#faede6',drawerActiveTintColor:Color.maroon,drawerInactiveTintColor:"#333",headerShown:false}} >
        <Drawer.Screen name="Dashboard" component={HomeScreen}options={{
          drawerIcon: ({color})=>(
            <Image style={{tintColor:color}}  source={require("../../assets/image/home.png")}/>
          )
          }} />
         
       <Drawer.Screen name='Document Management' component={Dmscreen} options={{
         drawerIcon:({color})=>(
          
          <Image style={{tintColor:color}}  source={require("../../assets/image/doc.png")}/>
          
         )
       }}/>
       <Drawer.Screen name='Project Management' component={prjctmanagescreen} options={{
         drawerIcon:({color})=>(
          <Image style={{tintColor:color}}  source={require("../../assets/image/project.png")}/>
         )
       }}/>
       <Drawer.Screen name='Clients' component={Clientscreen} options={{
         drawerIcon:({color})=>(
          <Image style={{tintColor:color}}  source={require("../../assets/image/client2.png")}/>
         )
       }}/>
       <Drawer.Screen name='Employees' component={EmployeeScrn} options={{
         drawerIcon:({color})=>(
          <Image style={{tintColor:color}}  source={require("../../assets/image/employee.png")}/>
         )
       }}/>
     
       <Drawer.Screen name='Role Permission' component={Rolepermscrn} options={{
         drawerIcon:({color})=>(
          <Image style={{tintColor:color}}  source={require("../../assets/image/role.png")}/>
         )

         
       }}/>

         
<Drawer.Screen name='Role' component={Searchdoc} options={{
         drawerIcon:({color})=>(
          <Image style={{tintColor:color}}  source={require("../../assets/image/role.png")}/>
         )

       }}/>
<Drawer.Screen name='createproject' component={Createproj}/>
<Drawer.Screen name='Viewdoc' component={Viewdoc}/>
<Drawer.Screen name='Uplaoddoc' component={Upload}/>
<Drawer.Screen name='Desktop' component={Desktop}/>
<Drawer.Screen name='Reconn' component={Reconn}/>
<Drawer.Screen name='Detailr' component={Detailr}/>
<Drawer.Screen name='soilstr' component={Soilstr}/>
<Drawer.Screen name='corrossion' component={Corrossion}/>
<Drawer.Screen name='geo' component={Geo}/>
<Drawer.Screen name='topo' component={Topo}/>
<Drawer.Screen name='Cadast' component={Cadast}/>
<Drawer.Screen name='rou' component={Rou}/>
<Drawer.Screen name='cross' component={Crossdoc }/>
<Drawer.Screen name='forestdocument' component={Forestdocument}/>
<Drawer.Screen name='Landoc' component={Landdoc}/>
<Drawer.Screen name='rawdata' component={RawData}/>
<Drawer.Screen name='fundreimburse' component={Fundreimburse}/>
<Drawer.Screen name='forms' component={Form}/>
<Drawer.Screen name='addclient' component={Clientadd}/>
<Drawer.Screen name='Searchdoc1'component={Searchdoc}/>
<Drawer.Screen name='addemployee' component={Employeeadd}/>
      </Drawer.Navigator>

  )
}