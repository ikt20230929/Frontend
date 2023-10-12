import React from "react"

export function Dialog({id, title, text}) {
    return (
        <dialog id={id} className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-lg">{title}</h3>
                <pre className="py-4">{text}</pre>
            </div>
            <form method="dialog" className="modal-backdrop">
                <button>Bezárás</button>
            </form>
        </dialog>
    )
}