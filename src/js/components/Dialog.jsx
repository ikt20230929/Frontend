export function Dialog(props) {
    return [
        <dialog id={props.id} class="modal">
            <div class="modal-box">
                <h3 class="font-bold text-lg">{props.title}</h3>
                <pre class="py-4">{props.text}</pre>
            </div>
            <form method="dialog" class="modal-backdrop">
                <button>Bezárás</button>
            </form>
        </dialog>
    ]
}