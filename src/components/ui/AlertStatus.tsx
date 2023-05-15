import * as React from 'react';
import Alert from '@mui/material/Alert';


export interface IAlertMessage {
  message: string;
}
export default function AlertStatus(props: IAlertMessage) {
  return (
    <div className='newsAlertStatus'>
          <Alert variant="filled" severity="success">
                {props.message}
          </Alert>
    </div>
  );
}
