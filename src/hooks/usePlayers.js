import { useInfiniteQuery } from 'react-query';
import client from '../services/client';

const { apiGet } = client;

async function fetchPlayers({ teamId, pageParam = 1 }) {
  return apiGet(`players?team=${teamId}&season=2021&page=${pageParam}`);
}
function usePlayers(teamId, enabled) {
  return useInfiniteQuery(
    ['players', teamId],
    ({ pageParam }) => fetchPlayers({ teamId, pageParam }),
    {
      enabled,
      getNextPageParam: (lastPage) =>
        lastPage.paging.current < lastPage.paging.total
          ? lastPage.paging.current + 1
          : undefined,
    }
  );
}

export default usePlayers;
