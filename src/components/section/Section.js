import React from 'react'
import './Section.css'
import BG from '../../bg.jpeg'
import BG1 from '../../bg1.jpeg'
import BG2 from '../../bg2.jpeg'



const Section = () => {
    return (
        <div className="section">
            <div className="section-itens">
                <img src={BG} />
                <h2>titulo 1</h2>
                <p>Duis at sem a diam lacinia tempor. Nulla sed elementum est. Nullam finibus et ligula nec hendrerit. Suspendisse varius suscipit velit, at eleifend eros tincidunt id.</p>
            </div>
            <div className="section-itens">
                <img src={BG1} />
                <h2>titulo 2</h2>
                <p>Duis at sem a diam lacinia tempor. Nulla sed elementum est. Nullam finibus et ligula nec hendrerit. Suspendisse varius suscipit velit, at eleifend eros tincidunt id.</p>
            </div>
            <div className="section-itens">
                <img src={BG2} />
                <h2>titulo 3</h2>
                <p>Duis at sem a diam lacinia tempor. Nulla sed elementum est. Nullam finibus et ligula nec hendrerit. Suspendisse varius suscipit velit, at eleifend eros tincidunt id.</p>
            </div>
            <div className="section-itens">
                <img src={BG1} />
                <h2>titulo 4</h2>
                <p>Duis at sem a diam lacinia tempor. Nulla sed elementum est. Nullam finibus et ligula nec hendrerit. Suspendisse varius suscipit velit, at eleifend eros tincidunt id.</p>
            </div>

        </div>
    );
}

export default Section;