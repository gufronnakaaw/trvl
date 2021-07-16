import React, { Children } from 'react'
import './css/Button.css'
import { Link } from 'react-router-dom'

const styles = ['btn--primary', 'btn--outline']
const sizes = ['btn--medium', 'btn--large']

export default function Button(props) {
    const { children, type, onClick, buttonStyle, buttonSize } = props

    const checkButtonStyle = styles.includes(buttonStyle) ? buttonStyle : styles[0]

    const checkButtonSize = sizes.includes(buttonStyle) ? buttonSize : sizes[0]

    return (
        <Link to="/login" className="btn-mobile">
            <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>
                {children}
            </button>
        </Link>
    )
}
