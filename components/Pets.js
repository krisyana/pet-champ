export default function Pets() {
  return (
    <div className="pets">
      <h3 className="heading-3">Top 3 Pet</h3>
      <div className="pets__list">
        <img
          src="https://images.unsplash.com/photo-1552053831-71594a27632d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=612&q=80"
          alt="Pets Champ"
          className="pets__img"
        />
        <div className="pets__details">
          <h4 className="heading-4 heading-4--light">Good boi</h4>
          <p className="pets__won">12 time Champion</p>
        </div>

        <img
          src="https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80"
          alt="Pets Champ"
          className="pets__img"
        />
        <div className="pets__details">
          <h4 className="heading-4 heading-4--light">Good girl</h4>
          <p className="pets__won">11 time Champion</p>
        </div>

        <img
          src="https://images.unsplash.com/photo-1452570053594-1b985d6ea890?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
          alt="Pets Champ"
          className="pets__img"
        />
        <div className="pets__details">
          <h4 className="heading-4 heading-4--light">Good birb</h4>
          <p className="pets__won">10 time Champion</p>
        </div>
      </div>
    </div>
  );
}
