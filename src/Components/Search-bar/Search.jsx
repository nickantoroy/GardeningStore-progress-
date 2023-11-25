import "./Search.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
const SearchBar = () => {
  return (
    <div className="body">
    <div className="box">
        <input type="text" placeholder="Search..."></input>
        <a href="#">
            <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
        </a>
    </div>
    </div>
  )
}

export default SearchBar