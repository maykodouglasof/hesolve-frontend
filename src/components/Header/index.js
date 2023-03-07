import React, { useState, useCallback } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { MdLink, MdMenu, MdClose } from "react-icons/md";
import { FiMoreVertical } from "react-icons/fi";

import {
  Container,
  Content,
  Nav,
  NavigationMenu,
  ProfileData,
  Image,
} from "./styles";

import logo from "../../assets/images/hesolve.png";

export default function Header() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleDropdown = useCallback(() => {
    setShowDropdown(!showDropdown);
    setShowAbout(false);
  }, [showDropdown]);

  const handleMenu = useCallback(() => {
    setShowMenu(!showMenu);
    setShowDropdown(false);
    setShowAbout(false);
  }, [showMenu]);

  const closeMenu = useCallback(() => {
    setShowMenu(false);
  }, []);

  return (
    <Container>
      <Content>
        <Nav showAbout={showAbout}>
          <Link to="/" className="about-button">
            <img src={logo} alt="Localiza Jobs" />
          </Link>

          <NavigationMenu showMenu={showMenu}>
            <div>
              <NavLink to="/" activeClassName="selected" onClick={closeMenu}>
                Página Inicial
              </NavLink>
              <NavLink
                to="/jobs"
                activeClassName="selected"
                onClick={closeMenu}
              >
                Jobs
              </NavLink>
              <NavLink
                to="/services"
                activeClassName="selected"
                onClick={closeMenu}
              >
                Serviços
              </NavLink>
              <NavLink
                to="/contact"
                activeClassName="selected"
                onClick={closeMenu}
              >
                Contato
              </NavLink>
              <NavLink
                to="/blog"
                activeClassName="selected"
                onClick={closeMenu}
              >
                Blog
              </NavLink>
            </div>
          </NavigationMenu>

          <button
            className="mobile-menu-button"
            type="button"
            onClick={handleMenu}
          >
            {showMenu ? (
              <MdClose color="#f7415f" size={24} />
            ) : (
              <MdMenu color="#fff" size={24} />
            )}
          </button>
        </Nav>

        <ProfileData showDropdown={showDropdown}>
          <div>
            <Link to="/entrar">Login</Link>
            <NavLink to="/cadastrar" activeClassName="selected">
              Cadastrar
            </NavLink>
          </div>
        </ProfileData>
      </Content>
    </Container>
  );
}
