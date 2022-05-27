import { useQuery } from 'react-query';
import client from '../services/client';

const { apiGet } = client;

async function fetchTeams() {
  return apiGet('teams?id=33');
}

function useTeams() {
  return useQuery('teams', fetchTeams);
}

export default useTeams;
