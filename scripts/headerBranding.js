// Pyra global header branding module

(function() {
    'use strict';

    const BUTTON_ID = 'pyra-header-branding-button';
    let headerObserver = null;

    function goHome() {
        const nativeHomeButton = document.querySelector('.skinHeader .headerHomeButton');

        if (nativeHomeButton && typeof nativeHomeButton.click === 'function') {
            nativeHomeButton.click();
            return;
        }

        window.location.hash = '#/home';
    }

    function createBrandingButton() {
        const button = document.createElement('button');
        button.id = BUTTON_ID;
        button.type = 'button';
        button.title = 'Accueil';
        button.setAttribute('aria-label', 'Accueil');
        button.addEventListener('click', goHome);
        return button;
    }

    function mountBrandingButton() {
        const header = document.querySelector('.skinHeader');
        const headerLeft = header && header.querySelector('.headerLeft');
        const pageTitle = headerLeft && headerLeft.querySelector('.pageTitle');

        if (!headerLeft || !pageTitle) {
            return false;
        }

        const existingButtons = document.querySelectorAll(`#${BUTTON_ID}`);
        const button = existingButtons[0] || createBrandingButton();

        existingButtons.forEach((existingButton, index) => {
            if (index > 0) {
                existingButton.remove();
            }
        });

        if (button.parentElement !== headerLeft || button.nextElementSibling !== pageTitle) {
            headerLeft.insertBefore(button, pageTitle);
        }

        return true;
    }

    function observeHeader() {
        const header = document.querySelector('.skinHeader');

        if (!header) {
            return false;
        }

        if (headerObserver) {
            headerObserver.disconnect();
        }

        headerObserver = new MutationObserver(mountBrandingButton);
        headerObserver.observe(header, { childList: true, subtree: true });
        return true;
    }

    function initializeBranding() {
        if (mountBrandingButton() && observeHeader()) {
            return;
        }

        const discoveryObserver = new MutationObserver(() => {
            if (mountBrandingButton() && observeHeader()) {
                discoveryObserver.disconnect();
            }
        });

        discoveryObserver.observe(document.documentElement, { childList: true, subtree: true });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeBranding, { once: true });
    } else {
        initializeBranding();
    }

    console.log('[KefinTweaks HeaderBranding] Global header branding styles loaded');
})();
