import React from 'react'
import { parse } from 'qs'

const List = ({ location }) => {
  const query = parse(location.search.substr(1));
  return (
    <ul>
      <li>ID: {query.id}</li>
      <li>Sort: {query.sort}</li>
    </ul>
  )
};

export default List;