import { useDispatch, useSelector } from "react-redux";
import { selectNameFilter } from "../../redux/filters/selectors";
import { changeFilter } from "../../redux/filters/slice";

import style from "./SearchBox.module.css";

const SearchBox = () => {
  const filter = useSelector(selectNameFilter);

  const dispatch = useDispatch();

  const handleChangeInput = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={style.container}>
      <h3 className={style.title}>Find your contacts</h3>
      <input
        type="text"
        value={filter.name}
        onChange={handleChangeInput}
        className={style.input}
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchBox;
