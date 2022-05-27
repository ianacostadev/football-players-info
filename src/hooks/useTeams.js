import { useQuery } from 'react-query';
import client from '../services/client';

const { apiGet } = client;

async function fetchTeams() {
  return apiGet('players?team=33&season=2020');
}

function useTeams() {
  return useQuery('teams', fetchTeams);
}

export default useTeams;
