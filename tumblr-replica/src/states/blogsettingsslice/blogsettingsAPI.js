/* eslint-disable max-len */
import Axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { api, apiR } from '../../apis/globalAxpi';
import { apiR as apiReal, SERVICETYPE, MOCK } from '../../apis/globalAPI';

export const getBlogId = createAsyncThunk(
  'blogSettings/info',
  async (blogName, { getState }) => {
    if (SERVICETYPE === MOCK) {
      try {
        const response = await api.get(`blog/info/${blogName}`);
        return response.data.response;
      } catch (e) {
        throw Error(e);
      }
    } else {
      try {
        const state = getState();
        const USERTOKEN = state.user.user.accessToken;
        const AuthStr = `Bearer ${USERTOKEN}`;
        const response = await apiR.get(`blog/info/${blogName}`, { headers: { Authorization: AuthStr } });
        return response.data.response;
      } catch (e) {
        throw Error(e);
      }
    }
  },
);

export const getBlogSettings = createAsyncThunk(
  'blogSettings/getSettingas',
  async (blogName, { getState }) => {
    if (SERVICETYPE === MOCK) {
      try {
        const response = await api.get(`blog_settings/${blogName}`);
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
        const response = await apiR.get(`blog_settings/${blogInfo.id}`, { headers: { Authorization: AuthStr } });
        return { settings: response.data, blogInfo };
      } catch (e) {
        throw Error(e);
      }
    }
  },
);

export const putBlogSettings = createAsyncThunk(
  'blogSettings/info',
  async (blogId, { getState }) => {
    if (SERVICETYPE === MOCK) {
      try {
        const response = await api.put(`blog_settings/${blogId}`);
        return response.data.response;
      } catch (e) {
        throw Error(e);
      }
    } else {
      try {
        const state = getState();
        const USERTOKEN = state.user.user.accessToken;
        const AuthStr = `Bearer ${USERTOKEN}`;
        const as = state.blogSettings.settings.submissions_settings.allow_submittions;
        const apt = state.blogSettings.settings.ask_settings.ask_page_title;
        const spt = state.blogSettings.settings.submissions_settings.submissions_page_title;
        const sg = state.blogSettings.settings.submissions_settings.submissions_guidelines;
        const body = {
          replies_settings: state.blogSettings.settings.replies_settings,
          allow_ask: state.blogSettings.settings.ask_settings.allow_ask,

          ask_page_title: apt,

          allow_anonymous_questions: state.blogSettings.settings.ask_settings.allow_anonymous_questions,

          allow_submittions: as,

          submissions_page_title: spt,
          submissions_guidelines: sg,
          allow_messages: state.blogSettings.settings.allow_messages,
          share_likes: state.blogSettings.settings.share_likes,
          share_followings: state.blogSettings.settings.share_followings,
        };

        const response = await Axios({
          method: 'PUT',
          url: `${apiReal}/blog_settings/${blogId}`,
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
