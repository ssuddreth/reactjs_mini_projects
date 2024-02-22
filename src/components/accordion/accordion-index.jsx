import { useState } from "react";
import data from "./data";
import "./accordion-styles.css";

export default function Accordion() {
    const [selected, setSelected] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const [multiple, setMultiple] = useState([]);

    function handleSingleSelection(getCurrentId) {
        setSelected(getCurrentId === selected ? null : getCurrentId);
    }

    function hanldeMultiSelection(getCurrentId) {
        let cpyMultiple = [...multiple];
        const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId);
        if (findIndexOfCurrentId === -1) {
            cpyMultiple.push(getCurrentId);
        } else {
            cpyMultiple.splice(findIndexOfCurrentId, 1);
        }
        setMultiple(cpyMultiple);
    }

    function handleButtonColor() {
        setIsClicked(!isClicked);
        if (enableMultiSelection) {
            setMultiple([]);
            setSelected(null);
        }
    }

    const buttonClass = isClicked ? 'clickedButton' : 'originalButton';

    return (
        <div className='wrapper'>
            <button className={buttonClass} onClick={() => {
                setEnableMultiSelection(!enableMultiSelection);
                handleButtonColor();
            }}>Enable Multi-Selection</button>
            <div className="accordion">
                {
                    data && data.length > 0 ? data.map((dataItem) =>
                        <div className='item'>
                            <div onClick={enableMultiSelection ? () => hanldeMultiSelection(dataItem.id) : () => handleSingleSelection(dataItem.id)} className="title">
                                <h3>{dataItem.question}</h3>
                                <span>+</span>
                            </div>
                            {enableMultiSelection ? multiple.indexOf(dataItem.id) !== -1 && <div className="content">{dataItem.answer}</div> : selected === dataItem.id && <div className="content">{dataItem.answer}</div>}
                        </div>)
                        : <div>No data found.</div>
                }
            </div>
        </div>
    )
}