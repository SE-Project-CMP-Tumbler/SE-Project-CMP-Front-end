import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api, apiR } from '../../../apis/globalAxpi';
import { SERVICETYPE, MOCK } from '../../../apis/globalAPI';

const fetchAsyncgraphnotes = createAsyncThunk(
  'graph/notes',
  async (dispatch, { getState }) => {
    if (SERVICETYPE === MOCK) {
      try {
        const response = await api.get('notes');
        console.log(response.data);
        const Notes = response.data;
        const graphdata = [];
        for (let i = 0; i < Notes.response.data.length; i += 1) {
          console.log(Notes.response.data[i]);
          const datene = Notes.response.data[i].timestamp.split(/[\s,:-]+/);
          const mydate = new Date();
          mydate.setFullYear(datene[0]);
          mydate.setMonth(datene[1] - 1);
          mydate.setDate(datene[2]);
          mydate.setHours(datene[3], datene[4], datene[5]);
          const point = { x: mydate, y: Notes.response.data[i].notes };
          console.log(point);
          graphdata.push(point);
        }
        Notes.response.data = graphdata;
        console.log(Notes);
        return Notes;
      } catch (error) {
        throw Error(error);
      }
    } else {
      try {
        const state = getState();
        console.log(state);
        const USERTOKEN = state.user.user.accessToken;
        console.log(USERTOKEN);
        const AuthStr = `Bearer ${USERTOKEN}`;
        const response = await apiR.get(`graph/notes/${dispatch.period}/${dispatch.rate}`, { headers: { Authorization: AuthStr } });
        const Notes = response.data;
        const graphdata = [];
        for (let i = 0; i < Notes.response.data.length; i += 1) {
          console.log(Notes.response.data[i]);
          const datene = Notes.response.data[i].timestamp.split(/[\s,:-]+/);
          const mydate = new Date();
          mydate.setFullYear(datene[0]);
          mydate.setMonth(datene[1]);
          mydate.setDate(datene[2]);
          mydate.setHours(datene[3], datene[4], datene[5]);
          const point = { x: mydate, y: Notes.response.data[i].notes };
          console.log(point);
          graphdata.push(point);
        }
        Notes.response.data = graphdata;
        console.log(Notes);
        return Notes;
      } catch (e) {
        throw Error(e);
      }
    }
  },
);

const fetchAsyncgraphnewfollowers = createAsyncThunk(
  'graph/newfollowers',
  async () => {
    try {
      const response = await api.get('newfollowers');
      const Notes = response.data;
      const graphdata = [];
      for (let i = 0; i < Notes.response.data.length; i += 1) {
        console.log(Notes.response.data[i]);
        const datene = Notes.response.data[i].timestamp.split(/[\s,:-]+/);
        const mydate = new Date();
        mydate.setFullYear(datene[0]);
        mydate.setMonth(datene[1]);
        mydate.setDate(datene[2]);
        mydate.setHours(datene[3], datene[4], datene[5]);
        const point = { x: mydate, y: Notes.response.data[i].new_followers };
        console.log(point);
        graphdata.push(point);
      }
      Notes.response.data = graphdata;
      console.log(Notes);
      return Notes;
    } catch (error) {
      throw Error(error);
    }
  },
);

const fetchAsyncgraphtotalfollowers = createAsyncThunk(
  'graph/totalfollowes',
  async (dispatch, { getState }) => {
    if (SERVICETYPE === MOCK) {
      try {
        const response = await api.get('totalfollowers');
        const Notes = response.data;
        const graphdata = [];
        for (let i = 0; i < Notes.response.data.length; i += 1) {
          console.log(Notes.response.data[i]);
          const datene = Notes.response.data[i].timestamp.split(/[\s,:-]+/);
          const mydate = new Date();
          mydate.setFullYear(datene[0]);
          mydate.setMonth(datene[1]);
          mydate.setDate(datene[2]);
          mydate.setHours(datene[3], datene[4], datene[5]);
          const point = { x: mydate, y: Notes.response.data[i].total_followers };
          console.log(point);
          graphdata.push(point);
        }
        Notes.response.data = graphdata;
        console.log(Notes);
        return Notes;
      } catch (error) {
        throw Error(error);
      }
    } else {
      try {
        const state = getState();
        console.log(state);
        const USERTOKEN = state.user.user.accessToken;
        console.log(USERTOKEN);
        const AuthStr = `Bearer ${USERTOKEN}`;
        const response = await apiR.get(`graph/total_followers/${dispatch.period}/${dispatch.rate}`, { headers: { Authorization: AuthStr } });
        const Notes = response.data;
        const graphdata = [];
        for (let i = 0; i < Notes.response.data.length; i += 1) {
          console.log(Notes.response.data[i]);
          const datene = Notes.response.data[i].timestamp.split(/[\s,:-]+/);
          const mydate = new Date();
          mydate.setFullYear(datene[0]);
          mydate.setMonth(datene[1]);
          mydate.setDate(datene[2]);
          mydate.setHours(datene[3], datene[4], datene[5]);
          const point = { x: mydate, y: Notes.response.data[i].total_followers };
          console.log(point);
          graphdata.push(point);
        }
        Notes.response.data = graphdata;
        console.log(Notes);
        return Notes;
      } catch (e) {
        throw Error(e);
      }
    }
  },
);

const initialState = {
  notes: { response: { }, meta: { status: '000', msg: 'Loading' }, error: false },
  newfollowers: { response: { }, meta: { status: '000', msg: 'Loading' }, error: false },
  totalfollowers: { response: { }, meta: { status: '000', msg: 'Loading' }, error: false },
};

const graphSlice = createSlice({
  name: 'graph',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAsyncgraphnotes.pending]: () => {
      // console.log('Pending');
    },
    [fetchAsyncgraphnotes.fulfilled]:
     (state, { payload }) => ({ ...state, notes: payload }),
    [fetchAsyncgraphnotes.rejected]:
    (state) => ({ ...state, notes: { ...state.notes, error: true } }),
    [fetchAsyncgraphnewfollowers.pending]: () => {
      // console.log('Pending');
    },
    [fetchAsyncgraphnewfollowers.fulfilled]:
       (state, { payload }) => ({ ...state, newfollowers: payload }),
    [fetchAsyncgraphnewfollowers.rejected]:
     (state) => ({ ...state, newfollowers: { ...state.newfollowers, error: true } }),
    [fetchAsyncgraphtotalfollowers.pending]: () => {
      // console.log('Pending');
    },
    [fetchAsyncgraphtotalfollowers.fulfilled]:
       (state, { payload }) => ({ ...state, totalfollowers: payload }),
    [fetchAsyncgraphtotalfollowers.rejected]:
     (state) => ({ ...state, totalfollowers: { ...state.totalfollowers, error: true } }),
  },
});

const getNotes = (state) => state.graph.notes;
const getNewfollowers = (state) => state.graph.newfollowers;
const getTotalfollowers = (state) => state.graph.totalfollowers;
const graphReducer = graphSlice.reducer;
export {
  getNotes,
  getNewfollowers,
  getTotalfollowers,
  fetchAsyncgraphnotes,
  fetchAsyncgraphnewfollowers,
  fetchAsyncgraphtotalfollowers,
};
export default graphReducer;
