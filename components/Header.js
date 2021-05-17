export default function Header() {
  return (
    <header className="header">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/1/1f/Pet_logo_with_flowers.png"
        alt="Logo"
        className="header__logo"
      />
      <h3 className="heading-3">PetChamp</h3>
      <h1 className="heading-1">Best Pet Website Around</h1>
      <button className="btn header__btn">View Best Pets</button>
      <div className="header__seenon-text">Made With</div>
      <div className="header__seenon-logos">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/1/1f/Pet_logo_with_flowers.png"
          alt="Logo"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/1/1f/Pet_logo_with_flowers.png"
          alt="Logo"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/1/1f/Pet_logo_with_flowers.png"
          alt="Logo"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/1/1f/Pet_logo_with_flowers.png"
          alt="Logo"
        />
      </div>
    </header>
  );
}
