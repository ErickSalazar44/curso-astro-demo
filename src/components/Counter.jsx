import { useState } from "preact/hooks";

export function Counter() {
    const [counter, setCounter] = useState(0);

    return (
        <article class='flex gap-10'>
            <button
                class={"border w-10 rounded-sm"}
                onClick={() => setCounter(counter - 1)}
            >
                -
            </button>
            <span class={"text-2xl"}>{counter}</span>

            <button
                class={"border w-10 rounded-sm"}
                onClick={() => setCounter(counter + 1)}
            >
                +
            </button>
        </article>
    );
}
