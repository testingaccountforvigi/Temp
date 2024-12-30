import React, { useState } from 'react';
import { Container } from '@mui/material';

const SleepTracker = () => {
  const [activeTab, setActiveTab] = useState('insights');

  return (
    <div className="app-wrapper">
      <header className="app-header">
        <Container>
          <div className="header-content">
            <div className="logo">
              <span className="material-icons">monitoring</span>
              Digital Wellness
            </div>
            <div className="avatar">M</div>
          </div>
        </Container>
      </header>

      <Container className="main-content">
        <div className="welcome-section">
          <h1>Hi Mahesh</h1>
          <div className="alert-badge">
            <span className="material-icons">warning</span>
            Critical Sleep Alert
          </div>
        </div>

        <div className="stats-card">
          <div className="stats-header">
            <div className="time-display">
              <span className="hours">2.0</span>
              <span className="unit">hours</span>
            </div>
            <div className="trend">
              <span className="material-icons">trending_down</span>
              Average sleep this week
            </div>
          </div>
          <p className="alert-message">You're sleeping 6 hours less than recommended</p>
          <button className="action-button">
            View sleep recommendations
            <span className="material-icons">arrow_forward</span>
          </button>
        </div>

        <div className="screen-time-card">
          <div className="stats-header">
            <div className="time-display">
              <span className="hours">153</span>
              <span className="unit">hours</span>
            </div>
            <div className="trend negative">
              <span className="material-icons">trending_up</span>
              32% above limit
            </div>
          </div>
          <p className="alert-message">Your screen time needs immediate attention</p>
        </div>

        <div className="devices-section">
          <h2>Your Devices</h2>
          <div className="device-grid">
            {[
              { name: "Mahesh's MacBook", hours: 21, icon: 'laptop_mac' },
              { name: "Mahesh's iPhone", hours: 12, icon: 'phone_iphone' },
              { name: "Vigilant's iPad", hours: 10, icon: 'tablet_mac' }
            ].map((device) => (
              <div key={device.name} className="device-card">
                <span className="material-icons">{device.icon}</span>
                <div className="device-info">
                  <span className="device-name">{device.name}</span>
                  <span className="device-hours">{device.hours}h</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>

      <div className="bottom-nav">
        {['insights', 'sleep', 'devices', 'more'].map((tab) => (
          <div 
            key={tab}
            className={`nav-item ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            <span className="material-icons">
              {tab === 'insights' ? 'auto_graph' : 
               tab === 'sleep' ? 'bedtime' :
               tab === 'devices' ? 'devices' : 'more_horiz'}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SleepTracker; 