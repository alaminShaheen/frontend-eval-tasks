import React from 'react';
import "components/Header.css"

type HeaderProps = {
    title: string;
}

export const Header = (props: HeaderProps) => {
    const {title} = props;
    return (
	<header className="header">
	    <h1 className="title">
		{title}
	    </h1>
	</header>
    );
};
