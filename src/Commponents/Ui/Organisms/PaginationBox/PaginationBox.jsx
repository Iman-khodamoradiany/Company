import { useState } from "react";
import Pagination from "../../../HOC/Pagination/Pagination";
import { ArayListRent } from "../../../Constans/ListUnderRent/ListRent";
import RentHomeList from "../RentHomeList/RentHomeList";
import ListLikeRent from "../ListLikeRent/ListLikeRent";
import RentalProperties from "../RentalProperties/RentalProperties";
import SliderBrandRent from "../SliderBrandRent/SliderBrandRent";

function PaginationBox() {
  const GetProducts = ArayListRent;

  const [CurrantPage, setCurrantPage] = useState(1);
  const PostPerpage = 6;

  const lastPostIndex = CurrantPage * PostPerpage;
  const firstPostIndex = lastPostIndex - PostPerpage;

  const CurrantPost = GetProducts.slice(firstPostIndex, lastPostIndex);

  return (
    <div>
      <RentalProperties CurrantPost={CurrantPost} start={0} end={4} />
      <SliderBrandRent />
      <RentHomeList CurrantPost={CurrantPost} start={0} end={4} />
      <ListLikeRent />
      <RentHomeList CurrantPost={CurrantPost} start={0} end={6} />

      <Pagination
        totalPosts={GetProducts.length}
        postsperpage={PostPerpage}
        currentPage={CurrantPage}
        setCurrentPage={setCurrantPage}
      />
    </div>
  );
}

export default PaginationBox;
