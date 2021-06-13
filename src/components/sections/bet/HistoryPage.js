import React from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../../utils/SectionProps';
import HistoryList from "../../../views/Bet/History/HistoryList";

const propTypes = {
    ...SectionProps.types
}

const defaultProps = {
    ...SectionProps.defaults
}

const HistoryPage = ({
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
                        <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
                            Your <span className="text-color-success">Bet</span> History
                        </h1>
                        <div className="container-xs">
                            <HistoryList/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

HistoryPage.propTypes = propTypes;
HistoryPage.defaultProps = defaultProps;

export default HistoryPage;