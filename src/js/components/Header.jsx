export function HeaderItem(props) {
    return [
        <li><a href={props.href}>{props.text}</a></li>
    ]
}

export function Header(props) {
    return [
        <div class="navbar bg-base-100">
            <div class="navbar">
                <a class="btn btn-ghost pointer-events-none normal-case text-xl">{props.title}</a>
                <ul class="menu menu-horizontal px-1">
                    {...props.items}
                </ul>
            </div>
        </div>  
    ];
}