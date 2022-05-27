import { useInfiniteQuery } from 'react-query';
import client from '../services/client';

const { apiGet } = client;

async function fetchPlayers({ pageParam = 1 }) {
  return apiGet(`players?team=33&season=2021&page=${pageParam}`);
}
function usePlayers() {
  return useInfiniteQuery(['players'], fetchPlayers, {
    getNextPageParam: (lastPage) =>
      lastPage.paging.current < lastPage.paging.total
        ? lastPage.paging.current + 1
        : undefined,
  });
}

export default usePlayers;
