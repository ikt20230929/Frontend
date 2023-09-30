export function Header(props) {
    return [
        <div class="navbar flex justify-center bg-base-100">
            <div class="navbar-center">
                <a class="btn btn-ghost pointer-events-none normal-case text-xl">{props.title}</a>
            </div>
        </div>  
    ];
}