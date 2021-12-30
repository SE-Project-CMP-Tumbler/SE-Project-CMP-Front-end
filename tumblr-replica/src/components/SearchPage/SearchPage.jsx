/* eslint-disable max-len */
import * as React from 'react';
import { useParams, Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import ReactLoading from 'react-loading';
import { useMediaQuery } from 'react-responsive';
import { useDispatch, useSelector } from 'react-redux';
import Alert from '@mui/material/Alert';
import PostCard from '../NewsFeed/subcomponents/PostCard/PostCard';
import './PostList.css';
import { selectSearch, fetchStuff } from '../../states/search/searchSlice';

function SearchPage() {
  const dispatch = useDispatch();
  const { word } = useParams();
  const randomRelated = ['SUNNY', 'LIFE', 'CHECKMATE', 'STRESS', 'SERIOUSLY', 'SHARK', 'CRINGE', 'CMP23'];
  React.useEffect(() => {
    dispatch(fetchStuff(word));
    randomRelated.sort(() => 0.5 - Math.random());
  }, [word]);
  const searchState = useSelector(selectSearch);
  // const Posts = searchState.searchResponse;
  // const postslen = Posts.response.posts.posts;
  const [follow, setFollow] = React.useState(0);
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)',
  });
  return (
    <>
      <div className="top-row">
        <div className="useless-div">&nbsp;</div>
        <h1 style={{ fontWeight: '300', textAlign: 'center' }}>
          {word}
        </h1>
        <button type="button" className="follow-button" onClick={() => setFollow(!follow)}>{(!follow) ? 'follow' : 'unfollow'}</button>
      </div>
      {(searchState.isLoading) ? (
        <>
          <div><ReactLoading type="bars" color="#fff" width={157} style={{ margin: 'auto', width: '10%', fill: 'white' }} /></div>
          )
        </>
      )
        : (
          <div>
            <div className="related">
              {isDesktopOrLaptop
                && (
                  <>
                    <div>RELATED: </div>
                    {randomRelated.map((item) => (<div><Link className="related-items" to={'/search/' + item}>{item}</Link></div>))}
                  </>
                )}
            </div>
            { searchState.searchResponse.meta.status === '200' ? (
              <>
                <div className="row_B">
                  <div className="column_B">
                    {searchState.searchResponse.response.posts.posts.slice(0, searchState.searchResponse.response.posts.posts.length / 4).map((post) => (
                      <Box sx={{
                        mt: 3,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                      >
                        <PostCard
                          postId={post.post_id}
                          postDate={post.post_date}
                          blogId={post.blog_id}
                          blogUsername={post.blog_username}
                          postBody={post.post_body}
                          small
                          xs={10}
                        />
                      </Box>
                    ))}
                  </div>
                  <div className="column_B">
                    {searchState.searchResponse.response.posts.posts.slice(searchState.searchResponse.response.posts.posts.length / 4, searchState.searchResponse.response.posts.posts.length / 2).map((post) => (
                      <Box sx={{
                        mt: 3,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                      >
                        <PostCard
                          postId={post.post_id}
                          postDate={post.post_date}
                          blogId={post.blog_id}
                          blogUsername={post.blog_username}
                          postBody={post.post_body}
                          small
                          xs={10}
                        />
                      </Box>
                    ))}
                  </div>
                  <div className="column_B">
                    {searchState.searchResponse.response.posts.posts.slice(searchState.searchResponse.response.posts.posts.length / 2, (searchState.searchResponse.response.posts.posts.length * 3) / 4)
                      .map((post) => (
                        <Box sx={{
                          mt: 3,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                        >
                          <PostCard
                            postId={post.post_id}
                            postDate={post.post_date}
                            blogId={post.blog_id}
                            blogUsername={post.blog_username}
                            postBody={post.post_body}
                            small
                            xs={10}
                          />
                        </Box>
                      ))}
                  </div>
                  <div className="column_B">
                    {searchState.searchResponse.response.posts.posts.slice((searchState.searchResponse.response.posts.posts.length * 3) / 4, searchState.searchResponse.response.posts.posts.length).map((post) => (
                      <Box sx={{
                        mt: 3,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                      >
                        <PostCard
                          postId={post.post_id}
                          postDate={post.post_date}
                          blogId={post.blog_id}
                          blogUsername={post.blog_username}
                          postBody={post.post_body}
                          small
                          xs={10}
                        />
                      </Box>
                    ))}
                  </div>
                </div>
              </>
            ) : ((searchState.searchResponse.error && (
              <Alert style={{ marginTop: '15%' }} severity="error">
                Component could not be loaded.
                This could be due to trouble fetching data from the backend server.
                Try switching to the mock server to see if the error persists.
              </Alert>
            ))
              || (searchState.searchResponse.meta.msg === 'Loading' && <Box style={{ marginRight: '30%' }}><ReactLoading type="bars" color="#fff" width={157} /></Box>)
            )}
            <h1 style={{
              fontWeight: '300', color: 'white', textAlign: 'center', marginTop: '5rem', marginBottom: '5rem',
            }}
            >
              This is all about it for&nbsp;
              <b>{word}</b>
              . Try another search?
            </h1>
          </div>
        )}
    </>

  );
}
export default SearchPage;
