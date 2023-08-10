import styled from 'styled-components';
import content from '../../static/json/footer';

const Footer = () => (
  <FooterContainer>
    <FlexContainer>
        <Column>
          {content.links.slice(0, 3).map((link) => (
            <div><FooterTitle href={link.link}>{link.name}</FooterTitle></div>
          ))}
        </Column>
        <Column>
          {content.links.slice(3).map((link) => (
            <div><FooterTitle href={link.link}>{link.name}</FooterTitle></div>
          ))}
        </Column>
        <Column>
          <BlueprintLogo src={content.blueprintIcon} alt='blueprint' />
          <p>stay in the loop</p>
          {content.social.map((socialLink) => (
            <a
              href={socialLink.url}
              target='_blank'
              rel='noopener noreferrer'
              key={socialLink.key}
            >
              <SocialIcon src={socialLink.img} alt='icons' />
            </a>
          ))}
        </Column>
    </FlexContainer>

    <MadeWithLove>Made with ❤️ by The Blueprint Team</MadeWithLove>
  </FooterContainer>
);

const FooterContainer = styled.div`
  background-color: ${(props) => props.theme.colors.primaryBlue};
  color: ${(props) => props.theme.colors.offWhite};
  font-family: ${(props) => props.theme.fonts.heading};
`;

const FlexContainer = styled.div`
  padding-top: 20px;
  @media ${(props) => `${props.theme.viewport.laptop}`} {
    display: flex;
    justify-content: center;
  }
`

const Column = styled.div`
  margin: 50px 100px 10px 100px;
  text-align: center;
  font-weight: bold;
`

const LogoDiv = styled.div`
  grid-area: logoDiv;

  padding: 20px 0;
  @media ${(props) => `${props.theme.viewport.laptop}`} {
    padding: 0;
  }
`;

const FooterBox = styled.div`
  margin: 0;
  font-size: 16px;

  padding: 20px 0;
  @media ${(props) => `${props.theme.viewport.laptop}`} {
    padding: 0;
  }
`;

const FooterTitle = styled.a`
  height: 35px;
  text-decoration: none;
  color: white;
`;

const BlueprintLogo = styled.img`
  height: 35px;
  margin-bottom: 80px;
`;

const SocialIcon = styled.img`
  width: auto;
  height: 20px;
  margin-right: 10px;
  filter: invert(98%) sepia(6%) saturate(2%) hue-rotate(208deg) brightness(116%) contrast(100%);
`

const MadeWithLove = styled.div`
  background-color: ${(props) => props.theme.colors.primaryBlue};
  text-align: center;
  padding: 5px 0;
`;

export default Footer;
