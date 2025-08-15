import { useState } from "react";
import Icon from "../../Atom/Icon/Icon";
import Text from "../../Atom/Text/Text";
import Button from "../../Atom/Button/Button";

function MapHomeLike() {

  const [Like, setLike] = useState(false);
  const [DisLike, setDisLike] = useState(false);
 
  

  const handelLike = () => {
    if (DisLike == true) {
      setLike(true);
      setDisLike(false);
    } else {
      setLike(true);
    }
  };
  const handelDislike = () => {
    if (Like == true) {
      setDisLike(true);
      setLike(false);
    } else {
      setDisLike(true);
    }
  };

  return (
    <div className="flex items-center justify-center gap-14 ">
      <div className="flex items-center justify-center gap-6">
        <Button onClick={handelLike}>
          <Icon Name={Like == false ? "Like" : "LikeActiv"} />
        </Button>
        <Button onClick={handelDislike}>
          <Icon Name={DisLike == false ? "Dislike" : "DislikeActiv"} />
        </Button>
      </div>
      <Text style="text-[#505050] text-[1vw] ">
        بازخورد شما درباره این آگهی چیست؟
      </Text>
    </div>
  );
}

export default MapHomeLike;
