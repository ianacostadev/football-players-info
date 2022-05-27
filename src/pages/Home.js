import * as React from 'react';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import Pagination from '../components/Pagination';
import PlayerCard from '../components/PlayerCard';
import Header from '../components/Header';
import useTeams from '../hooks/useTeams';
import usePlayers from '../hooks/usePlayers';

function Home() {
  const [currentTeam, setTeam] = React.useState(null);
  const { data: teams } = useTeams();
  const {
    data: players,
    refetch,
    fetchNextPage,
    isLoading,
    hasNextPage,
    isFetchingNextPage,
  } = usePlayers(currentTeam, currentTeam !== null);

  const handleClick = (teamId) => {
    setTeam(teamId);
    refetch();
  };

  return (
    <>
      <Header />
      <Container>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 1,
            mt: 5,
            mb: 3,
          }}
        >
          {teams &&
            teams.response.length &&
            teams.response.map(({ team }) => (
              <Chip
                key={team.id}
                label={team.name}
                color={currentTeam === team.id ? 'success' : 'default'}
                onClick={() => handleClick(team.id)}
              />
            ))}
        </Box>

        {isLoading && <p>Loading...</p>}

        <Box
          sx={{
            display: 'flex',
            alighItems: 'center',
            flexWrap: 'wrap',
            mx: 3,
            gap: 2,
          }}
        >
          {currentTeam &&
            players &&
            players.pages.map((group) => (
              <React.Fragment key={group.nextId}>
                {group.response.map(({ player }) => (
                  <PlayerCard key={player.id} {...player} />
                ))}
              </React.Fragment>
            ))}
        </Box>
        {currentTeam && !isLoading && (
          <Pagination
            fetchNextPage={fetchNextPage}
            hasNextPage={hasNextPage}
            isFetchingNextPage={isFetchingNextPage}
          />
        )}
      </Container>
    </>
  );
}

export default Home;
