import * as React from 'react';
import { Button, View,Image} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../../Screen/Homescreen/Employeehomescrn'
import Rolepermscrn from '../../Screen/Role Permission/index'
import Viewdoc from '../../Screen/View_document/employee'
import Customdraweremployee from '../customdraweremployee';
import EmployeeScrn from '../../Screen/EmployeeScreen/index'
import Dmscreen from '../../Screen/Dms_Screen/Employeedmsscrn'
import Clientscreen from '../../Screen/Client_screen/index'
import prjctmanagescreen from '../../Screen/project_managment/index'
import Searchdoc from '../../Screen/Search_document/employee'
import Uplaoddocemployee from '../../Screen/Upload_Document/employeeupdtdcmnt'
import Employeeforms from '../../Screen/PMS_SCREEN/Forms/Employee'
import Employeefund from '../../Screen/PMS_SCREEN/Fund_Reimbursment/Employee'
import Employeedetail from '../../Screen/PMS_SCREEN/Detail_Route_Survey/employee'
import EmployeeReconn from '../../Screen/PMS_SCREEN/Reconnasience_Survey/employee'
import EmployeeTopo from '../../Screen/PMS_SCREEN/Topo_Graphical_Survey/employee'
import Employeesoilstr from '../../Screen/PMS_SCREEN/Soil_satisfaction_survey/employee'
import Employeecorrosion from '../../Screen/PMS_SCREEN/Soil_Corrosion_Survey/employee'
import EmployeeGeo from '../../Screen/PMS_SCREEN/Geo_Technica;_Survey/employee'
import EmployeeCadast from '../../Screen/PMS_SCREEN/Cadastral_Survey_Village_Wise/Employee'
import EmployeeRou from '../../Screen/PMS_SCREEN/Rou_Detail/Employee'
import EmployeeCross from "../../Screen/PMS_SCREEN/Crossing_Document/Employee"
import Emplopyeeforestdocument from '../../Screen/PMS_SCREEN/Forest_Document/Employee'
import EmplpoyeeLandoc from '../../Screen/PMS_SCREEN/SV_IP_Land_Document/Employee'
import Employeerawdata from '../../Screen/PMS_SCREEN/Raw_Data/Employee'
import Employeedesktop from '../../Screen/PMS_SCREEN/Desktop_study/employee'
import { Color } from '../../assets/Color';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
   
      <Drawer.Navigator drawerContent={props => <Customdraweremployee {...props}/>}  screenOptions={{headerShown:false,drawerLabelStyle:{marginLeft:-15,fontFamily:'Roboto-Medium',fontSize:15},drawerActiveBackgroundColor:'#faede6',drawerActiveTintColor:Color.maroon,drawerInactiveTintColor:"#333"}}>
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
      <Drawer.Screen name="Viewdocemployee" component={Viewdoc}/>
      <Drawer.Screen name="Searchdocemployee" component={Searchdoc}/>
      <Drawer.Screen name="Uplaoddocemployee" component={Uplaoddocemployee}/>
      <Drawer.Screen name="Employeehomescreen" component={HomeScreen}/>
       <Drawer.Screen name='Employeeforms' component={Employeeforms}/>
       <Drawer.Screen name='employeefundreimburse' component={Employeefund}/>
       <Drawer.Screen name='employeeDetailr' component={Employeedetail}/>
       <Drawer.Screen name= 'employeeReconn'component={EmployeeReconn }/>
       
       <Drawer.Screen name= 'EmployeeTopo'component={EmployeeTopo}/>
      <Drawer.Screen name= 'employeesoilstr'component={Employeesoilstr}/>
      <Drawer.Screen name= 'Employeecorrosion'component={Employeecorrosion}/>
      <Drawer.Screen name= 'EmployeeGeo'component={EmployeeGeo}/>
      <Drawer.Screen name= 'EmployeeCadast'component={EmployeeCadast}/>
      <Drawer.Screen name= 'EmployeeRou'component={EmployeeRou}/>
      <Drawer.Screen name= 'EmployeeCross'component={EmployeeCross}/>
      <Drawer.Screen name= 'Emplopyeeforestdocument'component={Emplopyeeforestdocument}/>
      <Drawer.Screen name= 'EmplpoyeeLandoc'component={EmplpoyeeLandoc}/>
      <Drawer.Screen name= 'Employeerawdata'component={Employeerawdata}/>
      <Drawer.Screen name='employeeDesktop' component={Employeedesktop}/>
      </Drawer.Navigator>

  )
}