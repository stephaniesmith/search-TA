import React, { Fragment } from 'react';

const Songs = props => {
  return (
    <Fragment>
      <ul>
        {[{ id: 1, name: 'Song 1' }, { id: 2, name: 'Song 2' }, { id: 3, name: 'Song 3' }].map(({ id, name }) => <li key={id}>{name}</li>)}
      </ul>
    </Fragment>
  );
};

export default Songs;
