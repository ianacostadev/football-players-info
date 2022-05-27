import { useQuery } from 'react-query';
import client from '../services/client';

const { apiGet } = client;

async function fetchTeams() {
  return apiGet('teams?country=spain&league=140&season=2021');
}

function useTeams() {
  return useQuery('teams', fetchTeams);
}

export default useTeams;
