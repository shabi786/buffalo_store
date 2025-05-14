import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import About from './components/About';
import Error from './components/Error';
import Contact from './components/Contact';
import RestaurantMenu from './components/RestaurantMenu';
import Profile from './components/Profile';
import Instamart from './components/Instamart';
import UserContext from './context/UserContext';
import { Provider } from 'react-redux';
import store from './utils/store';
import Cart from './components/Cart';
import LogIn from './components/LogIn';


function App() {
    const [user, setUser] = useState({
        name: 'Shabi',
        email: 'shabi@gmail.com'
    });
    return (
        <Provider store={store} >

            <UserContext.Provider value={{ user: user, setUser: setUser }}>
                <Header />
                <Outlet />
                <Footer />
            </UserContext.Provider>
        </Provider>


    );
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Body />,
            },
            {
                path: '/about',
                element: <About />,
                children: [
                    {
                        path: 'profile',
                        element: <Profile />
                    }
                ]
            },
            {
                path: '/contact',
                element: <Contact />

            },
            {
                path: '/restaurant/:resId',
                element: <RestaurantMenu />
            },
            {
                path: '/instamart',
                element: <Instamart />

            },
            {
                path: '/cart',
                element: <Cart />
            },
            {
                path: '/login',
                element: <LogIn />
            }
        ]

    },

])

export default App;

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<RouterProvider router={appRouter} />);