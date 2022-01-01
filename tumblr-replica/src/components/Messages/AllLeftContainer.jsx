import './css/leftContainer.css';
import React from 'react';
import { useSelector } from 'react-redux';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import { useMediaQuery } from 'react-responsive';
import PropTypes from 'prop-types';
import { getAllMessages } from '../../states/retriveallmessagesslice/retriveallmessagesslice';
import PostCard from '../AskSubmitPosts/subcomponents/PostCard/PostCard';

const t = true;
/**
 * Component called Allmessages.jsx
 * then its read the current state of all messages and show them
 * it view the blogs of this user that allow ask or submission
 * @component
 * @name
 * AllLeftContainer
 * @example
 * <PostCard posts={posts} />
 * return (
 *   <AllLeftContainer />
 * )
 */
function AllLeftContainer({ BlogId }) {
  const Posts = useSelector(getAllMessages).response.messages;
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)',
  });
  return (
    <div className="lContainer">
      {Posts
        && Posts.map((post) => (

          <Grid
            item
            xs
            container
            direction="row"
            key={post.post_status === 'submission' ? post.post_id : post.question_id}
            spacing={2}
            style={{ justifyContent: 'center', alignItems: 'flex-start', display: 'flex' }}
            sx={{ mb: 2, mt: 0 }}
          >
            {isDesktopOrLaptop && (
              <Grid item>
                <Avatar
                  // eslint-disable-next-line no-nested-ternary
                  src={post.post_status === 'submission' ? post.blog_avatar : post.question_flag ? 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAACjlBMVEXq6uoAAADo6Oju7u6srKzz8/Py8vLp6emzs7Orq6uurq6tra0eHh4ZGRnw8PC0tLTn5+clJSW1tbWlpaWxsbHx8fGwsLCmpqYhISHt7e2vr6+ysrInJyeRkZGioqKenp6Wlpa3t7cfHx8dHR0gICAYGBiVlZUICAgmJiYbGxttbW1cXFwaGhqAgIAiIiLs7OyPj48XFxeZmZm+vr7a2trr6+twcHCqqqr09PTh4eEwMDAkJCSSkpIyMjIQEBBZWVkVFRUcHByXl5cREREuLi4qKirc3Nz////v7++BgYGgoKAxMTGTk5Ojo6OcnJxOTk4jIyNISEhxcXGGhobT09OCgoKLi4vm5ubo6OehoaEJCQnAwMDZ2tldXV2NjY06OjosLCzf4N9iYmLg4ODS0tJhYWFRUVFSUlKQkJBDQ0MSEhKJiYn4+PhHR0cWFhZlZWWKioq/v79ERETa2tk0NDSoqKhra2tCQkJMTExfX18ODg62trYzMzN5eXnm5uVNTU39/f3i4uKOjo4ICQji4eFJSUkDAwPY19hgYGBPT0/Y2Nh3d3fIyMg3Nzerqqt4eHjb29spKSnMzMw9PT2pqalXV1eKiYoICActLS3X19bv7+67uruUlJTn6OfT0tJmZmZ7e3s7OztkZGQvLi9LS0tqamqfn598fHzz8vKEhITBwcHc29v39/dzc3MzMjMrKys4ODhUVFQTExOtrK0gHyC6urrq6ul6enoMDAyampp0dHRaWloMDQwEBAQ8PDzw7/D29vYLCwuHh4fu7u0+PT52dna5ublsbGze3t5bW1ylpKQ/Pz+ura5BQUGkpKQUFBQvLy81NTVGRkYGBgbc3NtFRUXy8vHl5eXT1NPU1NOoXG+JAAADEklEQVR4Xs2U03slWxTET7V9aBuxbdsa27Zt27y0bdvGf3P7SzJzcpLM5HXqqR9+X+3Va9cuzaMkllDFTknp2ExSUchM9eOhZmSReTBv4e2Zg+Yi8sG2Q/a/G6iev+bq9a+sLyhsoO26B9gxC2rO4bvmto6OtubUtAz3QWYyU5alc5dB/55fy5lMnMFA9cbKc2mWncgpRqA+R8vzlCqeEgyWFHxvnkASjBU2pBtOi6OieNF/GUaaSOZuMbkqt9ghqkqg/rVYx+iSDrYv+Al6ZHG8OFa8P+XlfXY26eAI6rGMF4bnGx7zDXF4UpubGbN6ljxbHtUjRTW0mJxOzuk0OURKsDgtN2a75tH590kdLUIvoZcTf/R4fe6spZEOo2Aq9OS4l+4/0FFcTL59z1E5g9I4yrSbNi+WK/Ah8FH51sofXFXYDuCxx/0KMcJl/rMHNnm7b0dWdwGqXSg5fnIOgNqqeizSvXXh0trRJRHkzLorgThucu7NtmwXsvsa38fGJXI8ho8/+XQJvvo2kx0Bm/qCy4MSVmiNNd3L8Wp+Yz/S+n2rVmPN3pWVwPMv6jRjQBte4gTvocPBI41HUXHM2XICW1aSpzAXM8zEKEhueCIqBfCkKHhScb4xHXUY0F4sa53FzsdVBK5dJzSJnwnF5YoI195csvU1vI47Dkrw3i0F3g0jp4nVjF2P/CZmOfma5g86t1W+QwmUwEfSF6XOlwoUTfLCw2lBDBgK2z3tLUaLQImiwHumeVqyxSJd0hVOl2Tps7ppHCWoolROlYPa8XlGwxdscihishzAly2cGon76REdpWU0MT5mXWE5hNY2rUlNzUiKhK+/2anGbHxwqwMqGa196mknZ7I4HCaO458ZF1xVxLNWVHfJYUlGaNtzOe3Wn72ze+bAShMTH5cViEnhtNAvgPzrb62ubGCTebJnyKzbgqi+NBTqygjK6q7w+wwmwSUXgG8ngD9qa6cD2OgrThTA+Eph/hR2dZZIUknnLuEFxj70kJKild15//6Xt1uhSYKdqvaamhK1N3WRPkL6H3qfoJ+KtxZaAAAAAElFTkSuQmCC' : post.blog_avatar}
                  variant="square"
                  xs={2}
                  style={{
                    maxWidth: 64,
                    minWidth: 64,
                    maxHeight: 64,
                    minHeight: 64,
                  }}
                />
              </Grid>
            )}
            <Grid item>
              <PostCard
                postId={post.post_status === 'submission' ? post.post_id : post.question_id}
                blogId={post.post_status === 'submission' ? post.blog_id : post.blog_id}
                // eslint-disable-next-line no-nested-ternary
                blogUsername={post.post_status === 'submission' ? post.blog_username : post.question_flag ? 'Anonymous' : post.blog_username}
                postBody={post.post_status === 'submission' ? post.post_body : post.question_body}
                // eslint-disable-next-line no-nested-ternary
                blogAvatar={post.post_status === 'submission' ? post.blog_avatar : post.question_flag ? 'data:image/png;base64,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' : post.blog_avatar}
                postType={post.post_status}
                userId={BlogId}
                isAll={t}
                xs={10}
                sx={{ mt: 0 }}
              />
            </Grid>
          </Grid>

        ))}
    </div>
  );
}
AllLeftContainer.propTypes = {
  BlogId: PropTypes.func.isRequired,
  /**
 * @parma {BlogId}
* blogid is reqiuerd to follow and block apis
*/
};
export default AllLeftContainer;
