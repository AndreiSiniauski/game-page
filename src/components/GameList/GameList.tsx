import { useGetGamesQuery } from "../../api/gameAPI";
import { useDispatch, useSelector } from 'react-redux';
import GameCard from "../GameCard";
import { setData, setLoading, setError, GamesState } from '../../store/slices/gamesSlice';
import './GameList.css';
import { useEffect } from "react";

export interface Game {
    gameID: string;
    gameName: string;
    platform?: string;
}

function GameList() {
  const dispatch = useDispatch();
  const { data: gamesData, displayCount, searchQuery, selectedPlatform } = useSelector((state : {games: GamesState}) => state.games);
  const { data, isLoading, isError } = useGetGamesQuery({});


  useEffect(() => {
    if (data) {
      dispatch(setData(data.result || []));
    }
    if (isLoading) {
      dispatch(setLoading(true));
    }
    if (isError) {
      dispatch(setError(true));
    }
  }, [data, isLoading, isError, dispatch]);


  if (isLoading) {
    return (
      <div className="game-list-container">
        <div className="loading-message">Loading...</div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="game-list-container">
        <div className="error-message">Error fetching data</div>
      </div>
    );
  }

  const filteredGamesPlatform = gamesData.filter((game) => {
    const platforms = game.platform?.split(',');
    if (selectedPlatform === 'ALL') {
      return gamesData;
    }
    return platforms?.includes(selectedPlatform.toUpperCase());
  });

  const filteredGames = filteredGamesPlatform.filter((game) =>
    game.gameName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const visibleGames = filteredGames.slice(0, displayCount);

  if (visibleGames.length === 0) {
    return (
      <div className="game-list-container">
        No data available
      </div>
    );
  }

  return (
    <div className="game-list-container">
        {visibleGames.map((game) => (
          <GameCard key={game.gameID} gameID={game.gameID} gameName={game.gameName} />
        ))}
    </div>
  );
}

export default GameList;
