import { Routes, Route, Navigate } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import MyNavLink from './components/MyNavLink'
import Counter from './pages/Counter'

const App = () => {
    return (
        <div>
            <div className="row">
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <div className="page-header">
                            <h2>React Router Demo</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-2">
                        <div className="list-group">
                            <MyNavLink to="/home">Home</MyNavLink>
                            <MyNavLink to="/about">About</MyNavLink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                {/* 注册路由 */}
                                <Routes>
                                    {/* 重定向路径 */}
                                    <Route path="/" element={<Navigate to="home" />}></Route>
                                    <Route path="/home" element={<Home />}></Route>
                                    <Route path="/about" element={<About />}></Route>
                                </Routes>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ textAlign: 'center' }}>
                <h2>Count组件：</h2>
                <Counter></Counter>
            </div>
        </div>
    )
}

export default App
