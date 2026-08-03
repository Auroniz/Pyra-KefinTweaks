// Centralized localization helpers for KefinTweaks / Pyra.
(function() {
    'use strict';

    const dictionaries = {
        fr: {
            'common.close': 'Fermer',
            'common.cancel': 'Annuler',
            'common.confirm': 'Confirmer',
            'common.save': 'Enregistrer',
            'common.delete': 'Supprimer',
            'common.edit': 'Modifier',
            'common.add': 'Ajouter',
            'common.remove': 'Retirer',
            'common.clear': 'Effacer',
            'common.enabled': 'Activé',
            'common.disabled': 'Désactivé',
            'common.loading': 'Chargement…',
            'common.unknown': 'Inconnu',
            'common.default': 'Par défaut',
            'sort.by': 'Trier par',
            'sort.order': 'Ordre de tri',
            'sort.ascending': 'Croissant',
            'sort.descending': 'Décroissant',
            'sort.sortTitle': 'Titre de tri',
            'sort.releaseDate': 'Date de sortie',
            'sort.dateAdded': 'Date d’ajout',
            'sort.communityRating': 'Note des utilisateurs',
            'sort.criticRating': 'Note de la critique',
            'watchlist.name': 'Ma liste',
            'watchlist.seriesProgress': 'Progression des séries',
            'watchlist.movieHistory': 'Historique des films',
            'watchlist.statistics': 'Statistiques',
            'watchlist.page': 'Page {current} sur {total}',
            'watchlist.refresh': 'Actualiser les données de {section}',
            'watchlist.count.show.one': '{count} série',
            'watchlist.count.show.other': '{count} séries',
            'watchlist.count.season.one': '{count} saison',
            'watchlist.count.season.other': '{count} saisons',
            'watchlist.count.episode.one': '{count} épisode',
            'watchlist.count.episode.other': '{count} épisodes',
            'watchlist.count.movie.one': '{count} film',
            'watchlist.count.movie.other': '{count} films',
            'media.season.one': '{count} saison',
            'media.season.other': '{count} saisons',
            'media.episode.one': '{count} épisode',
            'media.episode.other': '{count} épisodes',
            'search.results.one': 'Recherche terminée en {duration} ms — {count} résultat',
            'search.results.other': 'Recherche terminée en {duration} ms — {count} résultats',
            'subtitle.downloads.one': '{count} téléchargement',
            'subtitle.downloads.other': '{count} téléchargements',
            'home.recentMovies': 'Films récemment sortis',
            'home.recentEpisodes': 'Épisodes récemment diffusés',
            'home.trending': 'Tendances',
            'home.popularNetworks': 'Chaînes populaires',
            'home.watchAgain': 'À revoir',
            'home.upcoming': 'Prochainement',
            'home.genreMovies': 'Films du genre [Genre]',
            'home.topGenreMovies': 'Films du genre [Genre] les mieux notés',
            'home.studioShows': 'Séries de [Studio]',
            'home.topStudioShows': 'Séries de [Studio] les mieux notées',
            'home.becauseWatched': 'Parce que vous avez regardé [Movie]',
            'home.becauseLiked': 'Parce que vous avez aimé [Movie]',
            'home.starring': 'Avec [Actor]',
            'home.directedBy': 'Réalisé par [Director]',
            'home.writtenBy': 'Écrit par [Writer]',
            'home.becauseRecentlyWatched': 'Parce que vous avez récemment regardé [Movie]',
            'home.starringRecentlyWatched': 'Avec [Actor], parce que vous avez récemment regardé [Movie]',
            'home.directedRecentlyWatched': 'Réalisé par [Director], parce que vous avez récemment regardé [Movie]',
            'home.writtenRecentlyWatched': 'Écrit par [Writer], parce que vous avez récemment regardé [Movie]'
        },
        en: {
            'common.close': 'Close', 'common.cancel': 'Cancel', 'common.confirm': 'Confirm',
            'common.save': 'Save', 'common.delete': 'Delete', 'common.edit': 'Edit',
            'common.add': 'Add', 'common.remove': 'Remove', 'common.clear': 'Clear',
            'common.enabled': 'Enabled', 'common.disabled': 'Disabled', 'common.loading': 'Loading...',
            'common.unknown': 'Unknown', 'common.default': 'Default',
            'sort.by': 'Sort By', 'sort.order': 'Sort Order', 'sort.ascending': 'Ascending',
            'sort.descending': 'Descending', 'sort.sortTitle': 'Sort Title',
            'sort.releaseDate': 'Release Date', 'sort.dateAdded': 'Date Added',
            'sort.communityRating': 'Community Rating', 'sort.criticRating': 'Critic Rating',
            'watchlist.name': 'Watchlist', 'watchlist.seriesProgress': 'Series Progress',
            'watchlist.movieHistory': 'Movie History', 'watchlist.statistics': 'Statistics',
            'watchlist.page': 'Page {current} of {total}', 'watchlist.refresh': 'Refresh {section} data from server',
            'watchlist.count.show.one': '{count} Show', 'watchlist.count.show.other': '{count} Shows',
            'watchlist.count.season.one': '{count} Season', 'watchlist.count.season.other': '{count} Seasons',
            'watchlist.count.episode.one': '{count} Episode', 'watchlist.count.episode.other': '{count} Episodes',
            'watchlist.count.movie.one': '{count} Movie', 'watchlist.count.movie.other': '{count} Movies',
            'media.season.one': '{count} season', 'media.season.other': '{count} seasons',
            'media.episode.one': '{count} episode', 'media.episode.other': '{count} episodes',
            'search.results.one': 'Search completed in {duration}ms - {count} result found',
            'search.results.other': 'Search completed in {duration}ms - {count} results found',
            'subtitle.downloads.one': '{count} download', 'subtitle.downloads.other': '{count} downloads',
            'home.recentMovies': 'Recently Released Movies', 'home.recentEpisodes': 'Recently Aired Episodes',
            'home.trending': 'Trending', 'home.popularNetworks': 'Popular TV Networks',
            'home.watchAgain': 'Watch Again', 'home.upcoming': 'Upcoming',
            'home.genreMovies': '[Genre] Movies', 'home.topGenreMovies': 'Top Rated [Genre] Movies',
            'home.studioShows': 'Shows from [Studio]', 'home.topStudioShows': 'Top Rated Shows from [Studio]',
            'home.becauseWatched': 'Because you watched [Movie]', 'home.becauseLiked': 'Because you liked [Movie]',
            'home.starring': 'Starring [Actor]', 'home.directedBy': 'Directed by [Director]',
            'home.writtenBy': 'Written by [Writer]',
            'home.becauseRecentlyWatched': 'Because you recently watched [Movie]',
            'home.starringRecentlyWatched': 'Starring [Actor] because you recently watched [Movie]',
            'home.directedRecentlyWatched': 'Directed by [Director] because you recently watched [Movie]',
            'home.writtenRecentlyWatched': 'Written by [Writer] because you recently watched [Movie]'
        }
    };

    let selectedLocale = null;
    let observer = null;

    function normalizeLocale(value) {
        const locale = String(value || '').trim().toLowerCase().split(/[-_]/)[0];
        return locale === 'en' ? 'en' : locale === 'fr' ? 'fr' : '';
    }

    function detectJellyfinLocale() {
        try {
            return globalThis.Localization?.getCurrentCulture?.() ||
                globalThis.Globalize?.culture?.()?.name || '';
        } catch (error) {
            return '';
        }
    }

    function getLocale() {
        if (selectedLocale) return selectedLocale;
        selectedLocale = normalizeLocale(window.KefinTweaksConfig?.i18n?.locale) ||
            normalizeLocale(detectJellyfinLocale()) ||
            normalizeLocale(document.documentElement.lang) ||
            normalizeLocale(navigator.language) || 'fr';
        return selectedLocale;
    }

    function setLocale(locale) {
        selectedLocale = normalizeLocale(locale) || 'fr';
        localizeWatchlistTab();
        return selectedLocale;
    }

    function has(key, locale = getLocale()) {
        return Object.prototype.hasOwnProperty.call(dictionaries[normalizeLocale(locale)] || {}, key);
    }

    function interpolate(value, variables) {
        return String(value).replace(/\{([^{}]+)\}/g, (match, name) =>
            Object.prototype.hasOwnProperty.call(variables, name) ? variables[name] : match
        );
    }

    function t(key, variables = {}) {
        const locale = getLocale();
        const value = dictionaries[locale]?.[key] ?? dictionaries.en[key] ?? key;
        return interpolate(value, variables);
    }

    function plural(key, count, variables = {}) {
        const category = new Intl.PluralRules(getLocale()).select(Number(count));
        const pluralKey = has(`${key}.${category}`) ? `${key}.${category}` : `${key}.other`;
        return t(pluralKey, { ...variables, count: formatNumber(count) });
    }

    function formatDate(value, options = {}) {
        const date = value instanceof Date ? value : new Date(value);
        return Number.isNaN(date.getTime()) ? '' : new Intl.DateTimeFormat(getLocale(), options).format(date);
    }

    function formatNumber(value, options = {}) {
        return new Intl.NumberFormat(getLocale(), options).format(value);
    }

    function translateKnownDiscoveryTemplate(value) {
        const templates = {
            'Série de [Studio]': 'home.studioShows',
            'Serie de [Studio]': 'home.studioShows',
            'Shows from [Studio]': 'home.studioShows',
            'Top Rated Shows from [Studio]': 'home.topStudioShows',
            '[Genre] Movies': 'home.genreMovies',
            'Top Rated [Genre] Movies': 'home.topGenreMovies',
            'Because you watched [Movie]': 'home.becauseWatched',
            'Because you liked [Movie]': 'home.becauseLiked',
            'Starring [Actor]': 'home.starring',
            'Directed by [Director]': 'home.directedBy',
            'Written by [Writer]': 'home.writtenBy',
            'Because you recently watched [Movie]': 'home.becauseRecentlyWatched',
            'Starring [Actor] because you recently watched [Movie]': 'home.starringRecentlyWatched',
            'Directed by [Director] because you recently watched [Movie]': 'home.directedRecentlyWatched',
            'Written by [Writer] because you recently watched [Movie]': 'home.writtenRecentlyWatched'
        };
        return templates[value] ? t(templates[value]) : value;
    }

    function localizeWatchlistTab() {
        document.querySelectorAll('.headerTabs').forEach(headerTabs => {
            headerTabs.querySelectorAll('*').forEach(element => {
                if (element.children.length === 0 && element.textContent.trim() === 'Watchlist') {
                    element.textContent = t('watchlist.name');
                }
                if (element.getAttribute('title') === 'Watchlist') element.setAttribute('title', t('watchlist.name'));
                if (element.getAttribute('aria-label') === 'Watchlist') element.setAttribute('aria-label', t('watchlist.name'));
            });
        });
    }

    function startObserver() {
        if (observer) return;
        observer = new MutationObserver(localizeWatchlistTab);
        observer.observe(document.documentElement, { childList: true, subtree: true });
        localizeWatchlistTab();
    }

    window.KefinTweaksI18n = {
        t, has, getLocale, setLocale, formatDate, formatNumber, plural,
        translateKnownDiscoveryTemplate
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', startObserver, { once: true });
    } else {
        startObserver();
    }
})();
