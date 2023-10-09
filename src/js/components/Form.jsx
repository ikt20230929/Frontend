import React from "react";
import { useRef } from "react";

export function FormItemSet({classes, title, items}) {
    return (
        <fieldset className={`border dark:border-[#383f47] light:border-[#d2d4d7] rounded-lg${classes ? ` ${classes}` : ""}`}>
            {title ? <legend className="text-center m-auto">{title}</legend> : null}
            {...items}
        </fieldset>
    );
}

export function FormItem({required, type, id, name, text, pattern, classes, autocomplete, formMethods, onclick}) {
    const isRequired = required ? { required: true } : {};
    const inputRef = useRef(null);

    switch(type) {
        case "text":
        case "password":
        case "email": {
            return (
                <input type={type} ref={inputRef} id={id} name={name} placeholder={text} pattern={pattern} className={`input input-bordered w-full max-w-xs border-none focus:outline-none${classes ? ` ${classes}` : ""}`} autoComplete={autocomplete} {...isRequired} {...formMethods} />
            )
        }

        case "checkbox": {
            return (
                <label className="label justify-normal cursor-pointer">
                    <input type="checkbox" ref={inputRef} name={name} checked={checked} className={`checkbox${classes ? ` ${classes}` : ""}`} autoComplete={autocomplete} {...isRequired} />
                    <span className="label-text pl-2">{text}</span> 
                </label>
            )
        }

        case "radio": {
            return (
                    <label className="label justify-normal cursor-pointer">
                        <input type="radio" ref={inputRef} name={name} value={text} className={`radio${classes ? ` ${classes}` : ""}`} autoComplete={autocomplete} {...isRequired} />
                        <span className="label-text pl-2">{text}</span> 
                     </label>
            )
        }

        case "submit":
        case "button": {
            return (
                <button type={type} ref={inputRef} onClick={onclick} className={`btn${classes ? ` ${classes}` : ""}`} autoComplete={autocomplete}>{text}</button>
            )
        }
    }
}

export function Form({classes, items, onsubmit}) {
    return (
        <form className={`form-control w-full max-w-xs${classes ? ` ${classes}` : ""}`} onSubmit={onsubmit}>
            {...items}
        </form>
    )
}