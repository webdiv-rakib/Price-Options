import React from 'react';
import PropTypes from 'prop-types';
const Link = ({route}) => {
    return (
        <div>
            <li className='mr-10 hover:bg-amber-500 px-5'><a href={route.path}>{route.name}</a></li>
        </div>
    );
};
Link.prototypes = {
    route:PropTypes.object
}
export default Link;