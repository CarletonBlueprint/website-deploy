import styled from 'styled-components';
import { HomeBlockProps } from '../../interfaces/HomeBlockProps';

const HomeAboutBlock = (props: HomeBlockProps) => (
  <HomeAboutBlockDiv>
    <Title>{props.content.title}</Title>
    <Image src={props.content.image.picture} alt={props.content.image.alt} />
    <Description>{props.content.subtitle}</Description>
    <Buttons>
      {props.content.buttons.map((button) => (
        <a key={`t-${button.content}`} href={button.link}>
          <Button>{button.content}</Button>
        </a>
      ))}
    </Buttons>
  </HomeAboutBlockDiv>
);

const HomeAboutBlockDiv = styled.div`
background-color:${(props) => props.theme.colors.cloudBlue}};
  padding: 50px;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr;
  grid-template-areas:
    'Title'
    'Description'
    'Image'
    'Buttons';

  @media ${(props) => `${props.theme.viewport.tablet}`} {
    grid-template-columns: 2fr 3fr;
    grid-template-areas:
      'Title Title'
      'Image Description'
      'Image Buttons';
  }
`;

const Title = styled.h1`
  grid-area: Title;
  font-size: ${(props) => props.theme.fontSizes.medium};
  background-color: ${(props) => props.theme.colors.skyBlue};
  font-family: ${(props) => props.theme.fonts.heading};
  margin: 0;
  padding-left: 1em;
  height: 1.8em;
  border-radius: 15px;
`;

const Description = styled.div`
  grid-area: Description;
  margin: 0;
  margin-top:auto;
  font-size: ${(props) => props.theme.fontSizes.regular};
  @media ${(props) => `${props.theme.viewport.tablet}`} {
    text-align: right;
  }
`;

const Buttons = styled.div`
  margin-top: auto;
  margin-bottom: 2em;
  @media ${(props) => `${props.theme.viewport.tablet}`} {
    text-align: right;
  }
`

const Image = styled.img`
  grid-area: Image;
  width: 100%;
  top: 25%;
`;

const Button = styled.button`
  bottom: 0;
  right: 0;
  grid-area: Button;
  border: 3px solid #0078e8;
  padding: 10px 30px;
  background: rgba(255, 255, 255, 0);
  color: #0078e8;
  margin-right: 20px;
  font-family: ${(props) => props.theme.fonts.content};
  &:hover {
    background: #0078e8;
    color: white;
    cursor: pointer;
  }
`;

export default HomeAboutBlock;
