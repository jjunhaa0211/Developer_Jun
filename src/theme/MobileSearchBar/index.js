import React, { useState, useRef, useCallback, useMemo } from 'react';
import { createPortal } from 'react-dom';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useHistory } from '@docusaurus/router';
import { useBaseUrlUtils } from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';
import useSearchQuery from '@theme/hooks/useSearchQuery';
import { useDocSearchKeyboardEvents } from '@docsearch/react';
import useAlgoliaContextualFacetFilters from '@theme/hooks/useAlgoliaContextualFacetFilters';
import { translate } from '@docusaurus/Translate';
import SearchIcon from '../../../static/img/searchIcon.svg';

let DocSearchModal = null;

function Hit({ hit, children }) {
  return <Link to={hit.url}>{children}</Link>;
}

function ResultsFooter({ state, onClose }) {
  const { generateSearchPageLink } = useSearchQuery();

  return (
    <Link to={generateSearchPageLink(state.query)} onClick={onClose}>
      See all {state.context.nbHits} results
    </Link>
  );
}

function DocSearch({ contextualSearch, ...props }) {
  const { siteMetadata } = useDocusaurusContext();

  const contextualSearchFacetFilters = useAlgoliaContextualFacetFilters();

  const configFacetFilters = props.searchParameters?.facetFilters ?? [];

  const facetFilters = contextualSearch ? [...contextualSearchFacetFilters, ...configFacetFilters] : configFacetFilters;

  const searchParameters = {
    ...props.searchParameters,
    facetFilters,
  };

  const { withBaseUrl } = useBaseUrlUtils();
  const history = useHistory();
  const searchContainer = useRef(null);
  const searchButtonRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [initialQuery, setInitialQuery] = useState(null);

  const importDocSearchModalIfNeeded = useCallback(() => {
    if (DocSearchModal) {
      return Promise.resolve();
    }

    return Promise.all([
      import('@docsearch/react/modal'),
      import('@docsearch/react/style'),
      import('./styles.css'),
    ]).then(([{ DocSearchModal: Modal }]) => {
      DocSearchModal = Modal;
    });
  }, []);

  const onOpen = useCallback(() => {
    importDocSearchModalIfNeeded().then(() => {
      searchContainer.current = document.createElement('div');
      document.body.insertBefore(
        searchContainer.current,
        document.body.firstChild
      );
      setIsOpen(true);
    });
  }, [importDocSearchModalIfNeeded, setIsOpen]);

  const onClose = useCallback(() => {
    setIsOpen(false);
    searchContainer.current.remove();
  }, [setIsOpen]);

  const onInput = useCallback(
    (event) => {
      importDocSearchModalIfNeeded().then(() => {
        setIsOpen(true);
        setInitialQuery(event.key);
      });
    },
    [importDocSearchModalIfNeeded, setIsOpen, setInitialQuery]
  );

  const navigator = useRef({
    navigate({ itemUrl }) {
      history.push(itemUrl);
    },
  }).current;

  const transformItems = useRef((items) => {
    return items.map((item) => {
      const a = document.createElement('a');
      a.href = item.url;

      return {
        ...item,
        url: withBaseUrl(`${a.pathname}${a.hash}`),
      };
    });
  }).current;

  const resultsFooterComponent = useMemo(
    () => (footerProps) => <ResultsFooter {...footerProps} onClose={onClose} />,
    [onClose]
  );

  const transformSearchClient = useCallback(
    (searchClient) => {
      searchClient.addAlgoliaAgent(
        'docusaurus',
        siteMetadata.docusaurusVersion
      );

      return searchClient;
    },
    [siteMetadata.docusaurusVersion]
  );

  useDocSearchKeyboardEvents({
    isOpen,
    onOpen,
    onClose,
    onInput,
    searchButtonRef,
  });

  const translatedSearchLabel = translate({
    id: 'theme.SearchBar.label',
    message: 'Search...',
    description: 'The ARIA label and placeholder for search button',
  });

  return (
    <>
      <Head>
        <link
          rel="preconnect"
          href={`https://${props.appId}-dsn.algolia.net`}
          crossOrigin="anonymous"
        />
      </Head>

      <div>
        <a
          onTouchStart={importDocSearchModalIfNeeded}
          onFocus={importDocSearchModalIfNeeded}
          onMouseOver={importDocSearchModalIfNeeded}
          onClick={onOpen}
          ref={searchButtonRef}
          translations={{
            buttonText: translatedSearchLabel,
            buttonAriaLabel: translatedSearchLabel,
          }}
        >
          <SearchIcon className={'mobileSearchIcon'} />
        </a>
      </div>

      {isOpen &&
        createPortal(
          <DocSearchModal
            onClose={onClose}
            initialScrollY={window.scrollY}
            initialQuery={initialQuery}
            navigator={navigator}
            transformItems={transformItems}
            hitComponent={Hit}
            resultsFooterComponent={resultsFooterComponent}
            transformSearchClient={transformSearchClient}
            {...props}
            searchParameters={searchParameters}
          />,
          searchContainer.current
        )}
    </>
  );
}

function MobileSearchBar() {
  const { siteConfig } = useDocusaurusContext();
  return <DocSearch {...siteConfig.themeConfig.algolia} />;
}

export default MobileSearchBar;
