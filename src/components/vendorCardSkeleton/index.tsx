import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import './vendorCardSkeleton.scss'

const VendorCardSkeleton = () => {
    return (
        <div className="vendor-card__skeleton">
                <div className="vendor-card__skeleton-header">
                    <Skeleton height={134} width={578} style={{borderBottomLeftRadius: 0, borderBottomRightRadius: 0}}/>
                    <Skeleton height={64} width={64} style={{position: 'absolute',bottom:'-5px', right: '8px', border: '1px solid #cccc' }}/>
                </div>
                <div className="vendor-card__skeleton-body">
                    <div className="vendor-card__skeleton-title">
                        <Skeleton height={20} width={130} style={{marginBottom: '10px'}}/>
                        <div className="vendor-card__skeleton-rate">
                            <Skeleton height={20} width={60}/>
                            <Skeleton height={20} width={40} style={{marginRight: '2px'}}/>
                        </div>
                    </div>
                    <Skeleton height={20} width={170}/>
                    <Skeleton height={20} width={140} style={{marginTop: '10px'}}/>
                </div>
        </div>
    )
}
export default VendorCardSkeleton;