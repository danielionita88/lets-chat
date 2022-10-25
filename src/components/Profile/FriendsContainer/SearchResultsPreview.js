import "./SearchResultsPreview.css";

const SearchResultsPreview = (props) => {
  return (
    <ul className="searchResultsPreview">
      {props.results.map((el) => (
        <li key={el._id} className="result">
          <img  src={
                el.profilePicture
                  ? el.profilePicture
                  : "/assets/default.jpeg"
              } alt="profile" className="profileImg"/>
          <span>
            {el.firstName} {el.lastName}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default SearchResultsPreview;
