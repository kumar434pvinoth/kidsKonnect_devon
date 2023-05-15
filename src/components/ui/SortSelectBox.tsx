import  React, {useState, useEffect, } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';


// export interface IGroupListProps {
//   groups: string;
//   handleChangeGroupeCallBack: (string) => void;
// }
export default function SortSelectBox(props) {
  
  const [selectboxValue, setSelectboxValue] = React.useState('');

  const [item, setItem] = useState([]);
  const groupeListTemp = ['Group 1','Group 2','Group 3','Group 4','Group 5']
  const handleChangeGroupe = (e) => {
    setSelectboxValue(e.target.value);
    props.handleChangeGroupeCallBack(e.target.value);
    // props.setProgressBar(true);
  };
  useEffect(() => {
    console.log('---------' + JSON.stringify(props.groupeList));
    // let duplicatesGroupeJSON = JSON.stringify(props.groupeList).reduce((acc, curr) => {
    //       return acc.includes(item) ? acc : [...acc , curr];
    // }, []);

    // let removeDuplicatesGroupe = [...new Set(JSON.stringify(duplicatesGroupeJSON))];
    // // console.log('removed' + duplicatesGroupeJSON);

    // setItem(removeDuplicatesGroupe);
    // console.log("removeDuplicatesGroupe--" + JSON.stringify(removeDuplicatesGroupe));

  }, []);
 

  return (
    <div className='selectBoxGrupe'>
        <span>Sort By Group </span> &nbsp;&nbsp;
        <FormControl  sx={{  minWidth: 200  }}>
        <InputLabel id="demo-simple-select-required-label">Group By</InputLabel>

        <Select
          labelId="demo-simple-select-required-label"
          id="demo-simple-select-required"
          value={selectboxValue}
          onChange={handleChangeGroupe}
        >
          <MenuItem value="none">
            <em>Show All Groupe</em>
          </MenuItem>
          {groupeListTemp.map((item: string, index) => {
            return <MenuItem key={index} value={item}>
                  {item}
            </MenuItem>
          })}
        </Select>
      </FormControl>
    </div>
  );
}
