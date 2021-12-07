import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const Testimonial = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'What Moves Us',
    paragraph: 'The dream for a better, brighter future. A future in which data is owned by the people, in which the mental health of users is more important than profit, in which algorithms are transparent and help people in becoming better versions of themselves.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-right" data-reveal-delay="200">
              <div className="tiles-item-inner">
              <div className="testimonial-item-footer text-s mt-32 mb-0 has-bottom-divider">
                  <span className="testimonial-item-name text-color-high">Liberty</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="#0">Libertè</a>
                  </span>
                  
                </div>
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    Using Solana/Ethereum as the operating system of the Metaverse we’re able to leverage on the permissionless networks to achieve a truly free experience. (Tags over contents and Blockchained Rendering enable a Parental-Control Like filter on metaverse contents for kids)
                      </p>
                </div>

              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
              <div className="testimonial-item-footer text-s mt-32 mb-0 has-bottom-divider">
                  <span className="testimonial-item-name text-color-high">Neutrality </span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="#0">Egalitè</a>
                  </span>
                </div>
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    Using DeFi to power the platform’s computing network expenses because if the source of revenue is decentralized then also the platform will be decentralized.
                      </p>
                </div>
                
              </div>
            </div>

            <div className="tiles-item reveal-from-left" data-reveal-delay="200">
              <div className="tiles-item-inner">
              <div className="testimonial-item-footer text-s mt-32 mb-0 has-bottom-divider">
                  <span className="testimonial-item-name text-color-high">Sustainability</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="#0">Fraternitè</a>
                  </span>
                </div>
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    We will never distribute profit to token holders, all the platform’s revenue will be used to entirely pay for the platform’s development and the network’s expenses. Our goal is to remove barriers to the access of XR technologies giving a chance for everybody to experiment
                      </p>
                </div>
                
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;