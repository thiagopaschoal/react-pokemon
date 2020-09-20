import styled from 'styled-components';

export const Wrapper = styled.div`
  overflow: hidden;
  background-color: #00a0dc;
  position: fixed;
  top: 0;
  width: 100%;
  justify-content: space-around;
  display: flex;
`;

export const SearchInput = styled.input`
  width: calc(100% - 30px);
  height: 5px;
  padding: 1rem;
  border-radius: 2px;
  border: none;
  margin: 1rem 1.5rem 1rem;
  font-size: 17px;
`;

export const Title = styled.h1`
  font-size: 20px;
  padding-top: 0.5rem;
  color: #fff;
  font-family: 'Roboto', sans-serif;
  align-items: center;
  display: flex;
  padding-left: 1.5rem;
`;
