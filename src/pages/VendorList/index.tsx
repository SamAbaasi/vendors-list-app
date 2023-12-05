import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../store';
import VendorCard from '../../components/vendorCard/index';
import { fetchVendorsAsync } from '../../store/vendors/vendorsSlice';
import './vendorList.scss'
import VendorCardsSkeleton from './skeleton';
import { useIntersection } from '@mantine/hooks';
const VendorListPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { vendors, openVendors, loading } = useSelector((state: RootState) => state.vendors);
  const page = useRef(1);
  const lastVendorRef = useRef<HTMLElement>(null)

  useEffect(() => {
    dispatch(fetchVendorsAsync(page.current));
  }, [dispatch]);

  const {ref, entry} = useIntersection({
    root: lastVendorRef.current,
    threshold: 1
  })
  useEffect(() => {
    if(entry?.isIntersecting) {
      page.current += 1;
      dispatch(fetchVendorsAsync(page.current));
    }
  }, [dispatch, entry])
  return (
    <div>
      <section className='vendor-list__header'>
        <h1>{openVendors}<span className='vendor-list__header-title'>فروشنده باز</span></h1>
      </section>
      <div className='vendor-list__items'>
        {loading && (vendors.length === 0) && <VendorCardsSkeleton cards={3}/>}
        {vendors?.map((vendor, i) => {
          if(i === vendors.length - 1) return <div key={vendor.data.id} ref={ref}><VendorCard vendor={vendor.data} /></div>
          return <VendorCard key={vendor.data.id} vendor={vendor.data} />
        })}
        {loading && (vendors.length > 0) && <VendorCardsSkeleton cards={1}/>}
      </div>
    </div>
  );
};

export default VendorListPage;
