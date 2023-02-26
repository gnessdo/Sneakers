import React, {useState} from "react";
import moduleStyles from './Card.module.scss';

function Card(props) {

  const [isAdded, setIsAdded] = useState(false);

  const onClickPlus = () => {
    setIsAdded(!isAdded);
  }

  const [onFavorite, setOnFavorite] = useState(false);

  const onClickFavorite = () => {
    setOnFavorite(!onFavorite);
  }
  
    return(
        <div className={moduleStyles.card}>
            <div className={moduleStyles.favorite} onClick={props.onFavorite} >
              <img 
              className={moduleStyles.favorite}
              onClick={onClickFavorite}
              src={onFavorite ? "/img/icons/heart-liked.svg" : "/img/icons/heart-unliked.svg" } 
              />
              
            </div>
            <img width={133} height={112} src={props.imageUrl} alt="Sneakers" />
            <h5>{props.title}</h5>

            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Price:</span>
                <b>{props.price}</b>
              </div>
                <img 
                className={moduleStyles.plus} 
                style={{cursor: "pointer"}} 
                onClick={onClickPlus} width={16} height={16} 
                src={isAdded ? "/img/icons/btn-checked.svg" : "/img/icons/btn-plus.svg" } alt="Plus" />
            </div>
          </div>
    );
}

export default Card;