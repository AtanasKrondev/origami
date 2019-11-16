import React from 'react'
import Link from '../shared/Link'

const links = Array(11).fill(null).map((link, index) =>
    <Link key={index} url="#">Go to {index + 1}</Link>
)

export default links;