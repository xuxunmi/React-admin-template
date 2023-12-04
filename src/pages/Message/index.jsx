import React, { useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

export default function Message() {
    // 编程式路由导航
    const navigate = useNavigate()
    const [messages] = useState([
        {
            id: '001',
            title: '消息1',
            content: '锄禾日当午'
        },
        {
            id: '002',
            title: '消息2',
            content: '汗滴禾下土'
        },
        {
            id: '003',
            title: '消息3',
            content: '谁知盘中餐'
        },
        {
            id: '004',
            title: '消息4',
            content: '粒粒皆辛苦'
        }
    ])

    const handleShowDetailBtn = param => {
        navigate('detail', {
            replace: false,
            state: {
                id: param.id,
                title: param.title,
                content: param.content
            }
        })
    }

    return (
        <div>
            <ul>
                {messages.map(item => {
                    return (
                        <li key={item.id}>
                            {/* params传参 */}
                            {/* <Link to={`detail/${item.id}/${item.title}${item.content}`}>{item.title}</Link> */}

                            {/* search传参 */}
                            {/* <Link to={`detail?id=${item.id}&title=${item.title}&content=${item.content}`}>
                                {item.title}
                            </Link> */}

                            {/* state传参 */}
                            <Link to="detail" state={{ id: item.id, title: item.title, content: item.content }}>
                                {item.title}
                            </Link>
                            <button onClick={() => handleShowDetailBtn(item)}>查看详情</button>
                        </li>
                    )
                })}
            </ul>
            {/* 指定路由组件的展示位置 */}
            <div style={{ marginTop: '5px' }}>
                <Outlet />
            </div>
        </div>
    )
}
