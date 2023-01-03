function Header() {
    return(
        <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={70} height={35} src="/img/icons/logo.png" />
          <div>
            <h3 className="text-uppercase"> React Sneakers</h3>
            <p className="opacity-3">The best Sneakers store</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
            <img width={18} height={18} src="/img/icons/cart.svg" />
            <span>80 azn.</span>
          </li>
          <li>
            <img width={18} height={18} src="/img/icons/user.svg" />
          </li>
        </ul>
      </header>
    );
}

export default Header;