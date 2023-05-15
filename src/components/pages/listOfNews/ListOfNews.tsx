import React, {useState, useEffect, }  from 'react';
import './ListOfNews.css';
import Axios from 'axios';
import ProgressBar from '../../ui/ProgressBar';
import { useForm } from 'react-hook-form';
import EmptyList from '../../../assets/images/empty-list.jpeg';
import Tooltip from '@mui/material/Tooltip';
import AlertStatus from '../../ui/AlertStatus';

import DeleteIcon from '@mui/icons-material/Delete';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import SortSelectBox from '../../ui/SortSelectBox';

import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { IKidsKonnectNews, IKidsKonnectNewsPost, } from '../../../globals/types';



const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

export default function ListOfNews() {

  const [kidsKonnectNews, setkidsKonnectNews] = useState([]);
  const [open, setOpen] = useState(false);
  const [progressBar, setProgressBar] = useState(false);
  const [newsAddedAlert, setNewsAddedAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');


  let newsUrl = 'http://localhost:3001/news/';

  const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmitNewsData = (data) => {
      setProgressBar(true);
      setNewsAddedAlert(true);
      console.log(data);
      const article = data;
      Axios.post(newsUrl, article)
          .then(response => {
            handleClose();
            setAlertMessage('Item Added Successfully!');
            setTimeout(() => {
              setProgressBar(false)
              setNewsAddedAlert(false)
            }, 2000)
          });
    };
    const deleteNewsPost = (id: number) => {
      setProgressBar(true);
      setNewsAddedAlert(true);
      Axios.delete(`http://localhost:3001/news/${id}`)
          .then(response => {
            handleClose();
            setAlertMessage('Item Deleted Successfully!');
            setTimeout(() => {
              setProgressBar(false)
              setNewsAddedAlert(false);
            }, 2000)
          });
    };
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
 
  useEffect(() => {
    Axios.get(newsUrl).then((res) => {
      setkidsKonnectNews(res.data);
    }).catch((err) => console.log(err));    
  }, [kidsKonnectNews]);

    return  (
        <>
            {progressBar && <ProgressBar message={'Loading....'} /> }
            {newsAddedAlert &&  <AlertStatus message={alertMessage} /> }
            <div className="listofNews-wrapper-recomentation">
                <div className='listofNews-header'>
                        <h6>News</h6>
                       
                       <div className='newsPostbtn'>
                       <Tooltip title="Post A News">
                            <Button variant="outlined" onClick={handleClickOpen}   startIcon={<AddOutlinedIcon />}>
                              Add News
                            </Button>
                        </Tooltip>
                        </div>
                </div>
                <div className='listofNews-content'>
                  {kidsKonnectNews.length !== 0 ? kidsKonnectNews.map((item:IKidsKonnectNews, index) => {
                    return <div key={item.id} className='listofNews-card'>
                    <div className='listofNews-card-rgt'>
                      <div className='listofNews-card-prdname'>
                         <h2>
                           {index+1}. &nbsp; {item.title} <label><b>Author</b> {item.author}</label>
                         </h2>
                         <div className='newsDesc'>
                           {item.content}
                            <Tooltip title="Delete">
                              <div className='deleteIcon' onClick={() => deleteNewsPost(item.id) }>
                                <DeleteIcon  />
                              </div>
                            </Tooltip>
                          
                         </div>
                      </div>
                    </div>
                  </div>
                  }) : <>
                  <div className='dataNotExist'>
                           <img src={EmptyList} />
                           <h2> There is no List of Data!</h2>
                  </div>
                  </>}
                </div>
            </div>

            <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
        </BootstrapDialogTitle>
        <DialogContent>
          <div className='news-model'>
              <h2> Post A News</h2>
              <form onSubmit={handleSubmit(onSubmitNewsData)}>
                <h5>Title</h5>
                <input type="text" placeholder="Title" {...register("title", {required: true, maxLength: 5000})} />
                <h5>Author</h5>
                <input type="text" placeholder="Author" {...register("author", {required: true, maxLength: 50})} />
                <h5>Description</h5>
                <textarea {...register("content", {required: true, maxLength: 50000})} />
                <input type="submit" />
              </form>
          </div>
        </DialogContent>
      </BootstrapDialog>

            
        </>
    )
}
