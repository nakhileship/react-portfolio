import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.jpg";
import IMG6 from "../../assets/portfolio6.jpg";


// do not use image in production

const data = [
  {
    id:1,
    image:IMG1,
    title:'Assetly Iconography Guide Branding',
    github:'https://github.com',
    demo:'https://dribbble.com/shots/19885316-Assetly-Iconography-Guide-Branding'
  },
  {
    id:2,
    image:IMG2,
    title:'Ember: Temperature Matters Mobile App Concept',
    github:'https://github.com',
    demo:'https://dribbble.com/shots/19884492-Ember-Temperature-Matters-Mobile-App-Concept'
  },
  {
    id:3,
    image:IMG3,
    title:'Assetly Iconography Guide Branding',
    github:'https://github.com',
    demo:'https://dribbble.com/shots/19877142-Vessel-Habits-Health-Tracker-Case-Study'

  },
  {
    id:4,
    image:IMG4,
    title:'Assetly Iconography Guide Branding',
    github:'https://github.com',
    demo:'https://dribbble.com/shots/19885316-Assetly-Iconography-Guide-Branding'
  },
  {
    id:5,
    image:IMG5,
    title:'Real Estate App - Concept',
    github:'https://github.com',
    demo:'https://dribbble.com/shots/19887451-Real-Estate-App-Concept'

  },
  {
    id:6,
    image:IMG6,
    title:'Card Game Website Concept',
    github:'https://github.com',
    demo:'https://dribbble.com/shots/19886236-Card-Game-Website-Concept'
  }
]





const portfolio = () => {
  return (
    <div>
      <section id="portpolio">
        <h5>My React Work</h5>
        <h2>Portfolio</h2>

        <div className="container portfolio__container">
         {
          data.map(({id,image,title,github,demo }) => {
            return (
              <article key={id} className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
              <a href={github} className="btn">
                Github
              </a>
              <a
                href={demo}
                className="btn btn-primary"
                target="_blank"
              >
                Live Demo
              </a>
            </div>
          </article>
            )
          })
         }
        </div>
      </section>
    </div>
  );
};

export default portfolio;
