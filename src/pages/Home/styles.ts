import styled from 'styled-components';

export const Who = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  padding: 15px;

  .manage-profile-button {
    color: grey;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 2px;
    border: 1px solid grey;
    font-size: 18px;
    padding: 10px 30px;
    margin-top: 30px;
    text-align: center;

    :hover {
      color: #e5e5e5;
      border-color: #e5e5e5;
    }
  }
`;

export const Title = styled.h1`
  font-size: 4vw;
  color: white;
  font-weight: 400;
  text-align: center;
`;

export const Logo = styled.a`
  position: relative;
  z-index: 1;
  display: inline-block;
  vertical-align: middle;
  color: #e50914;
  font-size: 25px;
  cursor: pointer;
  ::before {
    content: '\\e5d0';
  }
`;

export const BoxesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  flex-wrap: wrap;
  max-width: 1500px;

  > a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 10px 10px;
    width: 20vw;
    max-width: 200px;
    min-width: 100px;
    text-decoration: none;
    cursor: pointer;

    :hover > img {
      border: 4px solid #e5e5e5;
    }
    :hover > p {
      color: #e5e5e5;
    }
    :hover > div.add {
      background-color: #e5e5e5;
    }
  }
`;

export const BoxImage = styled.img`
  border-radius: 10px;
  width: 100%;
  height: 100%;
  max-width: 200px;
  max-height: 200px;
  border: 4px solid transparent;
`;

export const BoxText = styled.p`
  color: grey;
  font-size: 20px;
  margin-top: 10px;
  text-align: center;
`;

export const BoxAdd = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20vw;
  height: 20vw;
  max-height: 192px;
  max-width: 100%;
  border: 4px solid transparent;
  border-radius: 5px;
`;

export const BoxAddIcon = styled.span`
  font-size: 5vw;
  color: grey;
  ::before {
    content: '\\e716';
  }
`;
