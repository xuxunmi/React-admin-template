import { useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import MyNavLink from '../../components/MyNavLink'

export default function Home() {
    const [sum, setSum] = useState(0)
    return (
        <div>
            <h3>我是Home内容</h3>
            {sum === 2 ? <Navigate to="/about"></Navigate> : <h4>当前sum的值：{sum}</h4>}
            <button onClick={() => setSum(2)}>点击变为2</button>
            <div style={{ marginTop: '20px' }}>
                <ul className="nav nav-tabs">
                    <li>
                        <MyNavLink to="news">News</MyNavLink>
                    </li>
                    <li>
                        <MyNavLink to="message">Message</MyNavLink>
                    </li>
                </ul>
                <div style={{ marginTop: '10px' }}>
                    {/* 指定路由组件的位置 */}
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    )
}
