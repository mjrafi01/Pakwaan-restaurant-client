import {
    createBrowserRouter,

  } from "react-router-dom";
import { Main } from "../Layout/Main";
import { Home } from "../pages/Home/Home/Home";
import { Menu } from "../Menu/Menu/Menu";
import { Order } from "../pages/Order/Order/Order";
import { Login } from "../pages/Login/Login";
import { SignUp } from "../pages/SignUp/SignUp";
import { Dashboard } from "../Layout/Dashboard";
import { Cart } from "../pages/Dashboard/Cart";
import { PrivateRoute } from "./PrivateRoute";
import { AllUsers } from "../pages/Dashboard/All Users/AllUsers";
import { AddItems } from "../pages/Dashboard/AddItems/AddItems";
import { AdminRoute } from "./AdminRoute";
import  { ManageItem } from "../pages/Dashboard/ManageItem/ManageItem";
import { UpdateItem } from "../pages/Dashboard/UpdateItem/UpdateItem";
import { UserHome } from "../pages/Dashboard/UserHome/UserHome";
import { AdminHome } from "../pages/Dashboard/AdminHome/AdminHome";
import { EditProfile } from "../pages/Edit Profile/EditProfile";
import { SearchResults } from "../pages/SearchResults/SearchResults";

  
  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        { path:'/search-results',
        element:<SearchResults></SearchResults>,
      
      },
      
         {
            path:'menu',
            element:<Menu></Menu> ,
        },
        {
          path:`order/:category`,
          element:<Order></Order> ,
      },
      {
        path:'login',
        element:<Login></Login>,
    }
    ,
    {
      path:'signup',
      element:<SignUp></SignUp>,
  },

      ]
    },
    {
      path: "dashboard",
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children:[
        { path:'cart',
        element:<Cart></Cart>},
        { path:'userHome',
        element:<UserHome></UserHome>,
      
      },
      { path:'editUser/:id',
      element:<EditProfile></EditProfile> ,
      loader: ({ params }) =>
        fetch(`http://localhost:5000/user/get/${params.id}`),

    },
//admin routes
        { path:'user',
        element:<PrivateRoute><AllUsers></AllUsers> </PrivateRoute>
      
      
      },
      {
        path:'addItems',
        element:<PrivateRoute><AddItems></AddItems> </PrivateRoute>
      }, {
        path:'manageItem',
        element:<PrivateRoute><ManageItem></ManageItem> </PrivateRoute>
      },
      {
        path:'updateItem/:id',
        element:<PrivateRoute><UpdateItem></UpdateItem></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/menu/${params.id}`)
      }
       ,
       {
        path:'adminHome',
        element:<PrivateRoute><AdminHome></AdminHome></PrivateRoute>,
      
      },
    
      ]




    }
  ]);