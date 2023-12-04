import React from 'react'
import { NavLink } from 'react-router-dom'

export default function MyNavLink(props) {
    // 高亮路由
    const computedClassName = ({ isActive }) => {
        return isActive ? 'list-group-item highlight-active' : 'list-group-item'
    }

    return <NavLink className={computedClassName} {...props} />
}
