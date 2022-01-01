import Axios from 'axios';
import { api, apiR, SERVICETYPE } from '../../../apis/globalAPI';

const fetchNotes = function getNotes(postID, setLikes, setReplies, setReblogs, User) {
  if (SERVICETYPE === 0) {
    Axios({
      method: 'GET',
      url: `${api}/post_notes/${postID}`,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.data)
      .then((res) => res)
      .then((res) => {
        if (res.meta?.status === '200') {
          setLikes(res.response.likes);
          setReplies(res.response.replies);
          setReblogs(res.response.reblogs);
        } else {
          setLikes([]);
          setReplies([]);
          setReblogs([]);
        }
      });
  } else {
    Axios({
      method: 'GET',
      url: `${apiR}/post_notes/${postID}`,
      headers: {
        Authorization: `Bearer ${User.accessToken}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.data)
      .then((res) => res)
      .then((res) => {
        if (res.meta?.status === '200') {
          setLikes(res.response.likes.likes);
          setReplies(res.response.replies.replies);
          setReblogs(res.response.reblogs.reblogs);
        } else {
          setLikes([]);
          setReplies([]);
          setReblogs([]);
        }
      });
  }
};
export default fetchNotes;
