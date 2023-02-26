
function Drawer(props) {
    return (
        <div className="overlay">
            <div className="drawer">
                <h2 className="d-flex justify-between mb-30">
                    Basket {' '}
                    <img onClick={props.onClose} width={20} height={20} className="cu-p" src="/img/icons/btn-remove.svg" alt="Close" />
                </h2>

                <div className="items">
                    <div className="cartItem d-flex align-center mb-20">
                        <div
                            style={{ backgroundImage: 'url(/img/sneakers/1.jpg' }}
                            className="cartItemImg"></div>

                        <div className="mr-20 flex">
                            <p className="mb-5s">Nike Air force for men</p>
                            <b>249 99 azn.</b>
                        </div>
                        <img width={25} height={25} className="removeBtn" src="/img/icons/btn-remove.svg" alt="Remove" />
                    </div>
                    <div className="cartItem d-flex align-center mb-20">
                        <div
                            style={{ backgroundImage: 'url(/img/sneakers/2.jpg' }}
                            className="cartItemImg"></div>

                        <div className="mr-20 flex">
                            <p className="mb-5s">Nike Air Max 270</p>
                            <b>279.99 azn.</b>
                        </div>
                        <img width={25} height={25} className="removeBtn" src="/img/icons/btn-remove.svg" alt="Remove" />
                    </div>

                    <div className="cartItem d-flex align-center mb-20">
                        <div
                            style={{ backgroundImage: 'url(/img/sneakers/3.jpg' }}
                            className="cartItemImg"></div>

                        <div className="mr-20 flex">
                            <p className="mb-5s">onClickCart</p>
                            <b>149.99 azn.</b>
                        </div>
                        <img width={25} height={25} className="removeBtn" src="/img/icons/btn-remove.svg" alt="Remove" />
                    </div>
                </div>

                <div className="cartTotalBlock">
                    <ul>
                        <li>
                            <span>Total</span>
                            <div></div>
                            <b>139 99 azn.</b>
                        </li>
                        <li>
                            <span>Tax 5%</span>
                            <div></div>
                            <b>0.70 azn.</b>
                        </li>
                    </ul>
                    <button className="greenButton">
                        Checkout Order <img src="/img/icons/arrow.svg" alt="Arrow" />
                    </button>
                </div>

            </div>
        </div>
    );
}

export default Drawer;