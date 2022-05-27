import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import Typhograpy from '@mui/material/Typography';

import PlayerCard from '../components/PlayerCard';
import useTeams from '../hooks/useTeams';

const playerProps = {
  name: 'Neymar Jr',
  nationality: 'Brasil',
  photo: 'https://media.api-sports.io/football/players/883.png',
  age: 28,
  weight: '50 kg',
  height: '170 cm',
};

function Home() {
  const { data } = useTeams();

  const handleClick = (teamId) => {
    alert(teamId);
  };
  return (
    <Box>
      <Box sx={{ display: 'flex' }}>
        <Chip label="Clickable" onClick={() => handleClick('1')} />
      </Box>
      <Typhograpy variant="h1">Hello wold</Typhograpy>
      <Box sx={{ width: 300, margin: 'auto' }}>
        <PlayerCard {...playerProps} />
        <Typhograpy variant="h1">{JSON.stringify(data)}</Typhograpy>
      </Box>
    </Box>
  );
}

export default Home;
