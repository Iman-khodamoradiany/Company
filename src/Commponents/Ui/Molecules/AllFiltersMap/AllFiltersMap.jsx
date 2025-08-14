import { useState } from "react";
import { ArayAllFilters } from "../../../Constans/AllFilters/AllFilters";
import Text from "../../Atom/Text/Text";
import Button from "../../Atom/Button/Button";

function AllFiltersMap() {

  const [selected, setSelected] = useState({});

  const handleClick = (itemId, btnKey) => {
    setSelected((prev) => ({ ...prev, [itemId]: btnKey }));
  };

  return (
    <div className="flex flex-col gap-3 items-center">
      {ArayAllFilters.map((item) => {
        const texts = [
          item.text,
          item.text1,
          item.text2,
          item.text3,
          item.text4,
          item.text5,
          item.text6,
        ].filter(Boolean);

        return (
          <div
            key={item.id}
            className="w-[90%] h-[100px] flex flex-col items-center justify-around rounded-md"
          >
            <Text style="[direction:rtl] w-full text-[#353535] text-[1.3vw]">
              {item.name}
            </Text>

            <div className="w-full flex [direction:rtl]">
              {texts.map((txt, idx) => {
                const btnKey = String(idx + 1);
                const isActive = (selected[item.id] || "1") === btnKey;
                const isFirst = idx === 0;
                const isLast = idx === texts.length - 1;

                return (
                  <Button
                    key={btnKey}
                    onClick={() => handleClick(item.id, btnKey)}
                    className={
                      isActive
                        ? `text-white bg-[#CB1B1B] px-[25px] py-[10px] ${
                            isFirst ? "rounded-r-[8px]" : ""
                          } ${isLast ? "rounded-l-[8px]" : ""}`
                        : `text-[#505050] border border-[#D9D9D9] px-[25px] py-[10px] ${
                            isFirst ? "rounded-r-[8px]" : ""
                          } ${isLast ? "rounded-l-[8px]" : ""}`
                    }
                  >
                    {txt}
                  </Button>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default AllFiltersMap;
