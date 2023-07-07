import Image from "next/image";
import one from "public/img/pagination/btn_onepage.svg";
import ten from "public/img/pagination/btn_tenpage.svg";

const Pagination = ({ currentPage, totalPages, onPageChange }: any) => {
  // 이전 페이지 그룹으로 이동
  const goToPreviousGroup = () => {
    const previousGroupStartPage = Math.max(currentPage - 10, 1);
    goToPage(previousGroupStartPage);
  };

  // 다음 페이지 그룹으로 이동
  const goToNextGroup = () => {
    const nextGroupStartPage = Math.min(currentPage + 10, totalPages);
    goToPage(nextGroupStartPage);
  };

  // 한 페이지 앞으로 이동
  const goToPreviousPage = () => {
    const previousPage = Math.max(currentPage - 1, 1);
    goToPage(previousPage);
  };

  // 한 페이지 뒤로 이동
  const goToNextPage = () => {
    const nextPage = Math.min(currentPage + 1, totalPages);
    goToPage(nextPage);
  };

  // 페이지 클릭 시 이동
  const goToPage = (page: any) => {
    onPageChange(page);
  };

  // 현재 페이지 그룹의 첫 번째 페이지
  const currentGroupStartPage = Math.floor((currentPage - 1) / 10) * 10 + 1;
  // 현재 페이지 그룹의 마지막 페이지
  const currentGroupEndPage = Math.min(currentGroupStartPage + 9, totalPages);

  // 현재 페이지 그룹에 속하는 페이지 버튼 생성
  const pagesInCurrentGroup = Array.from(
    { length: currentGroupEndPage - currentGroupStartPage + 1 },
    (_, i) => currentGroupStartPage + i
  );

  return (
    <div className="relative select-none">
      <div className="absolute -left-[50px] space-x-2">
        <button
          className="transform -scale-x-100"
          disabled={currentPage < 10}
          onClick={goToPreviousGroup}
        >
          <Image src={ten} alt="<<" />
        </button>
        <button
          className="transform -scale-x-100"
          disabled={currentPage < 2}
          onClick={goToPreviousPage}
        >
          <Image src={one} alt="<" />
        </button>
      </div>

      <div className="space-x-[8px]">
        {pagesInCurrentGroup.map((page) => (
          <button
            key={page}
            onClick={() => goToPage(page)}
            disabled={currentPage === page}
            className={`w-[20px] h-[22px] text-[14px] ${
              currentPage === page
                ? "text-[#7988B8] border-b-[2px] border-[#7988B8]"
                : " text-[#B4B4B4]"
            }`}
          >
            {page}
          </button>
        ))}
      </div>

      <div className="absolute top-0 -right-[50px] space-x-2">
        <button disabled={currentPage + 1 > totalPages} onClick={goToNextPage}>
          <Image src={one} alt=">" />
        </button>
        <button
          disabled={currentPage + 10 >= totalPages}
          onClick={goToNextGroup}
        >
          <Image src={ten} alt=">>" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
