import * as React from 'react';
import PropTypes from 'prop-types';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import ReactLoading from 'react-loading';
import { useDispatch, useSelector } from 'react-redux';
import FollowingTag from './FollowingTag';
import EditPopup from './EditPopup';
import { fetchAsyncfollowtags, getAllfollowtags } from '../../states/features/followtags/followtagsSlice';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }}>
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
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
};
/**
 * Component for render all the tags the blog follow
 * it has list of {@link FollowingTag}.
 *
 * @component
 * @name
 * FollowingList
 * @example
 * return (
 *   <FollowList />
 * )
 */
export default function FollowingList() {
  const [open, setOpen] = React.useState(false);
  const [start, setStart] = React.useState(0);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchAsyncfollowtags());
  }, []);
  const followtags = useSelector(getAllfollowtags);
  const tags = followtags.response.tags.filter((tag) => tag.follow === true);
  const maxlen = followtags.response.tags.length;
  const handleStart = () => {
    setStart(((start + 4) % maxlen));
  };
  // console.log(followtags);
  // const tags = [];
  // followtags.response.tags.map((tag) => (tags.push(tag.tag_description)));

  return (
    <Box sx={{ width: '100%', maxWidth: 320, marginTop: 6 }} style={{ backgroundColor: '#122943' }}>
      {
      followtags.meta.status === '200'
        ? (
          <nav aria-label="main mailbox folders">
            <List>
              <ListItem disablePadding>
                <ListItemText
                  primary="Following"
                  sx={{ p: 1 }}
                  primaryTypographyProps={{
                    fontSize: 20,
                    fontWeight: 'bolder',
                    letterSpacing: 0,
                    color: 'rgb(255,255,255)',
                  }}
                />
                <div sx={{ width: '600px' }}>
                  <Button variant="text" sx={{ textTransform: 'none', fontWeight: 'bold' }} onClick={handleClickOpen}>
                    Edit
                  </Button>
                  <BootstrapDialog
                    onClose={handleClose}
                    aria-labelledby="customized-dialog-title"
                    open={open}
                  >
                    <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                      Tags you follow
                    </BootstrapDialogTitle>
                    <DialogContent dividers>
                      <EditPopup />
                    </DialogContent>
                  </BootstrapDialog>
                </div>
              </ListItem>
              <Divider />
              {tags.slice(start, start + 4)
                .map((tag) => (
                  <FollowingTag
                    key={tag}
                    tag={tag.tag_description}
                    imagUrl={tag.tag_image}
                  />
                ))}
              <Divider />
              <ListItem disablePadding sx={{ justifyContent: 'center' }}>
                <Button variant="text" onClick={handleStart} sx={{ textTransform: 'none', fontWeight: 'bold' }}>
                  Show more Tags
                </Button>
              </ListItem>
            </List>
          </nav>
        )
        : ((followtags.error && (
          <Alert style={{ marginTop: '15%' }} severity="error">
            Component could not be loaded.
            This could be due to trouble fetching data from the backend server.
            Try switching to the mock server to see if the error persists.
          </Alert>
        ))
                || (followtags.meta.msg === 'Loading' && <Box style={{ marginLeft: '30%' }}><ReactLoading type="bars" color="#fff" width={70} /></Box>)
        )
            }
    </Box>
  );
}
