import React from 'react';
import { StyledNavLink } from './Navigation.styled';

export const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <StyledNavLink to="/">Home</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="users">Users</StyledNavLink>
        </li>
      </ul>
    </nav>
  );
};
