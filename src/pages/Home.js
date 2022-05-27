/* eslint-disable react/no-array-index-key */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/button-has-type */
import * as React from 'react';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
// import Typhograpy from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useInView } from 'react-intersection-observer';
import PlayerCard from '../components/PlayerCard';
import useTeams from '../hooks/useTeams';
import usePlayers from '../hooks/usePlayers';

// const playerProps = {
//   name: 'Neymar Jr',
//   nationality: 'Brasil',
//   photo: 'https://media.api-sports.io/football/players/883.png',
//   age: 28,
//   weight: '50 kg',
//   height: '170 cm',
// };

function Home() {
  const { ref, inView } = useInView();

  const { data: teams } = useTeams();
  const {
    data: players,
    error,
    fetchNextPage,
    status,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
  } = usePlayers('33');

  const handleClick = (teamId) => {
    alert(teamId);
  };

  React.useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  console.log(hasNextPage, isFetchingNextPage);
  return status === 'loading' ? (
    <p>Loading...</p>
  ) : status === 'error' ? (
    <p>Error: {error.message}</p>
  ) : (
    <Container>
      <Box sx={{ display: 'flex', mx: 10, gap: 1 }}>
        {teams &&
          teams.response.length &&
          teams.response.map(({ team }) => (
            <Chip
              key={team.id}
              label={team.name}
              onClick={() => handleClick(team.id)}
            />
          ))}
      </Box>
      <Box
        sx={{
          display: 'flex',
          alighItems: 'center',
          flexWrap: 'wrap',
          mx: 3,
          gap: 2,
        }}
      >
        {players &&
          players.pages.map((group) => (
            <React.Fragment key={group.nextId}>
              {group.response.map(({ player }) => (
                <PlayerCard key={player.id} {...player} />
              ))}
            </React.Fragment>
          ))}
      </Box>
      <div>
        <button
          ref={ref}
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
        >
          {isFetchingNextPage
            ? 'Loading more...'
            : hasNextPage
            ? 'Load More'
            : 'Nothing more to load'}
        </button>
      </div>
      <div>{isFetching && !isFetchingNextPage ? 'Fetching...' : null}</div>
    </Container>
  );
}

export default Home;
