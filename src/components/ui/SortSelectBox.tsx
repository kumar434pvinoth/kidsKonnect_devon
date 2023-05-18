import  React, {useState, useEffect, } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';              
import Select from '@mui/material/Select';


export default function SortSelectBox(props) {
  const [selectboxValue, setSelectboxValue] = useState([]);
  const handleChangeGroupe = (e) => {
    setSelectboxValue(e.target.value);
    props.handleChangeGroupeCallBack(e.target.value);
  };
  return (
    <div className='selectBoxGrupe'>
        <FormControl  sx={{  minWidth: 200  }}>
        <InputLabel id="demo-simple-select-required-label">Filter By</InputLabel>

        <Select
          labelId="demo-simple-select-required-label"
          id="demo-simple-select-required"
          value={selectboxValue}
          onChange={handleChangeGroupe}
        >
          <MenuItem value="none">
            <em>Show All Groupe</em>
          </MenuItem>
          {props.groupList.map((item: string, index) => {
            return <MenuItem key={index} value={item}>
                  {item}
            </MenuItem>
          })}
        </Select>
      </FormControl>
    </div>
  );
}
