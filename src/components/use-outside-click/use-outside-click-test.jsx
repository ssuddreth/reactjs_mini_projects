import { useRef, useState } from "react";
import useOutsideClick from "./use-outside-click-index";


export default function UseOnclickOutsideTest() {

    const [showContent, setShowContent] = useState(false);
    const ref = useRef();
    useOutsideClick(ref, () => setShowContent(false));

    return (
        <div>
            {
                showContent ?
                    <div ref={ref}>
                        <h1>Random Content Title</h1>
                        <p>Click outside to close...</p>
                    </div> : <button onClick={() => setShowContent(true)}>Show Content</button>
            }
        </div>
    )
}