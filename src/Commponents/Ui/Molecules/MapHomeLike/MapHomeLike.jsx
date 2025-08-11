import { useState } from "react";
import Icon from "../../Atom/Icon/Icon";
import Text from "../../Atom/Text/Text";
import Button from "../../Atom/Button/Button";

function MapHomeLike() {
  const [Like, setLike] = useState(false);
  const [DisLike, setDisLike] = useState(false);

  const handelLike = () => {
    if (DisLike == true) {
      setLike(!Like);
      setDisLike(false);
    } else {
      setLike(!Like);
    }
  };
  const handelDislike = () => {
    if (Like == true) {
      setDisLike(!DisLike);
      setLike(false);
    } else {
      setDisLike(!DisLike);
    }
  };

  return (
    <div className="flex items-center justify-center gap-14 ">
      <div className="flex items-center justify-center gap-6">
        <Button OnClick={handelLike}>
          <Icon Name={Like == false ? "Like" : "LikeActiv"} />
        </Button>
        <Button OnClick={handelDislike}>
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
