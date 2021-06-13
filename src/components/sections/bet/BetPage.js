import React from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../../utils/SectionProps';
import MatchDetail from "../../../views/Match/MatchDetail";
import BetDetail from "../../../views/Bet/BetDetail";

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const BetPage = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <BetDetail quotation={props.quotation} homeTeam={props.homeTeam} awayTeam={props.awayTeam} id={props.id}/>
          </div>
        </div>
      </div>
    </section>
  );
}

BetPage.propTypes = propTypes;
BetPage.defaultProps = defaultProps;

export default BetPage;