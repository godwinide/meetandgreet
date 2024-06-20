"use client"

import { useEffect } from 'react';

const GoogleTranslate = () => {
    useEffect(() => {
        const addGoogleTranslateScript = () => {
            if (!document.getElementById('google-translate-script')) {
                const script = document.createElement('script');
                script.id = 'google-translate-script';
                script.type = 'text/javascript';
                script.async = true;
                script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
                document.body.appendChild(script);

                window.googleTranslateElementInit = () => {
                    new window.google.translate.TranslateElement(
                        { pageLanguage: 'en', layout: google.translate.TranslateElement.InlineLayout.VERTICAL },
                        'google_translate_element'
                    );
                };
            }
        };

        addGoogleTranslateScript();

        return () => {
            if (window.google) {
                delete window.google.translate;
            }
        };
    }, []);

    return <div className='container mt-2'>
        <div id="google_translate_element"></div>
    </div>
};

export default GoogleTranslate;
