export function Dialog(props) {
    return (
        <dialog id={props.id} className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-lg">{props.title}</h3>
                <pre className="py-4">{props.text}</pre>
            </div>
            <form method="dialog" className="modal-backdrop">
                <button>Bezárás</button>
            </form>
        </dialog>
    )
}