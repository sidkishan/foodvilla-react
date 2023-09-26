const ShimmerUI = () => {
  return (
    <>
      <div className="search-area">
        <input type="text" placeholder="search your fab restaurant" />
        <button>Search</button>
      </div>
      <div className="restaurant-list">
        {Array(21)
          .fill("")
          .map((ele, index) => (
            <div key={index} className="shimmer-card"></div>
          ))}
      </div>
    </>
  );
};
export default ShimmerUI;
