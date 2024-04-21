import styled from "styled-components";

export const Container = styled.section`
  background-color: #2a2727;
  text-align: center;
  color: #f5f5f0;
  padding: 2.5rem;
`;

export const ContactWrapper = styled.ul`
  margin-bottom: 2rem;
`;

export const Contact = styled.li`
  margin-bottom: 1rem;
  cursor: pointer;
  &:hover {
    color: #fca311;
  }
  a {
    color: #f5f5f0;
    text-decoration: none;
    &:hover {
      color: #fca311;
    }
  }
`;
