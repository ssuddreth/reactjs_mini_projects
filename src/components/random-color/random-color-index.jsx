import { useState, useEffect } from "react";

export default function RandomColor() {
    const [typeOfColor, setTypeOfColor] = useState('hex');
    const [color, setColor] = useState('#000000');
    const [activeButton, setActiveButton] = useState(null);

    function randomColorUtility(length) {
        return Math.floor(Math.random() * length);
    }

    function handleCreateRandomHexColor() {
        const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
        let hexColor = '#';
        for (let i = 0; i < 6; i++) {
            hexColor += hex[randomColorUtility(hex.length)];
        }
        setColor(hexColor);
        setActiveButton('hex');
    }

    function handleCreateRandomRgbColor() {
        const r = randomColorUtility(256);
        const g = randomColorUtility(256);
        const b = randomColorUtility(256);
        setColor(`rgb(${r}, ${g}, ${b})`);
        setActiveButton('rgb');
    }

    useEffect(() => {
        if (typeOfColor === "rgb") handleCreateRandomRgbColor();
        else handleCreateRandomHexColor();
    }, [typeOfColor]);

    return (
        <div style={{
            width: '100vw',
            height: '100vh',
            background: color,
        }}>
            <button
                onClick={() => setTypeOfColor('hex')}
                style={{ backgroundColor: activeButton === 'hex' ? '#fff' : '#c7c4c4' }}
            >
                HEX Color Mode
            </button>
            <button
                onClick={() => setTypeOfColor('rgb')}
                style={{ backgroundColor: activeButton === 'rgb' ? '#fff' : '#c7c4c4' }}
            >
                RGB Color Mode
            </button>
            <button
                onClick={typeOfColor === 'hex' ? handleCreateRandomHexColor : handleCreateRandomRgbColor}
            >
                Generate Random Color
            </button>
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#fff",
                fontSize: "60px",
                marginTop: "50px",
                flexDirection: 'column',
                gap: '20px'
            }}>
                <h3>{typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}</h3>
                <h1>{color}</h1>
            </div>
        </div>
    );
}