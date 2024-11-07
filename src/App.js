import React, { Component } from 'react';
import profilePic from "./PP.jpg";
import mespic from "./os.jpeg";
import solarpic from "./logo.svg";
import hitphams from "./api.jpg";


class MyProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMore: false
    };
  }

  toggleBio = () => {
    this.setState({ showMore: !this.state.showMore });
  };

  render() {
    return (
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <img src={profilePic} alt="Profile" style={{ width: '150px', borderRadius: '50%' }} />
        <h1>Vineeth Kumar Jampala</h1>
        <button onClick={this.toggleBio} style={{ backgroundColor: '#28a745', color: '#fff', padding: '10px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          {this.state.showMore ? 'Show Less' : 'Read More'}
        </button>
        {this.state.showMore && (
          <p style={{ padding: '10px', maxWidth: '600px', margin: 'auto' }}>
            Hello! This is Vineeth Kumar Jampala,  With three years as a Business Intelligence (BI) Analyst, I developed expertise in data analysis, visualization, and strategic reporting to drive data-driven decisions. My experience includes leveraging BI tools to uncover insights and optimize business processes..
          </p>
        )}
        
        <h2>Highlighted Projects</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', margin: '20px' }}>
          <div>
            <img src={mespic} alt="MES" style={{ width: '150px', height: '100px' }} />
            <h3>Manufacturing Execution System</h3>
            <p>A manufacturing execution system (MES) is a software-based system that tracks, monitors, and controls the manufacturing process in real time.</p>
            <a href="#MES">Project Link</a>
          </div>
          <div>
            <img src={solarpic} alt="Solar GRAPH" style={{ width: '150px', height: '100px' }} />
            <h3>Solar Graph</h3>
            <p>Renewable energy asset management software tracks surface land assets, acquisitions. Accelerate Clean Energy Projects with Land Management Software. Manage Profitability. Automate Price Contracts. Driver Performance.</p>
            <a href="#Solar Graph">Project Link</a>
          </div>
          <div>
            <img src={hitphams} alt="HITPHAMS" style={{ width: '150px', height: '100px' }} />
            <h3>HITPHAMS</h3>
            <p>A software package that systematizes all processes ranging from the process for manufacturing stock pharmaceuticals to the pharmaceutical production process.</p>
            <a href="#HITPHAMS">Project Link</a>
          </div>
        </div>
        
        <h2>Connect with me!!!</h2>
        <div style={{ fontSize: '24px' }}>
          <a href="mailto:vineethjampala08@gmail.com" style={{ margin: '0 10px' }}>📧</a>
          <a href="https://github.com/jampala250897" style={{ margin: '0 10px' }}>🐱</a>
          <a href="https://www.google.com/search?q=linkedin+login&sca_esv=a0b6cc145a6c8085&authuser=1&sxsrf=ADLYWILZp_IpvrjMyaxShSbTe43kXbnXpA%3A1730945339277&source=hp&ei=OyEsZ7HbDtSkkPIPlqPmyAw&iflsig=AL9hbdgAAAAAZywvSxeX81j9l-h_YbmPoHpjnEhsYDoP&oq=linkedin+log&gs_lp=Egdnd3Mtd2l6IgxsaW5rZWRpbiBsb2cqAggAMgsQABiABBixAxiDATIIEAAYgAQYsQMyCBAAGIAEGLEDMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABEiyOFD0BliaL3ABeACQAQCYAW2gAcUEqgEDNi4xuAEByAEA-AEBmAIIoALuBKgCCsICBxAjGCcY6gLCAg0QLhjRAxjHARgnGOoCwgIUEC4YgAQYsQMYgwEYxwEYjgUYrwHCAg4QLhiABBixAxjRAxjHAcICDhAAGIAEGLEDGIMBGIoFwgIREC4YgAQYsQMY0QMYgwEYxwHCAg4QLhiABBixAxiDARiKBcICCxAuGIAEGLEDGIMBwgIOEC4YgAQYxwEYjgUYrwHCAgUQLhiABMICCBAuGIAEGLEDwgIOEC4YgAQYsQMYgwEY1ALCAgsQLhiABBjHARivAcICCxAAGIAEGLEDGMkDwgIIEAAYgAQYkgOYAwmSBwM3LjGgB5xJ&sclient=gws-wiz" style={{ margin: '0 10px' }}>🔗</a>
        </div>
      </div>
    );
  }
}

export default MyProfile;