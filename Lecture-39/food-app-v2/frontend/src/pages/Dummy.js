import React, {memo} from 'react';

const Dummy = memo((props) => {
    console.log('inside dummy');
    return (
        <div>Dummy</div>
    )
})

export default Dummy