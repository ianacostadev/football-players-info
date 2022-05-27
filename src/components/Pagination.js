import * as React from 'react';
import { Box, Typography } from '@mui/material';
import { useInView } from 'react-intersection-observer';

function Pagination({ fetchNextPage, hasNextPage, isFetchingNextPage }) {
  const { ref, inView } = useInView();

  React.useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', my: 5 }}>
      <button
        type="button"
        ref={ref}
        onClick={() => fetchNextPage()}
        disabled={!hasNextPage || isFetchingNextPage}
      >
        <Typography variant="h3">
          {isFetchingNextPage
            ? 'Loading more...'
            : hasNextPage
            ? 'Load More'
            : 'Nothing more to load'}
        </Typography>
      </button>
    </Box>
  );
}

export default Pagination;
