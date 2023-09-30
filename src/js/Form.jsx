export function FormItem(props) {
    switch(props.type) {
        case "text":
        case "password":
        case "email": {
            return [
                <input type={props.type} placeholder={props.text} class="input input-bordered w-full max-w-xs" required={props.required} />
            ]
        }

        case "checkbox": {
            return [
                <label class="label cursor-pointer">
                    <span class="label-text">{props.text}</span> 
                    <input type="checkbox" checked={props.checked} class="checkbox" required={props.required} />
                </label>
            ]
        }

        case "radio": {
            return [
                <input type="radio" name={props.text} class="radio" required={props.required} />
            ]
        }

        case "submit": {
            return [
                <button type="submit" class="btn">{props.text}</button>
            ]
        }
    }
}

export function Form(props) {
    return [
        <form class="form-control w-full max-w-xs">
            {...props.items}
        </form>
    ]
}