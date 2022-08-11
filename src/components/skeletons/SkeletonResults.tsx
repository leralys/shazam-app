import React from 'react';
import { Skeleton, Box } from '@mui/material';
import { MAX_RESULTS_API } from '../../utils/maxValues';
import COLORS from '../../utils/colors';

const SkeletonResults = () => {
  const list = Array(MAX_RESULTS_API).fill(0);
  return (
    <>
      {list.map((el, index) => (
        <Box
          key={`skeleton-${index}`}
          sx={{
            display: 'flex',
            mb: 2,
            justifyContent: 'center',
          }}
        >
          <Skeleton
            variant='rectangular'
            width={'3rem'}
            height={'3rem'}
            sx={{
              bgcolor: COLORS.white,
              minWidth: '3rem',
            }}
          />
          <Box
            sx={{
              width: '90%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Skeleton
              variant='text'
              width={'30%'}
              sx={{ bgcolor: COLORS.white, ml: 2 }}
            />
            <Skeleton
              variant='text'
              width={'30%'}
              sx={{ bgcolor: COLORS.white, ml: 2 }}
            />
          </Box>
        </Box>
      ))}
    </>
  );
};

export default SkeletonResults;
