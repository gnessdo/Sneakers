function Card() {
    return(
        <div className="card">
            <div className="favorite">
              <img src="/img/icons/heart-unliked.svg" alt="Unliked" />
            </div>
            <img width={133} height={112} src="/img/sneakers/1.png" alt="" />
            <h5>Men's sneakers Nike Air Max</h5>

            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Price:</span>
                <b>79.99 azn.</b>
              </div>

              <button className="button">
                <img width={16} height={16} src="/img/icons/btn-plus.svg" alt="Plus" />
              </button>
            </div>
          </div>
    )
}

export default Card;