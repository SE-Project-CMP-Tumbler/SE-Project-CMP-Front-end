/* eslint-disable max-len */
import Axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { api, apiR } from '../../apis/globalAxpi';
import { apiR as apiReal, SERVICETYPE, MOCK } from '../../apis/globalAPI';

export const getBlogTheme = createAsyncThunk(
  'blogTheme/getTheme',
  async (blogName, { getState }) => {
    if (SERVICETYPE === MOCK) {
      try {
        const response = await api.get(`blog/${blogName}/theme`);
        return response.data.response;
      } catch (e) {
        throw Error(e);
      }
    } else {
      try {
        const state = getState();
        const USERTOKEN = state.user.user.accessToken;
        const AuthStr = `Bearer ${USERTOKEN}`;
        const response1 = await apiR.get(`blog/info/${blogName}`, { headers: { Authorization: AuthStr } });
        const blogInfo = response1.data.response;
        const response = await apiR.get(`blog/${blogInfo.id}/theme`, { headers: { Authorization: AuthStr } });
        return { theme: response.data, id: blogInfo.id };
      } catch (e) {
        throw Error(e);
      }
    }
  },
);

export const putBlogTheme = createAsyncThunk(
  'blogTheme/putTheme',
  async (blogId, { getState }) => {
    if (SERVICETYPE === MOCK) {
      try {
        const response = await api.put(`blog/${blogId}/theme`);
        return response.data.response;
      } catch (e) {
        throw Error(e);
      }
    } else {
      try {
        const state = getState();
        const USERTOKEN = state.user.user.accessToken;
        const AuthStr = `Bearer ${USERTOKEN}`;
        const body = {
          replies_settings: state.blogSettings.settings.replies_settings,
          color_title: state.blogTheme.theme.color_title,
          font_title: state.blogTheme.theme.font_title,
          title: state.blogTheme.theme.title,
          font_weight_title: state.blogTheme.theme.font_weight_title,
          description: state.blogTheme.theme.description,
          background_color: state.blogTheme.theme.background_color,
          accent_color: state.blogTheme.theme.accent_color,
          body_font: state.blogTheme.theme.body_font,
          header_image: state.blogTheme.theme.header_image,
          avatar: state.blogTheme.theme.avatar,
          avatar_shape: state.blogTheme.theme.avatar_shape,
        };

        const response = await Axios({
          method: 'PUT',
          url: `${apiReal}/blog/${blogId}/theme`,
          headers: {
            Authorization: AuthStr,
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          data: body,
        });
        return response.data;
      } catch (e) {
        throw Error(e);
      }
    }
  },
);

export const zero = 0;
// nevermind this. otherwilse will have to use a default export.
