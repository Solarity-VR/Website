import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <a href="mailto:team@solarity.xyz" target="blank">Email</a>
        </li>
        <li>
          <a href="https://twitter.com/home" target="blank">About us</a>
        </li>
        <li>
          <a href="https://twitter.com/home" target="blank">FAQ's</a>
        </li>
        <li>
          <a href="https://twitter.com/home" target="blank">Support</a>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;