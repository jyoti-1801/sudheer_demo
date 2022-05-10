import * as React from 'react';
import { Button, View,Image} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from '../../Screen/Homescreen/clienthmscrn'

import Viewdoc from '../../Screen/View_document/employee'

import Dmscreen from '../../Screen/Dms_Screen/Clientdmsscrn'

import CustomdrawerClient  from '../../Component/Customdrawerclient'

import Searchdoc from '../../Screen/Search_document/employee'
import Clientdocemployee from '../../Screen/Upload_Document/employeeupdtdcmnt'
import Clientforms from '../../Screen/PMS_SCREEN/Forms/Client'
import Clientfund from '../../Screen/PMS_SCREEN/Fund_Reimbursment/Client'
import Clientdetail from '../../Screen/PMS_SCREEN/Detail_Route_Survey/Client'
import ClientReconn from '../../Screen/PMS_SCREEN/Reconnasience_Survey/client'
import ClientTopo from '../../Screen/PMS_SCREEN/Topo_Graphical_Survey/Client'
import Clientsoilstr from '../../Screen/PMS_SCREEN/Soil_satisfaction_survey/client'
import Clientcorrosion from '../../Screen/PMS_SCREEN/Soil_Corrosion_Survey/Client'
import ClientGeo from '../../Screen/PMS_SCREEN/Geo_Technica;_Survey/Client'
import ClientCadast from '../../Screen/PMS_SCREEN/Cadastral_Survey_Village_Wise/Client'
import ClientRou from '../../Screen/PMS_SCREEN/Rou_Detail/Client'
import ClientCross from "../../Screen/PMS_SCREEN/Crossing_Document/Client"
import Clientforestdocument from '../../Screen/PMS_SCREEN/Forest_Document/Client'
import ClientLandoc from '../../Screen/PMS_SCREEN/SV_IP_Land_Document/Client'
import Clientrawdata from '../../Screen/PMS_SCREEN/Raw_Data/Client'
import Clientdesktop from '../../Screen/PMS_SCREEN/Desktop_study/Client'
import { Color } from '../../assets/Color';
const Drawer = createDrawerNavigator();

export default function App() {
  return (
   
      <Drawer.Navigator drawerContent={props => <CustomdrawerClient {...props}/>}  screenOptions={{headerShown:false,drawerLabelStyle:{marginLeft:-15,fontFamily:'Roboto-Medium',fontSize:15},drawerActiveBackgroundColor:'#faede6',drawerActiveTintColor:Color.maroon,drawerInactiveTintColor:"#333"}} initialRouteName="Home">
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
       
       {/* <Drawer.Screen name='Projet Management' component={RequestScrn} options={{
         drawerIcon:({color})=>(
          <Image style={{tintColor:color}}  source={require("../../assets/image/project.png")}/>
         )
       }}/> */}
      
      <Drawer.Screen name="Viewdocclient" component={Viewdoc}/>
      <Drawer.Screen name="Searchdocclient" component={Searchdoc}/>
      <Drawer.Screen name="Uplaoddocclient" component={Clientdocemployee }/>
      <Drawer.Screen name="Clienthomescreen" component={HomeScreen}/>
       <Drawer.Screen name='Clientforms' component={Clientforms}/>
       <Drawer.Screen name='Clientfundreimburse' component={Clientfund}/>
       <Drawer.Screen name='clientDetailr' component={Clientdetail}/>
       <Drawer.Screen name= 'clientReconn'component={ClientReconn }/>
       
       <Drawer.Screen name= 'ClientTopo'component={ClientTopo}/>
      <Drawer.Screen name= 'Clientsoilstr'component={Clientsoilstr}/>
      <Drawer.Screen name= 'clientcorrosion'component={Clientcorrosion}/>
      <Drawer.Screen name= 'ClientGeo'component={ClientGeo}/>
      <Drawer.Screen name= 'ClientCadast'component={ClientCadast}/>
      <Drawer.Screen name= 'ClientRou'component={ClientRou}/>
      <Drawer.Screen name= 'ClientCross'component={ClientCross}/>
      <Drawer.Screen name= 'Clientforestdocument'component={Clientforestdocument}/>
      <Drawer.Screen name= 'ClientLandoc'component={ClientLandoc}/>
      <Drawer.Screen name= 'Clientrawdata'component={Clientrawdata}/>
      <Drawer.Screen name='clientDesktop' component={Clientdesktop}/>
      </Drawer.Navigator>

  )
}