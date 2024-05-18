import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import Image from 'src/components/image';

interface ITextItemProps {
  title: string;
  detail: string;
  color?: string;
  showBottom?: boolean;
}

function TextItem({ title, detail, color = 'white', showBottom = false }: ITextItemProps) {
  return (
    <Stack
      sx={{
        backgroundColor: '#141A36',
        p: 2,
        borderRadius: 1,
        gap: 2,
      }}
    >
      <Typography variant="subtitle1" sx={{ ml: 2 }}>
        {title}
      </Typography>

      <Stack
        sx={{
          backgroundColor: '#262840',
          borderRadius: 1,
          p: 2,
          mx: 2,
          position: 'relative',
        }}
      >
        <Stack flexDirection="row" alignItems="center" justifyContent="space-between">
          <Image src="/assets/admin/passive_invest/icon.svg" sx={{ mt: 1 }} />
          <Typography
            variant="h3"
            color={color}
            sx={{
              lineHeight: 2,
            }}
          >
            {detail}
          </Typography>
        </Stack>

        {showBottom && (
          <Typography
            variant="subtitle2"
            color={color}
            sx={{
              position: 'absolute',
              bottom: 8,
              right: 16,
            }}
          >
            +10%
          </Typography>
        )}
      </Stack>
    </Stack>
  );
}

export default TextItem;
