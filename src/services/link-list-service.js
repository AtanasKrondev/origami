import React from 'react'
import Link from '../shared/Link'

const links = [
    { to: "/create-posts", ref: "Post" },
    { to: "/profile", ref: "Profile" },
    { to: "/login", ref: "Login" },
    { to: "/register", ref: "Register" },
]
    .map((link, index) =>
        <Link key={index} to={link.to}>{link.ref}</ Link>
    )

export default links;
