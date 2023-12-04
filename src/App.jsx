import { Routes, Route, Navigate, useRoutes } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import MyNavLink from './components/MyNavLink'
import { routes } from './routes'
const Counter = lazy(() => import('./containers/Counter'))
const Person = lazy(() => import('./containers/Person'))
const Header = lazy(() => import('./pages/Header'))

const App = () => {
    // 根据路由表生成路由规则
    const element = useRoutes(routes)

    return (
        <div>
            <div className="row">
                <div className="row">
                    <Header></Header>
                </div>
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-2">
                        <div className="list-group">
                            {/* end属性：父级路由不在高亮 */}
                            <MyNavLink end to="/home">
                                Home
                            </MyNavLink>
                            &nbsp;
                            <MyNavLink to="/about">About</MyNavLink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                {/* 路由懒加载 */}
                                <Suspense fallback={<div>页面加载中...</div>}>
                                    {/* 注册路由 */}
                                    {/* <Routes>
                                        <Route path="/" element={<Navigate to="/home" />}></Route>
                                        <Route path="/home" element={<Home />}></Route>
                                        <Route path="/about" element={<About />}></Route>
                                    </Routes> */}
                                    {element}
                                </Suspense>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div>
                <Counter></Counter>
                <hr />
                <Person></Person>
            </div>
        </div>
    )
}

export default App
