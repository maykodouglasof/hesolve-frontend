import React, { useState, useEffect, useCallback } from 'react';
import { Link } from "react-router-dom";
import { FiLogOut, FiMaximize, FiGithub, FiUser } from 'react-icons/fi';

import { Container } from './styles';

export default function Dropdown() {

  const [fullScreen, setFullScreen] = useState(false);
  const { signOut } = useAuth();

  const handleFullScreen = useCallback(() => {
    setFullScreen(!fullScreen);
  }, [fullScreen]);

  useEffect(() => {
    document.addEventListener('fullscreenchange', handleFullScreen);

    setShowDropdown(false);
  }, [handleFullScreen, setShowDropdown]);

  useEffect(() => {
    return () => {
      document.removeEventListener('fullscreenchange', handleFullScreen);

      setShowDropdown(false);
    };
  }, [handleFullScreen, setShowDropdown]);

  return (
    <Container showDropdown={showDropdown}>
      <ul>
        <li>
          <Link to="/">
            <FiUser />
            Minha Conta
        </Link>
        </li>
        <li>
          <button type="button" onClick={signOut}>
            <FiLogOut />
            Sair
          </button>
        </li>
      </ul>
    </Container>
  );
}