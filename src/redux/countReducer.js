/**
 * 1. 该文件用于创建一个为Count组件服务的reducer，reducer的本质是一个函数
 * 2. reducer函数会接到两个参数，分别为：之前的状态(preState)，动作对象(action)
 */
const initState = 0 // 初始化状态
function countReducer(preState = initState, action) {
    console.log('countReducer', preState,action)
    // 从action对象中获取type，data
    const { type, data } = action
    switch (type) {
        case 'increment': // 加
            return preState + data
        case 'decrement': // 减
            return preState - data
        default:
            return preState
    }
}

export default countReducer
