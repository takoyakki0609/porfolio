import { Link } from "react-router-dom";
import * as St from "./footer.styled";
const Footer = () => {
  return (
    <St.Container>
      <St.ContactWrapper>
        <St.Contact>TEL : 010 4479 7077</St.Contact>
        <St.Contact>
          EMAIL : <Link to="jiyekim0415@gmail.com">jiyekim0415@gmail.com</Link>
        </St.Contact>
        <St.Contact>
          GITHUB :{" "}
          <Link to="https://github.com/takoyakki0609">
            https://github.com/takoyakki0609
          </Link>
        </St.Contact>
      </St.ContactWrapper>
      Copyright 2024. JIYE. All rights reserved.
    </St.Container>
  );
};

export default Footer;
