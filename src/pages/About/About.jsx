import * as St from "./about.styled";
import profile from "../../assets/img_1.jpg";

const About = () => {
  const tag = ["#안되면_되게하라", "#긍정적", "#강한_의지력"];
  return (
    <St.Container>
      <St.AboutWrapper>
        <St.About> About me</St.About>
        <St.ProfileWrapper>
          <St.ProfilePicture src={profile}></St.ProfilePicture>
        </St.ProfileWrapper>
        <St.TagWrapper>
          {tag.map((item, idx) => {
            return <St.Tags key={idx}>{item}</St.Tags>;
          })}
        </St.TagWrapper>
        <St.AboutText>
          코딩을 즐기는 개발자 김지예입니다.
          <br />
          저는 조직과 사람의 성장을 최우선적으로 생각하며 새로운 기술의 습득을
          두려워하지 않습니다.
        </St.AboutText>
        <St.InterviewWrapper>
          <St.InterviewTitle>Interview</St.InterviewTitle>
          <St.Context>
            <St.QnaList>
              <St.Question>Q. 프론트엔드로 전향한 이유?</St.Question>
              <St.Answer>
                약 7년간 법률 사무원으로 일하면서 다양한 정부기관과 공공기관의
                웹사이트를 자주 이용했습니다.
                <br /> 이러한 사이트들을 사용할 때마다 '왜 이런 식으로
                만들어졌을까?', '이런 기능이 있으면 더 편리했을 것 같다'라는
                아이디어가 떠올랐습니다. <br />
                만약 제가 만든 서비스를 누군가 사용하고 그로 인해 편리함을
                느낀다면 정말 뿌듯할 것 같다는 생각을 하면서요.
                <br /> 제가 사용자로서 직접 경험한 것들을 바탕으로 한층 더 나은
                서비스를 구현하고 싶습니다. <br />또 사용자와 직접 소통할 수
                있으며 여러 직무의 동료들과 협업할 수 있는 위치인 프론트엔드
                개발 직무를 선택하게 되었습니다.
              </St.Answer>
            </St.QnaList>
            <St.QnaList>
              <St.Question>
                Q. 새로운 기술을 습득하기 위해 어떠한 방식으로 연구하시나요?
              </St.Question>
              <St.Answer>
                새로운 기술의 공식 문서를 읽어보고, 튜토리얼을 따라 코드를
                작성해 봅니다.
                <br />
                이후에는 해당 기술에 익숙해질 수 있도록 작은 토이 프로젝트를
                진행해 봅니다.
                <br />또 해당 기술의 유튜브를 찾아보거나, 이해가 안 될 때는
                이해가 될 때까지 코드를 반복해서 작성해 보기도 하고 다른
                개발자들이 작성한 글을 읽어봅니다.
              </St.Answer>
            </St.QnaList>
            <St.QnaList>
              <St.Question>
                Q. 개발 도중에 발생하는 에러에 대해 보통 어떻게 대처하시나요?
              </St.Question>
              <St.Answer>
                에러가 발생했을 때 해당 문구를 읽고 해석하여 이 에러가 간단하게
                해결이 가능한 에러인지 아닌지를 파악합니다.
                <br />
                에러를 해석할 수 없거나 해결 방법을 모르겠다면 구글링을 통하여
                나와 비슷한 경험을 한 개발자분들의 경을 참고하여 코드에 적용해
                보거나, 공식 문서를 읽어보거나 합니다.
              </St.Answer>
            </St.QnaList>
          </St.Context>
        </St.InterviewWrapper>
      </St.AboutWrapper>
    </St.Container>
  );
};

export default About;
