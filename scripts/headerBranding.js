// Pyra global header branding module

(function() {
    'use strict';

    const BUTTON_ID = 'pyra-header-branding-button';
    let headerObserver = null;

    function applyPyraFavicon() {
        const root = window.KefinTweaksConfig?.kefinTweaksRoot;

        if (!root || !document.head) {
            return;
        }

        const normalizedRoot = root.endsWith('/') ? root : `${root}/`;
        const faviconUrl = `${normalizedRoot}assets/branding/pyra-header-icon-white.png?v=pyra-1`;
        const iconSelector = [
            'link[rel="icon"]',
            'link[rel="shortcut icon"]',
            'link[rel="apple-touch-icon"]'
        ].join(', ');

        document.querySelectorAll(iconSelector).forEach(link => {
            if (link.dataset.pyraBranding !== 'favicon') {
                link.remove();
            }
        });

        const definitions = [
            { rel: 'icon', sizes: '256x256' },
            { rel: 'shortcut icon' },
            { rel: 'apple-touch-icon', sizes: '256x256' }
        ];
        const existingPyraLinks = Array.from(
            document.querySelectorAll('link[data-pyra-branding="favicon"]')
        );
        const retainedLinks = new Set();

        definitions.forEach(definition => {
            let link = existingPyraLinks.find(existingLink =>
                !retainedLinks.has(existingLink) &&
                existingLink.getAttribute('rel') === definition.rel
            );

            if (!link) {
                link = document.createElement('link');
                document.head.appendChild(link);
            }

            retainedLinks.add(link);
            link.setAttribute('rel', definition.rel);
            link.setAttribute('type', 'image/png');
            link.setAttribute('href', faviconUrl);
            link.setAttribute('data-pyra-branding', 'favicon');

            if (definition.sizes) {
                link.setAttribute('sizes', definition.sizes);
            } else {
                link.removeAttribute('sizes');
            }
        });

        existingPyraLinks.forEach(link => {
            if (!retainedLinks.has(link)) {
                link.remove();
            }
        });
    }

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

    applyPyraFavicon();
    window.addEventListener('pageshow', applyPyraFavicon);

    console.log('[KefinTweaks HeaderBranding] Global header branding styles loaded');
})();
