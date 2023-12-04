import { Navigate } from 'react-router-dom'
import { lazy } from 'react'
const Home = lazy(() => import('../pages/Home'))
const About = lazy(() => import('../pages/About'))
const News = lazy(() => import('../pages/News'))
const Message = lazy(() => import('../pages/Message'))
const Detail = lazy(() => import('../pages/Detail'))

// 路由表
export const routes = [
    {
        path: '/',
        element: <Navigate to="/home" /> // 重定向路径
    },
    {
        path: '/home',
        element: <Home />,
        children: [
            {
                path: 'news',
                element: <News />
            },
            {
                path: 'message',
                element: <Message />,
                children: [
                    {
                        // path: 'detail/:id/:title/:content', // params传参
                        path: 'detail',
                        element: <Detail />
                    }
                ]
            }
        ]
    },
    {
        path: '/about',
        element: <About />
    }
]
