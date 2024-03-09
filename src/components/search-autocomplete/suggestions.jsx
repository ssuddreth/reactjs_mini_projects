export default function Suggestions({ data, handleClick }) {
    return (
        <ul>
            {data && data.length
                ? data.map((item, index) => (
                    <li style={{'listStyleType': 'none'}} onClick={handleClick} key={index}>
                        {item}
                    </li>
                ))
                : null}
        </ul>
    );
}