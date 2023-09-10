import { useDispatch, useSelector } from "react-redux";
import FilterBar from "../components/FilterBar";
import GameList from "../components/GameList";
import SearchBar from "../components/SearchBar";
import { GamesState, setDisplayCount } from "../store/slices/gamesSlice";
import { useEffect, useRef } from "react";

function Games() {
  const dispatch = useDispatch();
  const { displayCount } = useSelector((state: { games: GamesState }) => state.games);
  const gameListRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (gameListRef.current) {
        const { scrollHeight, scrollTop, clientHeight } = gameListRef.current;

        if (scrollHeight - scrollTop === clientHeight) {
          handleShowMore();
        }
      }
    };

    if (gameListRef.current) {
      gameListRef.current.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (gameListRef.current) {
        gameListRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, [displayCount, dispatch]);

  const handleShowMore = () => {
    const newDisplayCount = displayCount + 12;
    dispatch(setDisplayCount(newDisplayCount));
  };

  return (
    <div
      ref={gameListRef}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        justifyContent: 'flex-start',
        alignItems: 'center',
        overflowY: 'auto',
        height: '95vh',
        width: '100%',
      }}
    >
      <SearchBar />
      <FilterBar />
      <GameList />
    </div>
  );
}

export default Games;
