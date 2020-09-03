import React from 'react';
import fb from './picture/fb.png'
import inst from './picture/instagram.png'
import lik from './picture/linkin.png'
import tw from './picture/twitter.png'
import yt from './picture/youtube.png'
import photo from './picture/profile.png'
import './headStyle.css';

function Main() {
  return (
    <div className='main'>
        <Head />
        <OtherProfile /> 
        <Body />
    </div>
  );
}

function Head() {
    return (
      <div className='head'>
            <div className="head-text1">
                <div className="head-text">
                    <div className="head1">
                        <div style={{fontSize:'1.4em'}}>BOUBACAR BALDE</div>
                        <div style={{fontSize:'0.9em'}}>FullStack JavaScript developpeur</div>
                    </div>
                    <div className="head2">
                        <div>(+30) 694-381-0581</div>
                        <div style={{fontSize:'0.7em'}}>bboubcar@yahoo.fr | bboubcar@gmail.com</div>
                    </div>
                </div>
            </div>
            <div className='head-photo'>
                <img src={photo} alt="Profile"  className='photo'/>
            </div> 
      </div>
    );
}

function OtherProfile() {
      return(
        <div className='other-profile'>
            <div className='other-profile1'>
                <img src={fb} alt="Facebook"  className='icone'/>
                <img src={tw} alt="Tweeter"  className='icone'/>
                <img src={inst} alt="Instagram"  className='icone'/>
                <img src={lik} alt="Linkedin"  className='icone'/>
                <img src={yt} alt="Youtube"  className='icone'/>
            </div>
        </div>
      )
  
}

function Body(){
  return(
      <div className='body-content'>
          <div className='body-content1'>
              <div className='works'>
                  <h2>Works Experience:</h2>
                  <Display periode='2017 - 2018' summary='French Custumer service, Orange Guinee' 
                      details=' Helping in cash transactions via phone applications. Providing information. Keeping transactions records. 
                          Checking files. Report making.' /><br/>
                  <Display periode='06/2020 - 08/2020' summary='Web Developper, Social Academy High School' 
                      details='The web application that builded by the graduate students of Social Hackers Academy’s Class 10.
                        We use on the Project: Nodejs, MongoDB, React, Bootstrap and Scrum as projrct management.' 
                        linkTitle='here to see The Githubb Project' link='https://github.com/SocialHackersClass10/ChalleduApp' /><br/>
                  <Display periode='08/2020 - present' summary='Web Developpement, ' 
                      details='The project consists to help user creating a quickly a professionnal resume in differents styles with pdf 
                        format. We use on the Project: Nodejs, MongoDB, React, Bootstrap.' 
                          linkTitle='here to see The Githubb Project' link='https://github.com/SocialHackersClass10/ChalleduApp' />
              </div>
              <div className='educations'>
                  <h2>Education:</h2>
                  <Display periode='11/2019 - 08/2020' summary='Web Developpement, Social Academy High School, Greece' 
                      details='Training in web developpement FullStack JavaScript (Bootstrap, HTML/CSS, NodeJS, ResFull API, Git, MySql,
                        MongoDB)' /><br/>
                  <Display periode='2017 - 2018' summary='Computer Use Vocational Training, FOSI-BAH, Guinea.' 
                      details='Computer Use Vocational Training (Windows, Word, Excel, PowerPoint)' />
              </div>
              <div className='skills'>
                  <h2>Skills</h2>
                  <Display periode='Web Developpement' 
                      details='HTML, CSS, Bootstrap, ReactJS, Nodejs, Git, ExpressJS, MongoDB, Mysql, SQL, ' /><br/>
                  <Display periode='Languages' 
                      details='Poular (Mother language), French (Native), English (Good), Greek (Basic and learning in present)' /><br/>
                  <Display periode='Digital Skills' 
                      details='Independent User: Good use of internet, e-mail and social media services. Good use of MS Office programs 
                      (Word, Excel, Powerpoint).' />
              </div>
          </div>
      </div>
  )
}

function Display(props){
  return(
    <div>
        <div><strong><u>{props.periode}:</u> {props.summary}</strong></div>
        <div>{props.details}</div>
        <strong><a href={props.link} target='blank'>{props.linkTitle} </a></strong>
    </div>
  )
}

export default Main;
