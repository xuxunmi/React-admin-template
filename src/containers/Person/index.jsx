import React, { useRef } from 'react'
import { nanoid } from 'nanoid'
import { connect } from 'react-redux'
import { createAddPersonAction } from '../../redux/actions/person'

const Person = props => {
    console.log('Person UI组件props:', props)
    const { personList, addPerson, numberToTal } = props
    const getNameRef = useRef()
    const getAgeRef = useRef()
    const handleAddPersonBtn = () => {
        const name = getNameRef.current.value
        const age = getAgeRef.current.value
        const personObj = {
            id: nanoid(), // 随机生成oid
            name,
            age
        }
        addPerson(personObj)
        getNameRef.current.value = ''
        getAgeRef.current.value = ''
    }

    return (
        <div>
            <h1>Person组件,Count组件求和为：{numberToTal}</h1>
            <input ref={getNameRef} placeholder="输入名字"></input>&nbsp;
            <input ref={getAgeRef} placeholder="输入年龄"></input>&nbsp;
            <button onClick={handleAddPersonBtn}>添加</button>
            <ul>
                {personList.map(item => {
                    return (
                        <li key={item.id}>
                            姓名：{item.name}---年龄：{item.age}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default connect(
    state => ({
        personList: state.person,
        numberToTal: state.count
    }),
    { addPerson: createAddPersonAction }
)(Person)
