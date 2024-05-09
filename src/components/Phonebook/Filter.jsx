import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();

  const handleTypeFilter = value => {
    dispatch(setFilter(value.toLowerCase().trim()));
  };

  return (
    <>
      <input
        id="filter"
        type="text"
        name="filter"
        onInput={e => handleTypeFilter(e.target.value)}
      />
    </>
  );
};

export default Filter;
