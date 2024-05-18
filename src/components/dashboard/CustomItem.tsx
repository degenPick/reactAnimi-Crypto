import {
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Stack,
  Typography,
} from '@mui/material';

import React, { Component } from 'react';
import Image from 'src/components/image';
import PassiveInvestIcon from '../../../assets/images/passive-invest-color.png';
import AffiliateIcon from '../../../assets/images/affiliate-color.png';
import ActiveInvestIcon from '../../../assets/images/active-invest-color.png';

export interface ICustomItemProps {
  title: string;
  descriptions: string[];
  path?: string;
  showOnlyDescription?: boolean;
}
function CustomItem({ title, descriptions, path, showOnlyDescription = false }: ICustomItemProps) {
  return (
    <Box
      sx={{ color: 'grey.200', backgroundColor: '#0F1531', borderRadius: 1, p: 2, flex: 1, m: 1 }}
    >
      {/* <Icon /> */}
      <Image
        alt={path ?? '/assets/active_invest/active-invest-color.png'}
        src={path ?? '/assets/active_invest/active-invest-color.png'}
        disabledEffect
        sx={{ borderRadius: 1, mb: 1, width: '100px', mt: 1 }}
      />
      <Typography variant="h6" mt={2}>
        {title}
      </Typography>
      <Divider sx={{ mt: 2 }} />
      {!showOnlyDescription && (
        <List>
          {descriptions.map((text, index) => (
            <ListItem key={index} sx={{ px: 0 }}>
              <ListItemAvatar>
                <Image alt="/assets/list_icon.png" src="/assets/list_icon.png" disabledEffect />
              </ListItemAvatar>
              <ListItemText
                primary={text}
                primaryTypographyProps={{
                  noWrap: false,
                  component: 'span',
                  variant: 'subtitle2',
                  color: 'grey',
                }}
              />
            </ListItem>
            // <></>
          ))}
        </List>
      )}
      {showOnlyDescription && (
        <Typography variant="subtitle2" color="grey.500" sx={{ mt: 2 }}>
          {descriptions[0] ?? ''}
        </Typography>
      )}
    </Box>
  );
}

export default CustomItem;
