import React, { useRef } from 'react'
// 引入connect用于连接UI组件和redux
import { connect } from 'react-redux'
// 引入actionCreator,专门用于创建action对象
import { increment, decrement, incrementAsync } from '../../redux/actions/counter'

// 定义UI组件
const Counter = props => {
    console.log('Counter UI组件props:', props)
    // react-redux用法
    const { count, increment, decrement, incrementAsync, personTotal } = props
    const selectNumberRef = useRef(null)

    // react-redux加法
    const handleIncrementbtn = () => {
        const value = selectNumberRef.current.value
        increment(Number(value))
    }

    // react-redux减法
    const handleDecrementBtn = () => {
        const value = selectNumberRef.current.value
        decrement(Number(value))
    }

    // react-redux奇数再加
    const handleIncrementIfAddBtn = () => {
        const value = selectNumberRef.current.value
        if (count % 2 !== 0) {
            increment(Number(value))
        }
    }

    // react-redux异步再加
    const handleIncrementAsyncBtn = () => {
        const value = selectNumberRef.current.value
        incrementAsync(Number(value), 1000)
    }

    return (
        <div>
            <h1>Counter组件</h1>
            <h2>当前求和为：{count}</h2>
            <h2>Person组件总人数：{personTotal}</h2>
            <select name="select" ref={selectNumberRef}>
                <option value="1">选项1</option>
                <option value="2">选项2</option>
                <option value="3">选项3</option>
            </select>
            &nbsp;
            <button onClick={handleIncrementbtn}>&nbsp;+&nbsp;</button>
            &nbsp;
            <button onClick={handleDecrementBtn}>&nbsp;&nbsp;-&nbsp;&nbsp;</button>
            &nbsp;
            <button onClick={handleIncrementIfAddBtn}>当前奇数求和加</button>
            &nbsp;
            <button onClick={handleIncrementAsyncBtn}>异步求和</button>
        </div>
    )
}

/**
 * 1. mapStateToProps函数返回的对象
 * 2. 返回的对象中的key作为传递给UI组件props的key,value作为传递给UI组件props的value
 * 3. mapStateToProps用于传递状态
 */
// const mapStateToProps = state => ({ count: state })

/**
 * 1. mapDispatchToProps函数返回的对象
 * 2. 返回的对象中的key作为传递给UI组件props的key,value作为传递给UI组件props的value
 * 3. mapDispatchToProps用于传递操作状态的方法
 */
// const mapDispatchToProps = dispatch => ({
//     // 通知redux执行求和
//     add: data => dispatch(createIncrementAction(data)),
//     sub: data => dispatch(createDecrementAction(data)),
//     asyncAdd: (data, delay) => dispatch(createIncrementAsyncAction(data, delay))
// })

// 使用connect()创建并暴露一个Counter的容易组件
// export default connect(mapStateToProps, mapDispatchToProps)(CounterUI)

// 定义容器组件
export default connect(
    state => ({
        count: state.count,
        personTotal: state.person.length
    }),
    // mapDispatchToProps的一般写法
    // dispatch => ({
    //     // 通知redux执行求和
    //     add: data => dispatch(createIncrementAction(data)),
    //     sub: data => dispatch(createDecrementAction(data)),
    //     asyncAdd: (data, delay) => dispatch(createIncrementAsyncAction(data, delay))
    // })

    // mapDispatchToProps的简写:react-redux自动分发(推荐使用)
    {
        increment,
        decrement,
        incrementAsync
    }
)(Counter)
