import { Game } from "../GameList/GameList";
import './GameCard.css'

function GameCard({ gameID, gameName }: Game) {
  return (
    <div className="game-card">
      <img
        src={`https://bsw-dk1.pragmaticplay.net/game_pic/square/200/${gameID}.png`}
        alt={gameName}
      />
      <h3>{gameName}</h3>
    </div>
  );
}

export default GameCard;
