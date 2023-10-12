import React from "react";
import { tv } from 'tailwind-variants';
import { Controller } from "react-hook-form";
import { twMerge } from "tailwind-merge";

const fieldset = tv({
    base: `rounded-lg`,
    variants: {
        nofocus: {
            true: 'focus-within:outline-none',
            false: 'focus-within:outline-[hsl(var(--bc)/.2)]'
        },

        error: {
            true: 'border-red-500'
        },

        joined: {
            true: 'join flex items-center'
        },
    },

    compoundVariants: [
        {
            error: true,
            nofocus: false,
            class: "focus-within:outline-red-500"
        }
    ],

    defaultVariants: {
        error: false,
        joined: false,
        nofocus: false
    }
});

const radioBtnGroup = tv({
    base: `join gap-x-1`,
    variants: {
        grid: {
            true: "grid grid-cols-2 gap-x-16"
        }
    }
});

const ErrorField = ({ error }) => {
    return error && <span className="text-sm text-red-500">{error.message}</span>;
};

export function FormItemSet({error, joined, nofocus, title, items}) {
    return [
        <fieldset className={fieldset({ error: error !== undefined, joined: joined, nofocus: nofocus })}>
            {title && <legend className="text-center m-auto">{title}</legend>}
            {...items}
        </fieldset>,
        <ErrorField error={error} />
    ];
}

export function RadioButtonGroup({ name, rules, options, control, error, grid }) {
    return (
        <div className={radioBtnGroup({ grid: grid })}>
        {options.map(option => (
            <Controller rules={rules} name={name} control={control} render={({ field }) => (
                <FormItem field={field} type="radio" text={option} />
            )} />
        ))}
        <ErrorField error={error} />
        </div>
    );
};

export function FormItem({type, id, text, classes, autocomplete, field, onclick}) {
    switch(type) {
        case "text":
        case "password":
        case "email": {
            return (
                <input type={type} id={id} {...field} placeholder={text} className={twMerge("input w-full focus:outline-none", classes)} autoComplete={autocomplete} />
            )
        }

        case "checkbox": {
            return (
                <label className="label cursor-pointer">
                    <input type="checkbox" {...field} className={twMerge("checkbox", classes)} autoComplete={autocomplete} />
                    <span className="label-text pl-2">{text}</span> 
                </label>
            )
        }

        case "radio": {
            return (
                    <label className="label justify-normal cursor-pointer">
                        <input type="radio" {...field} value={text} className={twMerge("radio", classes)} autoComplete={autocomplete} />
                        <span className="label-text pl-2">{text}</span> 
                     </label>
            )
        }

        case "submit":
        case "button": {
            return (
                <button type={type} onClick={onclick} className={twMerge("btn", classes)} autoComplete={autocomplete}>{text}</button>
            )
        }
    }
}

export function Form({id, classes, items, onsubmit}) {
    return (
        <form id={id} className={twMerge("form-control max-w-xs", classes)} onSubmit={onsubmit}>
            {...items}
        </form>
    )
}
