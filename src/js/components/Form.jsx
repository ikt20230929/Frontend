import React from "react";
import { tv } from 'tailwind-variants';

const fieldset = tv({
    base: `rounded-lg`,
    variants: {
        nofocus: {
            true: 'focus-within:outline-none',
            false: 'focus-within:outline-[hsl(var(--bc)/.2)]'
        },

        error: {
            true: 'border-red-500 focus-within:outline-red-500'
        },

        joined: {
            true: 'join flex justify-center items-center'
        },

    },

    defaultVariants: {
        error: false,
        joined: false,
        nofocus: false
    }
});

export function FormItemSet({error, joined, nofocus, title, items}) {
    return (
        <fieldset className={fieldset({ error: error, joined: joined, nofocus: nofocus })}>
            {title ? <legend className="text-center m-auto">{title}</legend> : null}
            {...items}
        </fieldset>
    );
}

export function FormItem({type, id, text, classes, autocomplete, field, onclick}) {
    switch(type) {
        case "text":
        case "password":
        case "email": {
            return (
                <input type={type} id={id} {...field} placeholder={text} className={`input w-full max-w-xs focus:outline-none${classes ? ` ${classes}` : ""}`} autoComplete={autocomplete} />
            )
        }

        case "checkbox": {
            return (
                <label className="label justify-normal cursor-pointer">
                    <input type="checkbox" {...field} className={`checkbox${classes ? ` ${classes}` : ""}`} autoComplete={autocomplete} />
                    <span className="label-text pl-2">{text}</span> 
                </label>
            )
        }

        case "radio": {
            return (
                    <label className="label justify-normal cursor-pointer">
                        <input type="radio" {...field} value={text} className={`radio${classes ? ` ${classes}` : ""}`} autoComplete={autocomplete} />
                        <span className="label-text pl-2">{text}</span> 
                     </label>
            )
        }

        case "submit":
        case "button": {
            return (
                <button type={type} onClick={onclick} className={`btn${classes ? ` ${classes}` : ""}`} autoComplete={autocomplete}>{text}</button>
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