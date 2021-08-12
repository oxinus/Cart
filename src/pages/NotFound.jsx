import React from 'react';

const NotFound = () => {
    return (
        <div className='notfound-container'>
            <div className ='text-container'>
                <div className='notfound-header'>Page Not Found</div>
                <div className='notfound-title'>Looks like you've followed a broken link or entered a URL that doesn't exist on this site</div>
                <a href='/' className='back-link'><i class="fa fa-angle-left angel"></i> Back to our site</a>
            </div>
        </div>
    )
}
export default NotFound
