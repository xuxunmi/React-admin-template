import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Header() {
    const navigate = useNavigate()
    const handleBackBtn = () => {
        navigate(-1)
    }
    const handleForwardBtn = () => {
        navigate(1)
    }

    return (
        <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header">
                <h2>React Router Demo</h2>
            </div>
            <button onClick={handleBackBtn}>←后退</button>
            <button onClick={handleForwardBtn}>前进→</button>
        </div>
    )
}
