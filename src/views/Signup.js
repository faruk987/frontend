import React from 'react';
import classNames from 'classnames';
import { SectionProps } from '../utils/SectionProps';
import SignUpForm from "./auth/SignUpForm";

const propTypes = {
    ...SectionProps.types
}

const defaultProps = {
    ...SectionProps.defaults
}

const Signup = ({
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
                        <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
                            Sign <span className="text-color-success">Up</span>
                        </h1>
                        <div className="container-xs">
                            <SignUpForm/>
                            <p>Already have an account? <a href={'/login'}>Login!</a></p>
                    </div>
                </div>
            </div>
        </section>
    );
}

Signup.propTypes = propTypes;
Signup.defaultProps = defaultProps;

export default Signup;