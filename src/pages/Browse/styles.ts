import styled from 'styled-components';

interface SearchInputContainerProps {
  shown?: boolean;
}

export const Header = styled.header`
  display: flex;
  align-items: center;
  position: relative;
  z-index: 1;

  ul.main-menu {
    display: flex;
    flex: 1;
    margin-left: 40px;

    li {
      list-style: none;
      margin: 0 10px;
      a {
        text-decoration: none;
        color: #e5e5e5;
        font-size: 14px;
        transition: color 200ms;

        :hover {
          color: #b3b3b3;
        }
      }
      a.active {
        color: white;
        cursor: default;
      }
    }
  }
`;

export const RightMenu = styled.div`
  display: flex;
  align-items: center;

  > a.infantil {
    color: white;
    text-transform: uppercase;
    text-decoration: none;
    font-size: 14px;
    margin-left: 15px;
  }
`;

export const SearchButton = styled.button<SearchInputContainerProps>`
  display: ${props => (props.shown ? 'none' : 'block')};
  background-color: transparent;
  border: none;
  color: white;
  font-size: 20px;
  padding: 0 5px;
  cursor: pointer;
  ::before {
    content: '\\e636';
  }
`;

export const NotificationsButton = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  font-size: 20px;
  padding: 0 5px;
  margin-left: 15px;
  cursor: pointer;
  ::before {
    content: '\\e663';
  }
`;

export const ProfileMenu = styled.div`
  display: flex;
  align-items: center;
  margin-left: 15px;
  position: relative;
  cursor: pointer;

  :hover > div {
    display: flex;
  }
`;

export const ProfileImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 3px;
`;

export const Caret = styled.span`
  margin-left: 10px;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 5px 5px 0 5px;
  border-color: #fff transparent transparent transparent;
`;

export const ProfileDropdownContainer = styled.div`
  display: none;
  padding-top: 20px;
  position: absolute;
  top: 100%;
  right: calc(100% - 50px);
  cursor: default;
`;

export const ProfileDropdown = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 0 10px 0;
  min-width: 200px;
  flex-direction: column;

  ::before {
    content: ' ';
    position: absolute;
    bottom: calc(100% - 20px);
    right: 27px;
    border-width: 7px;
    margin-left: -7px;
    border-color: transparent transparent #e5e5e5;
    border-style: solid;
    height: 0;
    width: 0;
  }

  ul.profile-menu {
    padding: 0 10px;
    li {
      list-style: none;
      margin: 15px 0;
    }
    li a {
      display: flex;
      flex-direction: row;
      align-items: center;
      color: white;
      text-decoration: none;
      font-size: 13px;

      :hover {
        text-decoration: underline;
      }

      > img {
        margin-right: 10px;
      }
    }
  }

  ul.profile-sub-menu {
    li a {
      font-weight: 700;
    }
  }
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.2);
`;

export const SearchInputContainer = styled.div<SearchInputContainerProps>`
  visibility: ${props => (props.shown ? 'visible' : 'hidden')};
  opacity: ${props => (props.shown ? '1' : '0')};
  border: 1px solid white;
  background-color: black;
  display: flex;
  align-items: center;
  width: ${props => (props.shown ? '250px' : '80px')};
  overflow: hidden;
  transition: all 200ms;
  > button {
    cursor: default;
  }
`;
export const SearchInput = styled.input`
  background-color: transparent;
  border: none;
  color: white;
  padding: 7px;
  font-size: 15px;

  ::placeholder {
    color: grey;
  }
`;
