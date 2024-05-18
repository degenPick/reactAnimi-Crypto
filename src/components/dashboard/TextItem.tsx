import { Stack, Typography } from '@mui/material';
import React from 'react';

export interface IDashBoardTextItemPros {
  title?: string;
  description?: string;
  align?: string;
}

function TextItem({ title, description, align }: IDashBoardTextItemPros) {
  return (
    <Stack
      mt={4}
      sx={{ color: 'grey.200', backgroundColor: '#0F1531', borderRadius: 1, px: 4, py: 2, gap: 2 }}
    >
      {title && (
        <Typography variant="subtitle2" sx={{ textAlign: align ?? 'center' }}>
          {title}
        </Typography>
      )}
      {description && (
        <Typography variant="subtitle2" sx={{ textAlign: align ?? 'center', color: 'grey.500' }}>
          {description ?? ''}
        </Typography>
      )}
    </Stack>
  );
}

export default TextItem;
