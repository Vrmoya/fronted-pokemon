import Style from "../Pagination/Pagination.module.scss" 

const Pagination = ({ totalPages, currentPage, handlePageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className={Style.paginacion}>
      <button className={Style.a}
        disabled={currentPage === 1} 
        onClick={() => handlePageChange(currentPage - 1)}
      >
        Prev
      </button >

      {pages.map((page) => (
        <button 
          key={page} 
          onClick={() => handlePageChange(page)}
          className={`${Style.a} ${currentPage === page ? Style.active : ''}`}
        >
          {page}
        </button>
      ))}

      <button className={Style.a}
        disabled={currentPage === totalPages} 
        onClick={() => handlePageChange(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
};
export default Pagination;

