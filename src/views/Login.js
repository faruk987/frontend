import React from 'react';
import classNames from 'classnames';
import { SectionProps } from '../utils/SectionProps';
import LoginForm from "./auth/LoginForm";

const propTypes = {
    ...SectionProps.types
}

const defaultProps = {
    ...SectionProps.defaults
}

const Login = ({
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
                        Log <span className="text-color-success">In</span>
                    </h1>
                    <div className="container-xs">
                        <LoginForm/>
                        <p>Don't have an account yet? <a href={'/signup'}>Sing Up</a></p>
                    </div>
                </div>
            </div>
        </section>
    );
}

Login.propTypes = propTypes;
Login.defaultProps = defaultProps;

export default Login;