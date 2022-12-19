import Content from '../layout/content';
import GetContent from '../components/GetContent';
import Navbar from '../layout/navbar';
import { useState } from 'react';

function PageStart() {
    const [route="", setRoute] = useState("5");    
   
    return (
        <Navbar
            setRoute={setRoute}>
            <Content>
                <GetContent site={route} />
            </Content>
        </Navbar>
    )
};

export default PageStart;