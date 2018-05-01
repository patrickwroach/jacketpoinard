import React from 'react';
import { ContentContainer } from './contentContainers.jsx';
import { ContentContainerTwoCol } from './contentContainers.jsx';
import { SectionBounder} from './sectionBounder.jsx'
import { Constants } from '../../other/Constants.js';
import { Button } from './button.jsx';
import { ImageContent} from './contentTypes.jsx';
import { SimpleTextContent} from './contentTypes.jsx';
import Logo from '../../assets/jp-logo.svg';
import Whale from '../../assets/whale.jpg';


export class HomePage extends React.Component {
  render() {
    return (
      <div>
        <ContentContainer contentType={ImageContent} content={Logo} imgAlt="Jacket Poinard" id="home-landing-wrapper" colorScheme="highlight-color" numberOfColumns={1}>     
        </ContentContainer>

        <SectionBounder link="#next" icon="&#x25BC;">
        </SectionBounder>   

   
       
        <ContentContainerTwoCol colorScheme="dark" id="next" contentTypeOne={SimpleTextContent} contentOne={Constants.mobyText}  contentTypeTwo={ImageContent} contentTwo={Whale}>     
        </ContentContainerTwoCol>
        
        <SectionBounder id="first divider" link="#next" icon="&#x25BC;" colorScheme="highlight">
        </SectionBounder>   

        <ContentContainer colorScheme="highlight" id="next" contentType={SimpleTextContent} content={Constants.mobyText}>     
        </ContentContainer>
        
        <ContentContainerTwoCol colorScheme="light" id="next" contentTypeTwo={SimpleTextContent} contentTwo={Constants.suessText}  contentTypeOne={ImageContent} contentOne={Whale}>
        </ContentContainerTwoCol>
      </div>

    ) 
  };
}
