import React from 'react'
import { useParams, useMatch, useSearchParams, useLocation } from 'react-router-dom'

export default function Detail() {
    // params接受参数
    // const { id, title, content } = useParams()
    // const match = useMatch('/home/message/detail/:id/:title/:content')
    // console.log('match参数：', match)

    // search接受参数
    const [searchParams, setSearchParams] = useSearchParams()
    // const id = searchParams.get('id')
    // const title = searchParams.get('title')
    // const content = searchParams.get('content')
    // const location = useLocation()
    // console.log('location参数: ', location)

    // state接受参数
    const { state } = useLocation()
    console.log('state参数: ', state)
    const { id, title, content } = state

    return (
        <div>
            <ul>
                <button onClick={() => setSearchParams('id=000&title=悯农&content=李绅')}>点我更新收到的参数</button>
                <li>消息编号：{id}</li>
                <li>消息标题：{title}</li>
                <li>消息内容：{content}</li>
            </ul>
        </div>
    )
}
