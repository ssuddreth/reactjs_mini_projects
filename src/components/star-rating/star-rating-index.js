import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import './star-rating-styles.css';

export default function StarRating({ noOfStars = 5 }) {

    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);

    function handleClick(getCurrentIndex) {
        setRating(getCurrentIndex)
    }

    function handleMouseEnter(getCurrentIndex) {
        setHover(getCurrentIndex)
    }

    function handleMouseLeave() {
        setHover(rating)
    }

    return (
        <div className="star-rating" className='background'>
            {
                [...Array(noOfStars)].map((_, index) => {
                    return <FaStar
                        key={index}
                        className={index <= (hover || rating) ? "active" : "inactive"}
                        onClick={() => handleClick(index)}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={() => handleMouseLeave()}
                        size={50}
                    />
                })
            }
        </div>
    )
}