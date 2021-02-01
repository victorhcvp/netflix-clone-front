import React from 'react';
import { Link } from 'react-router-dom';

import { LogoContainer } from './styles';

const Logo: React.FC = () => {
  return (
    <Link to="/">
      <LogoContainer className="icon" />
    </Link>
  );
};

export default Logo;
