import { useRef } from "react";
import useFetch from "../use-fetch/use-fetch-index";


export default function ScrollToTopAndBottom() {

    const { data, error, pending } = useFetch(
        "https://dummyjson.com/products?limit=100",
        {}
    );

    const bottomRef = useRef(null);

    function handleScrollToTop() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        })
    }

    function handleScrollToBottom() {
        bottomRef.current.scrollIntoView({behavior: 'smooth'});
    }

    if (error) {
        return <h1>An Error Occured.</h1>
    }

    if (pending) {
        return <h1>Loading data...</h1>
    }

    return (
        <div>
            <h1>Scroll to Top and Bottom</h1>
            <h3>This is the Top</h3>
            <button onClick={handleScrollToBottom}>Scroll to Bottom</button>
            <ul style={{ listStyleType: 'none' }}>
                {
                    data && data.products && data.products.length ?
                        data.products.map(item => <li>{item.title}</li>)
                        : null
                }
            </ul>
            <button onClick={handleScrollToTop}>SCroll to Top</button>
            <div ref={bottomRef}></div>
            <h3>This is the Bottom</h3>
        </div>
    )
}