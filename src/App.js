import Signup from "./Composants/Signup";

import './App.css'
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import Groupes from "./Composants/Groupes";
import Login from "./Composants/Login";
import Modules from "./Composants/Modules";
import ModifierFormateur from "./Composants/ModifierFormateur";
import Notification from "./Composants/Notifications";
import ShowNotification from "./Composants/ShowNotifications";
import AffecterFormateur from "./Composants/AffecterFormateur";
export default function App(){
   
    
    return(
       
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Signup/>}></Route>
                <Route path='/login' element={<Login/>}></Route>
                <Route path="/Admin/Groupes" element={<Groupes />}></Route>
                <Route path="/Admin/Groupe/:id/Modules" element={<Modules />}></Route>
                <Route path="/Admin/modifier_formateur/:id" element={<ModifierFormateur />}></Route>
                <Route path="/notification" element={<Notification />}></Route>
                <Route path="/ShowNotifications" element={<ShowNotification />}></Route>
                <Route path="/AffecterFormateur/:id" element={<AffecterFormateur />}></Route>
            </Routes>  
        </BrowserRouter>
       
    );
} 