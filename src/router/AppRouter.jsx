// import { Navigate,Route,Routes } from "react-router-dom";
// import { Navbar } from "../ui";
// import { MarvelPage } from "../heroes/pages/MarvelPage";
// import { DcPage } from "../heroes/pages/DcPage";
// import { LoginPage } from "../auth/pages/LoginPage";

// export const AppRouter = () => {



//   return (

//     <>  
//         <Navbar />

//         <Routes>

//             <Route path="marvel" element = {<MarvelPage />} />
//             <Route path="dc" element = {<DcPage />} />
//             <Route path="login" element = {<LoginPage />} />
//             <Route path="/" element = {<Navigate to="/marvel" />} />




//         </Routes>
    
    
//     </>
   
    

//   )
// }



import { Route, Routes,Navigate} from "react-router-dom";
import { Navbar } from "../ui";
import { HeroesRoutes } from "../heroes";
import { LoginPage } from "../auth";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  return (
      <>
      
        <Navbar />
          <Routes>
            
            <Route path="login/*" element={ 
              
              <PublicRoute>
                <Routes>
                    <Route path="/*" element={<LoginPage /> }/>
                </Routes>                        
              </PublicRoute>
          
            }/>

            <Route path="/*" element={

              <PrivateRoute>
                
                <HeroesRoutes/>

              </PrivateRoute>
            } />
          

            {/* <Route path="*" element= {<HeroesRoutes  />}  /> */}
            {/* <Route path="/" element={<Navigate to="/login" />} /> */}
          </Routes>
       
       
      </>
  );
};
