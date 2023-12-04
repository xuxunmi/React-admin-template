import { ADD_PERSON } from '../constant'

const initState = [
    {
        id: '001',
        name: '徐寻觅',
        age: 18
    }
] // 初始化状态

const personReducer = (preState = initState, action) => {
    const { type, data } = action
    switch (type) {
        case ADD_PERSON:
            return [data, ...preState]
        default:
            return preState
    }
}

export default personReducer
