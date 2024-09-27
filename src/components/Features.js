import React from 'react';
import './Features.css';

const Features = () => {
      const features = [
        { title: 'Certifications', description: 'Each of our plans will provide you and your team with certifications.', icon: '📜' },
        { title: 'Notifications', description: 'Send out notifications to all your customers to keep them engaged.', icon: '📢' },
        { title: 'Bundles', description: 'High-quality bundles of awesome tools to help you out.', icon: '📦' },
        { title: 'Developer Tools', description: 'Developer tools to help grow your application and keep it up-to-date.', icon: '🛠️' },
        { title: 'Building Blocks', description: 'The right kind of building blocks to take your company to the next level.', icon: '🧱' },
        { title: 'Coupons', description: 'Coupons system to provide special offers and discounts for your app.', icon: '🎟️' },
      ];
    
      return (
        <div className="App">
          <h1>Our Features</h1>
          <p>Check out our list of awesome features below.</p>
          <div className="feature-grid">
            {features.map((feature, index) => (
              <div className="feature-card" key={index}>
                <div className="icon">{feature.icon}</div>
                <h2>{feature.title}</h2>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      );
    }

    
export default Features;