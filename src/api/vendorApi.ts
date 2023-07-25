import { Vendors } from '../types/vendors';
import axios from '../lib/axios';

export const fetchVendors = (page: number, pageSize = 10, lat = 35.754, long = 51.328) => {
  const url = `/vendors-list?page=${page}&page_size=${pageSize}&lat=${lat}&long=${long}`;
  return axios.get<Vendors>(url);
};