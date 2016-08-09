import React from 'react';
import FilterLink from './../../containers/FilterLink';

const Footer = () => {
  <p>
    Show :
    {" "}
    <FilterLink filter="SHOW_ALL">
      All
    </FilterLink>
    {", "}
    <FilterLink filter="SHOW_ACTIVE">
      All
    </FilterLink>
    {", "}
    <FilterLink filter="SHOW_COMPLETED">
      All
    </FilterLink>
  </p>
}

export default Footer
