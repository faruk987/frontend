import React from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ChatSection from "../../views/Chat/ChatSection";

const propTypes = {
    ...SectionProps.types
}

const defaultProps = {
    ...SectionProps.defaults
}

const ChatPage = ({
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

   // const user = AuthService.getCurrentUser();

    return (
        <section
            {...props}
            className={outerClasses}
        >
            <div className="container-sm">
                <div className={innerClasses}>
                    <div className="hero-content">
                        <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
                            <span className="text-color-success">Chat</span> with users
                        </h1>
                        <div className="container-xs">
                            <hr/>
                            <ChatSection/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

ChatPage.propTypes = propTypes;
ChatPage.defaultProps = defaultProps;

export default ChatPage;