import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';

const Liked = () => {
    const [liked, setLiked] = useState(false);
  return (
    <div>
        <button className="liked-button" onClick={(e) => setLiked(!liked)}>
        <FontAwesomeIcon icon={liked ? solidHeart : regularHeart} />
        </button>
    </div>
  )
}

export default Liked