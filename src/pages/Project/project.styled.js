import styled from "styled-components";

export const Container = styled.section`
  background-color: #f5f5f0;
  position: relative;
  padding: 2.5rem;
`;
export const ProjectWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

export const Title = styled.h2`
  font-size: 3.75rem;
  color: #2a2727;
  font-weight: 700;

  margin-bottom: 2rem;
`;
export const Emphasis = styled.span`
  color: #fca311;
  font-weight: 800;
`;
export const Project = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.2rem;

  margin: 2rem 0;
`;
export const SubTitle = styled.h3`
  padding-bottom: 6rem;
`;
export const ProjectTitle = styled.a`
  color: #fca311;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 800;
`;
export const ProjectType = styled.div`
  margin: 0.5rem;
`;
export const Period = styled.div``;
export const StackWrapper = styled.ul`
  display: flex;
  justify-content: center;
  margin: 0.5rem;
`;
export const Stack = styled.li`
  color: #fca311;
  font-weight: 700;
  padding: 0 0.3rem;
`;
export const ProjectIntroduction = styled.div`
  padding-bottom: 1rem;
  line-height: 1.2rem;
`;

export const FunctionWrapper = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 1fr;
`;
export const FunctionTitle = styled.p``;
export const FunctionList = styled.ul``;
export const Function = styled.li`
  text-align: left;
  list-style: disc;
  line-height: 1.2rem;
`;
export const ReadMeWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
export const ReadMe = styled.a`
  display: inline-block;
  text-decoration: none;
  color: white;
  background-color: #2a2727;
  padding: 0.5rem;
  border-radius: 0.2rem;
  cursor: pointer;
  margin-top: 1.5rem;
`;
export const ProjectImgWrapper = styled.div``;
export const ProjectImg = styled.a``;
export const ProjectInfo = styled.div`
  text-align: center;
`;
export const Img = styled.img`
  width: 100%;
`;
