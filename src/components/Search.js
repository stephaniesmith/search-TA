import React, { Fragment } from 'react';

const Search = props => {
  return (
    <Fragment>
      <form>
        <label htmlFor="artist">Search for an Artist</label>
        <input type="text" name="artist"/>
        <button>Submit</button>
      </form>
      <ul>
        {[{ id: 1, name: 'Thao & the GDSD' }, { id: 2, name: 'Matt & Kim' }, { id: 3, name: 'Tegan & Sara' }].map(({ id, name }) => <li key={id}>{name}</li>)}
      </ul>
    </Fragment>
  );
};

export default Search;
