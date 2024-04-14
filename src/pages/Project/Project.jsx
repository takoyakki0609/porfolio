import * as St from "./project.styled";
import projects from "../../api/project.json";

export default function Project() {
  return (
    <St.Container>
      <St.ProjectWrapper>
        <St.Title>Project Experience</St.Title>
        <St.SubTitle>
          프로젝트 타이틀을 클릭하면 <St.Emphasis>프로젝트 사이트</St.Emphasis>
          로, 프로젝트 이미지를 클릭하면{" "}
          <St.Emphasis>프로젝트 레포지토리</St.Emphasis>로 연결됩니다.
        </St.SubTitle>
        {projects.map((project, idx) => {
          return (
            <St.Project key={idx}>
              <St.ProjectInfo>
                <St.ProjectTitle href={project.siteUrl}>
                  {project.title}
                </St.ProjectTitle>
                <St.ProjectType>{project.subtitle}</St.ProjectType>
                <St.Period>{project.period}</St.Period>
                <St.StackWrapper>
                  {project.stacks.map((stack, idx) => (
                    <St.Stack key={idx}>{stack}</St.Stack>
                  ))}
                </St.StackWrapper>
                <St.ProjectIntroduction>
                  {project.projectIntroduction}
                </St.ProjectIntroduction>
                <St.FunctionWrapper>
                  <St.FunctionTitle>구현기능</St.FunctionTitle>
                  <St.FunctionList>
                    {project.functions.map((tech, techIndex) => (
                      <St.Function key={techIndex}>{tech}</St.Function>
                    ))}
                  </St.FunctionList>
                </St.FunctionWrapper>
                {project.readMe && (
                  <St.ReadMeWrapper>
                    <St.ReadMe href={project.readMe}>회고록 보러가기</St.ReadMe>
                  </St.ReadMeWrapper>
                )}
              </St.ProjectInfo>

              <St.ProjectImgWrapper>
                <St.ProjectImg href={project.githubUrl}>
                  <St.Img src={project.img} alt="프로젝트이미지" />
                </St.ProjectImg>
              </St.ProjectImgWrapper>
            </St.Project>
          );
        })}
      </St.ProjectWrapper>
    </St.Container>
  );
}
