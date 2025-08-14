import Button from "../../Ui/Atom/Button/Button";

function Pagination({ totalPosts, postsperpage, currentPage, setCurrentPage }) {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsperpage); i++) {
    pages.push(i);
  }

  const handleClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex justify-center items-center gap-5 my-10 ">
      {pages.map((item) => (
        <Button
          key={item}
          className={`border-1 h-[40px]  w-[40px] text-[1.3vw] flex justify-center items-center rounded-[10px] cursor-pointer ${
            currentPage === item
              ? " text-[#2F80ED] shadow-[0px_0px_0px_3px_#0085FF30]   border-[#2F80ED] border-[2px]"
              : " text-[#121212] border-[#E1E1E1] border-[2px]"
          }`}
          onClick={() => handleClick(item)}
        >
          {item}
        </Button>
      ))}
    </div>
  );
}

export default Pagination;

