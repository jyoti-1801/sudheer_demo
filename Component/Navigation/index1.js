import { View, Text, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen1 from "../../Screen/Login/Index1"
import Adminlogin from "../../Screen/Login/Adminllogin"
import Employeelogin from "../../Screen/Login/employeelogin"
import Clientlogin from "../../Screen/Login/clientlogin"
import Adminsignup from "../../Screen/signup/adminsignup"
import Clientsignup from "../../Screen/signup/clientsignup"
import Employeesignup from "../../Screen/signup/employeesignup"

import Adminforgot from "../../Screen/ForgotPassword/adminforgotpassword"
import Clientforgot from "../../Screen/ForgotPassword/clientforgotpassword"
import Employeeforgot from "../../Screen/ForgotPassword/employeeforgotpassword"

import Adminverification from "../../Screen/VerificationScreen/adminverify"
import Clientverification from "../../Screen/VerificationScreen/clientverify"
import Employeeverification from "../../Screen/VerificationScreen/employeeverify"

import Adminotp from "../../Screen/Otpscreen/adminotpscreen"
import Clientotp from "../../Screen/Otpscreen/clientotpscreen"
import Employeeotp from "../../Screen/Otpscreen/employeeotpscreen"

import Adminchangeemail from "../../Screen/Forgotpasswordwithchangeemailid/adminwithchangeemail"
import employeechangeemail from "../../Screen/Forgotpasswordwithchangeemailid/clientwithchangeemail"
import clientchangeemail from "../../Screen/Forgotpasswordwithchangeemailid/employeewithchangemail"


import Adminpasswordcreate  from '../../Screen/Password_Create/adminpasswordcreate'
import Employeepasswordcreate  from '../../Screen/Password_Create/employepasswordcreate'
import Clientpasswordcreate  from '../../Screen/Password_Create/cientpasswordcreate'

import Adminpaswrdupdate from '../../Screen/Successfully_update/adminsuccess'
import Employeepaswrdupdate from '../../Screen/Successfully_update/employeesuccess'
import Clientpaswrdupdate from '../../Screen/Successfully_update/clientsuccess'

import AdminDrawer from '../Drawer_Navigator/admindrawer'
import DrawerScreen2 from '../Drawer_Navigator/clientdrawer'
import DrawerScreen3 from '../Drawer_Navigator/employeedrawer'
import Employeedcmntsuccess from '../../Screen/Document_successfully_uploaded/employee'


import Toptab from '../../Screen/ADMIN_REQUEST_SCREEN/request'
import Searchdoc1 from "../../Screen/Search_document/admin"
import Uplaoddoc from "../../Screen/Upload_Document/employeeupdtdcmnt"
import Showdoc from '../../Screen/View_document/employee'
import Createproject from '../../Screen/ADMIN_PMS_SCREEN/Create_project/page1'
import Services from '../../Screen/ADMIN_PMS_SCREEN/Create_project/Page2'
import Desktopstudy from '../../Screen/ADMIN_PMS_SCREEN/Create_project/Desktop_Study'
import Reconnaisance from '../../Screen/ADMIN_PMS_SCREEN/Create_project/Reconnaissance_Survey'
import Detailroute from '../../Screen/ADMIN_PMS_SCREEN/Create_project/Detail Route Survey'
import Soilstratification from '../../Screen/ADMIN_PMS_SCREEN/Create_project/Soil_Startification_Survey'
import SoilCorrosion from "../../Screen/ADMIN_PMS_SCREEN/Create_project/Soil_Corrosion_Survey"
import Geotech from '../../Screen/ADMIN_PMS_SCREEN/Create_project/Geo_technical_survey'


import Cadastral from '../../Screen/ADMIN_PMS_SCREEN/Create_project/Cadastral_survey_village_wise'
import Tropograph from '../../Screen/ADMIN_PMS_SCREEN/Create_project/Topographical_Survey'
import RouDetail from "../../Screen/ADMIN_PMS_SCREEN/Create_project/Rou_Detail"
import Crossingdoc from  "../../Screen/ADMIN_PMS_SCREEN/Create_project/Crossing_Document"
import Forestdoc from '../../Screen/ADMIN_PMS_SCREEN/Create_project/Forest_Document'
import SVIP from '../../Screen/ADMIN_PMS_SCREEN/Create_project/SV_IP_LAND_DOCUMENT'
import Rawdata from '../../Screen/ADMIN_PMS_SCREEN/Create_project/Raw_DATA'



import Employeeform from "../../Screen/PMS_SCREEN/Forms/Employee"

import React from 'react';
export default function App() {
  
  const Stack = createNativeStackNavigator();
  return (
 
    
        <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='Screen1'>
          <Stack.Screen name='Screen1' component={Screen1} />
          <Stack.Screen name='Adminglogin' component={Adminlogin} />
          <Stack.Screen name='employeelogin' component={Employeelogin} />
          <Stack.Screen name='clientlogin' component={Clientlogin} />
          <Stack.Screen name='clientsignup' component={Clientsignup} />
          <Stack.Screen name='employeesignup' component={Employeesignup} />
          <Stack.Screen name='adminsignup' component={Adminsignup} />

          <Stack.Screen name='adminforgotpassword' component={Adminforgot} />
          <Stack.Screen name='clientforgotpassword' component={Clientforgot} />
          <Stack.Screen name='employeeforgotpassword' component={Employeeforgot} />


          <Stack.Screen name='adminverification' component={Adminverification} />
          <Stack.Screen name='clientverification' component={Clientverification} />
          <Stack.Screen name='employeeverification' component={Employeeverification} />



          <Stack.Screen name='adminotp' component={Adminotp} />
          <Stack.Screen name='clientotp' component={Clientotp} />
          <Stack.Screen name='employeeotp' component={Employeeotp} />

          <Stack.Screen name='OTPadmin' component={Adminotp} />
          <Stack.Screen name='OTPclient' component={Clientotp} />
          <Stack.Screen name='OTPemployee' component={Employeeotp} />


          <Stack.Screen name='adminchangeemail' component={Adminchangeemail} />
          <Stack.Screen name='employeechangeemail' component={employeechangeemail} />
          <Stack.Screen name='clientchangeemail' component={clientchangeemail} />
 
          <Stack.Screen name= 'adminpasswordcreate' component={Adminpasswordcreate}/>
          <Stack.Screen name= 'clientpasswordcreate' component={Clientpasswordcreate}/>
          <Stack.Screen name= 'employeepasswordcreate' component={Employeepasswordcreate}/>
         

          <Stack.Screen name="adminpaswrdupdate" component={Adminpaswrdupdate}/>
          <Stack.Screen name="employeepaswrdupdate" component={Employeepaswrdupdate}/>
          <Stack.Screen name="clientpaswrdupdate" component={Clientpaswrdupdate}/>


        <Stack.Screen name='Adminlginagain' component={Adminlogin}/>
        <Stack.Screen name='Employeelginagain' component={Employeelogin}/>
        <Stack.Screen name='Clientlginagain' component={Clientlogin}/>

               
        <Stack.Screen name="Clienthmscrn" component={DrawerScreen2}/>
                             
                            {/* //ADMIN DRAWER SECTION// */}

        <Stack.Screen name='Dashboard' component={AdminDrawer }/>
      
       

        <Stack.Screen name="Successfully_uploaded" component={Employeedcmntsuccess }/>
        <Stack.Screen name="Homescreen" component={AdminDrawer}/>
        <Stack.Screen name="Toptab" component={Toptab}/>
        <Stack.Screen name= 'Searchdoc1' component={AdminDrawer }/>
        <Stack.Screen name= 'Uplaoddoc' component={AdminDrawer }/>
        <Stack.Screen name= 'Viewdoc' component={AdminDrawer }/>
        <Stack.Screen name ='createproject' component={AdminDrawer }/>
        <Stack.Screen name ='page2' component={Services}/>
        <Stack.Screen name ='page3' component={Desktopstudy}/>
        <Stack.Screen name ='Reconnaisance' component={Reconnaisance}/>


        <Stack.Screen name ='Detailroute' component={Detailroute}/>
        <Stack.Screen name='soilstratification' component={Soilstratification}/>
        <Stack.Screen name='SoilCorrosion' component={SoilCorrosion}/>
        <Stack.Screen name='geotech' component={Geotech}/>
        <Stack.Screen name='topograph' component={Tropograph}/>
        <Stack.Screen name='Cadastral' component={Cadastral}/>
        <Stack.Screen name="RouDetail" component={RouDetail}/>
        <Stack.Screen name="crossinddoc" component={Crossingdoc}/>

        <Stack.Screen name='forestdoc' component={Forestdoc}/>
        <Stack.Screen name='sv/ip' component={SVIP}/>
        <Stack.Screen name='Rawdata'component={Rawdata}/>
        <Stack.Screen name='Desktop'component={AdminDrawer}/>

        <Stack.Screen name="Reconn" component={AdminDrawer}/>
        <Stack.Screen name='Detailr' component={AdminDrawer}/>
        <Stack.Screen name='soilstr'component={AdminDrawer}/>
        <Stack.Screen name='corrosion' component={AdminDrawer}/>
        <Stack.Screen name='Geo' component={AdminDrawer}/>
        <Stack.Screen name="Topo" component={AdminDrawer}/>
        <Stack.Screen name='Cadast' component={AdminDrawer}/>
        <Stack.Screen name='Rou' component={AdminDrawer}/>
        <Stack.Screen name='Cross' component={AdminDrawer}/>
        <Stack.Screen name='forestdocument' component={AdminDrawer}/>
        <Stack.Screen name='Landoc'component={AdminDrawer}/>
        <Stack.Screen name='rawdata' component={AdminDrawer}/>
        <Stack.Screen name='fundreimburse' component={AdminDrawer}/>
        <Stack.Screen name='forms' component={AdminDrawer}/>
        <Stack.Screen name='addclient' component={AdminDrawer}/>
        <Stack.Screen name='addemployee'component={AdminDrawer}/>


                            {/* //EMPLOYEE DRAWER SECTION// */}

        <Stack.Screen name="employeehmscrn" component={DrawerScreen3}/>
        <Stack.Screen name="Viewdocemployee" component={DrawerScreen3}/>
        <Stack.Screen name="Searchdocemployee" component={DrawerScreen3}/>
        <Stack.Screen name="Uplaoddocemployee" component={DrawerScreen3}/>
        <Stack.Screen name='Employeeforms' component={DrawerScreen3}/>
        <Stack.Screen name='Employeefundreimburse' component={DrawerScreen3}/>
        <Stack.Screen name='Employeerawdata'component={DrawerScreen3}/>
        <Stack.Screen name='EmplpoyeeLandoc' component={DrawerScreen3}/>
        <Stack.Screen name='Emplopyeeforestdocument' component={DrawerScreen3}/>
        <Stack.Screen name='EmployeeCross'component={DrawerScreen3}/>
        <Stack.Screen name='EmployeeRou'component={DrawerScreen3}/>
        <Stack.Screen name='EmployeeCadast'component={DrawerScreen3}/>
        <Stack.Screen name='EmployeeTopo'component={DrawerScreen3}/>
        <Stack.Screen name='EmployeeGeo'component={DrawerScreen3}/>
        <Stack.Screen name='Employeecorrosion'component={DrawerScreen3}/>
        <Stack.Screen name ='employeesoilstr'component={DrawerScreen3}/>
        <Stack.Screen name = 'employeeDesktop'component={DrawerScreen3}/>
        <Stack.Screen name = 'employeeReconn'component={DrawerScreen3}/>
        <Stack.Screen name='employeeDetailr'component={DrawerScreen3}/>





                                 {/* //CLIENT DRAWER SECTION// */}

         <Stack.Screen name="Clienthomescreen" component={DrawerScreen2}/>
        <Stack.Screen name="Viewdocclient" component={DrawerScreen2}/>
        <Stack.Screen name="Searchdocclient" component={DrawerScreen2}/>
        <Stack.Screen name="Uplaoddocclient" component={DrawerScreen2}/>
        <Stack.Screen name='Clientforms' component={DrawerScreen2}/>
        <Stack.Screen name='Clientfundreimburse' component={DrawerScreen2}/>
        <Stack.Screen name='Clientrawdata'component={DrawerScreen2}/>
        <Stack.Screen name='ClientLandoc' component={DrawerScreen2}/>
        <Stack.Screen name='Clientforestdocument' component={DrawerScreen2}/>
        <Stack.Screen name='ClientCross'component={DrawerScreen2}/>
        <Stack.Screen name='ClientRou'component={DrawerScreen2}/>
        <Stack.Screen name='ClientCadast'component={DrawerScreen2}/>
        <Stack.Screen name='ClientTopo'component={DrawerScreen2}/>
        <Stack.Screen name='ClientGeo'component={DrawerScreen2}/>
        <Stack.Screen name='clientcorrosion'component={DrawerScreen2}/>
        <Stack.Screen name ='clientoilstr'component={DrawerScreen2}/>
        <Stack.Screen name = 'clientDesktop'component={DrawerScreen2}/>
        <Stack.Screen name = 'clientReconn'component={DrawerScreen2}/>
        <Stack.Screen name='clientDetailr'component={DrawerScreen2}/>



              </Stack.Navigator>
  
   
  )
}