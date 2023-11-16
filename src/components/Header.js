import React from 'react'

const Header = () => {
    return (
        <>
            <div className=' text-white bg-secondary text-center py-3   rounded text-decoration-underline' style={{width:"100%", zIndex:"9999", boxShadow:"10px 5px 5px black", position:"fixed", top:"0px", left:"0px", zIndex:"9999", marginBottom:"200px"}}>
                <h1 className='fst-italic'>TOP RATED MOVIES IN 2023</h1>
            </div>
        </>
    )
}

export default Header;