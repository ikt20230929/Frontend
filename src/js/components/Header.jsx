import React from "react";

export function HeaderItem(props) {
    return (
        <li><a className={props.class} href={props.href}>{props.text}</a></li>
    )
}

export function Header(props) {
    return (
            <div className="navbar">
                <a className="btn btn-ghost pointer-events-none normal-case text-xl">{props.title}</a>
                <ul className="menu menu-horizontal px-1 ml-auto">
                    {...props.items}
                </ul>
            </div>
    );
}