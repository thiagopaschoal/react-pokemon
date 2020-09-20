import styled from 'styled-components';

export const Card = styled.div`
  height: 100%;
  box-shadow: 4px 4px 20px 0 rgba(120, 135, 182, 0.1);
  background-color: #fff;
  border: solid 1px #eff1f9;
  display: flex;
  flex-direction: column;
  position: relative;
  transition: all 0.3s ease;
  padding: 1.5rem;
  z-index: -1;
  cursor: pointer;

  &:hover {
    transform: translateY(2px);
    box-shadow: none;
    filter: none;
  }
`;

export const Photo = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: auto;
  max-width: 100%;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 16px;
  padding-top: 0.5rem;
  font-family: 'Roboto', sans-serif;
`;
