export function FormItemSet(props) {
    if (props.class === undefined) props.class = "";

    return (
        <fieldset class={`border dark:border-[#383f47] light:border-[#d2d4d7] rounded-lg ${props.class}`}>
            {props.title ? <legend class="text-center">{props.title}</legend> : null}
            {...props.items}
        </fieldset>
    );
}


export function FormItem(props) {
    const isRequired = props.required ? { required: true } : {};

    if(props.class === undefined) props.class = "";

    switch(props.type) {
        case "text":
        case "password":
        case "email": {
            return [
                <input type={props.type} id={props.id} name={props.name} placeholder={props.text} pattern={props.pattern} class={`input input-bordered w-full max-w-xs border-none focus:outline-none ${props.class}`} {...isRequired} />
            ]
        }

        case "checkbox": {
            return [
                <label class="label justify-normal cursor-pointer">
                    <input type="checkbox" name={props.name} checked={props.checked} class={`checkbox ${props.class}`} {...isRequired} />
                    <span class="label-text pl-2">{props.text}</span> 
                </label>
            ]
        }

        case "radio": {
            return [
                    <label class="label justify-normal cursor-pointer">
                        <input type="radio" name={props.name} value={props.text} class={`radio ${props.class}`} {...isRequired} />
                        <span class="label-text pl-2">{props.text}</span> 
                     </label>
            ]
        }

        case "submit":
        case "button": {
            return [
                <button type={props.type} onClick={props.onclick} class={`btn ${props.class}`}>{props.text}</button>
            ]
        }
    }
}

export function Form(props) {
    return [
        <form class={`form-control w-full max-w-xs ${props.class}`}>
            {...props.items}
        </form>
    ]
}