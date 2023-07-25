import '../vendorList.scss'
import VendorCardSkeleton from "../../../components/vendorCardSkeleton";

const VendorCardsSkeleton = ({cards}:{cards: number}) => {
    return (
        <div className="vendor-cards__skeleton">
            {Array(cards).fill(0).map((_,i) => (
                <VendorCardSkeleton key={i} />
            ))}
        </div>
    )
}
export default VendorCardsSkeleton;