import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';

function PlayerCard({ name, photo, nationality, age, weight, height }) {
  return (
    <Card
      sx={{
        display: 'flex',
        width: ['100%', '100%', '30.33%'],
        justifyContent: 'space-between',
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {name}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {nationality}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            Age:{age}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            Height:{height} Weight:{weight}
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }} />
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={photo}
        alt="Live from space album cover"
      />
    </Card>
  );
}

export default PlayerCard;
