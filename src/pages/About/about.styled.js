import styled from "styled-components";

export const Container = styled.section`
  margin: 0 auto;
  height: 100%;
  background-color: #2a2727;
  color: white;
  top: 0;
  padding: 2.5rem;
  position: relative;
  z-index: 999;
`;
export const AboutWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
export const TagWrapper = styled.div`
  padding-top: 2.5rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
  color: #fca311;
  font-weight: 700;
  font-size: 1.2rem;
`;
export const Tags = styled.p``;
export const About = styled.h2`
  font-size: 3.75rem;
`;
export const ProfileWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
export const ProfilePicture = styled.img`
  width: 18.75rem;
  height: 18.75rem;
  border-radius: 50%;
`;
export const AboutText = styled.div`
  margin-top: 2rem;
  text-align: center;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.6;
`;
export const InterviewWrapper = styled.div``;
export const InterviewTitle = styled.h3`
  font-size: 2rem;
  padding-bottom: 2rem;
`;
export const Context = styled.div``;
export const QnaList = styled.div`
  padding: 1.25rem;
  margin-bottom: 1.25rem;
  background-color: rgb(55, 55, 55);
  border-radius: 2rem 2rem 0;
`;
export const Question = styled.h3`
  font-size: 1.5rem;
  line-height: 2.2rem;
  font-weight: 700;
  margin-bottom: 0.8rem;
`;
export const Answer = styled.div`
  font-size: 1.05rem;
  line-height: 1.3rem;
`;
