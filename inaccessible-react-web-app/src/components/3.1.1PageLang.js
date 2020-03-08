import React, { useEffect } from 'react';

function PageLang(){
    useEffect(()=> {
        document.getElementsByTagName('html')[0].removeAttribute('lang')
        return () => {
            document.getElementsByTagName('html')[0].setAttribute('lang', 'en')
        };
    });
    return (
        <h1>The page language is no longer english.</h1>
    );
}

export default PageLang;