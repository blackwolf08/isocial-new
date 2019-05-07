import React from 'react'
import './index.css'
import spinner from './puff.svg'

const Spinner = props =>
<div className="spinner">
    <img alt="Loading" src={spinner} />
</div>

export default Spinner;