import React from 'react';
import { Link } from 'react-router-dom';

const Stats: React.FC = (props: any) => {
    return (
        <div>
            <Link to="/">All tasks</Link>
            {props.match.params.id}
        </div>
    )
}

export default Stats;
