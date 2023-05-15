import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { IMessage, } from '../../globals/types';


export default function ProgressBar(props: IMessage) {
  return (
    <div className='progressbar-wrapper'>
      <CircularProgress /> < br />
      <h6>{props.message}</h6>
    </div>
  );
}
