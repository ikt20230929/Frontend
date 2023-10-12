import React from "react";

export function HeaderItem({href, text}) {
    return (
        <li><a href={href}>{text}</a></li>
    )
}

export function Header({title, items}) {
    return (
            <div className="navbar">
                <a className="btn btn-ghost pointer-events-none normal-case text-xl">{title}</a>
                <ul className="menu menu-horizontal px-1 ml-auto">
                    {...items}
                </ul>
            </div>
    );
}