import React from 'react';
import MiddleSection from '../MiddleSection';
import {homeObjOne,homeObjFour} from './Data';
function Home() {
    return (
        <>
            <MiddleSection {...homeObjOne}/>
            <MiddleSection {...homeObjFour}/>
            
        </>
    )
}

export default Home
