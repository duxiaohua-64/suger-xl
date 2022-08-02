import styled from 'styled-components';

export const LayoutUI = styled.div`
  height: 8vh;
  line-height: 8vh;
  font-size: 40px;
  background-color: #008F7A;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  padding-top: 2%;
  a {
  width: 10%;
  background: #B39CD0;
  text-align: center;
  text-decoration: none;
  border-radius: 50px;
  outline: none;
  font-weight: 500;
}
.active {
  color: yellowgreen;
  font-size: 50px;
}
`