import React, { useRef, useState, useEffect } from 'react'
// 引入store，用于获取redux中保存的状态
import store from '../../redux/store'
// 引入actionCreator,专门用于创建action对象
import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from '../../redux/actions/counter'

export default function Counter() {
    const selectNumberRef = useRef(null)
    // const [count, setCount] = useState(0)
    // redux用法
    const [count, setCount] = useState(store.getState())

    // 声明一个副作用，useEffect钩子相当于生命周期方法componentDidMount、componentDidUpdate和componentWillUnmount的组合
    useEffect(() => {
        const unsubscribe = store.subscribe(() => {
            setCount(store.getState())
        })
        return () => {
            unsubscribe()
        }
    }, [count])

    // 加法
    // const increment = () => {
    //     const value = selectNumberRef.current.value
    //     setCount(count + Number(value))
    // }
    // redux加法
    const increment = () => {
        const value = selectNumberRef.current.value
        // store.dispatch({ type: 'increment', data: Number(value) })
        store.dispatch(createIncrementAction(Number(value)))
    }

    // 减法
    // const decrement = () => {
    //     const value = selectNumberRef.current.value
    //     setCount(count - Number(value))
    // }
    // redux减法
    const decrement = () => {
        const value = selectNumberRef.current.value
        // store.dispatch({ type: 'decrement', data: Number(value) })
        store.dispatch(createDecrementAction(Number(value)))
    }

    // 奇数再加
    // const incrementIfAdd = () => {
    //     const value = selectNumberRef.current.value
    //     if (count % 2 !== 0) {
    //         setCount(count + Number(value))
    //     }
    // }
    // redux奇数再加
    const incrementIfAdd = () => {
        const value = selectNumberRef.current.value
        if (count % 2 !== 0) {
            // store.dispatch({ type: 'increment', data: Number(value) })
            store.dispatch(createIncrementAction(Number(value)))
        }
    }

    // 异步再加
    // const incrementAsync = () => {
    //     const value = selectNumberRef.current.value
    //     setTimeout(() => {
    //         setCount(count + Number(value))
    //     }, 1000)
    // }
    // redux异步再加
    const incrementAsync = () => {
        const value = selectNumberRef.current.value
        // store.dispatch({ type: 'increment', data: Number(value) })
        store.dispatch(createIncrementAsyncAction(Number(value), 1000))
    }

    return (
        <div>
            <h2>当前求和为：{count}</h2>
            <select name="select" ref={selectNumberRef}>
                <option value="1">选项1</option>
                <option value="2">选项2</option>
                <option value="3">选项3</option>
            </select>
            &nbsp;
            <button onClick={increment}>&nbsp;+&nbsp;</button>
            &nbsp;
            <button onClick={decrement}>&nbsp;&nbsp;-&nbsp;&nbsp;</button>
            &nbsp;
            <button onClick={incrementIfAdd}>当前奇数求和加</button>
            &nbsp;
            <button onClick={incrementAsync}>异步求和</button>
        </div>
    )
}
