import React from 'react';
import {Button} from './Button';
import {Link} from 'react-router-dom';
import './MiddleSection.css';


function MiddleSection(
    {
        lightBg,
        topLine,
        lightText,
        lightTextDesc,
        headline,
        description,
        buttonLabel,
        img,
        alt,
        imgStart
      }
) {
    return (
        <>
          <div
            className={lightBg ? 'middle-section' : 'middle-section darkBg'}
          >
            <div className='container'>
              <div
                className='row middle-row'
                style={{
                  display: 'flex',
                  flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'
                }}
              >
                <div className='col'>
                  <div className='middle-text-wrapper'>
                    <div className='top-line'>{topLine}</div>
                    <h1 className={lightText ? 'heading' : 'heading dark'}>
                      {headline}
                    </h1>
                    <p
                      className={
                        lightTextDesc
                          ? 'middle-subtitle'
                          : 'middle-subtitle dark'
                      }
                    >
                      {description}
                    </p>
                    <Link to='/menu'>
                      <Button buttonSize='btn--wide' buttonColor='blue'>
                        {buttonLabel}
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className='col'>
                  <div className='middle-img-wrapper'>
                    <img src={img} alt={alt} className='middle-img' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      );
}
export default MiddleSection;