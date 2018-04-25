import React from 'react';
import { ContentContainer } from './contentContainers.jsx';
import { ContentContainerSingleImage } from './contentContainers.jsx';
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
        <ContentContainer contentType={ImageContent} content={Logo} imgAlt="Jacket Poinard" id="home-landing-wrapper" colorScheme="highlight-color">     
        </ContentContainer>
        
        <SectionBounder link="#next" icon="&#x25BC;">
        </SectionBounder>   
       
        <ContentContainerTwoCol colorScheme="light" id="next" contentTypeLeft={SimpleTextContent} contentLeft={Constants.mobyText}  contentTypeRight={ImageContent} contentRight={Whale}>     
        </ContentContainerTwoCol>
        
        <SectionBounder link="#next" icon="&#x25BC;" colorScheme="dark">
        </SectionBounder>   

        <ContentContainer colorScheme="dark" id="next" contentType={SimpleTextContent} content={Constants.mobyText}>
     
     </ContentContainer>
     <ContentContainerTwoCol colorScheme="light" id="next" contentTypeRight={SimpleTextContent} contentRight={Constants.suessText}  contentTypeLeft={ImageContent} contentLeft={Whale}>
     
     </ContentContainerTwoCol>
      
    </div>

    ) 
  };
}
