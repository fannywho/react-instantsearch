import React from 'react';
import connectMenu from '../connectors/connectMenu';
import PanelCallbackHandler from '../components/PanelCallbackHandler';
import MenuSelect from '../components/MenuSelect';

/**
 * The MenuSelect component displays a select that lets the user choose a single value for a specific attribute.
 * @name MenuSelect
 * @kind widget
 * @requirements The attribute passed to the `attribute` prop must be present in "attributes for faceting"
 * on the Algolia dashboard or configured as `attributesForFaceting` via a set settings call to the Algolia API.
 * @propType {string} attribute - the name of the attribute in the record
 * @propType {string} [defaultRefinement] - the value of the item selected by default
 * @propType {function} [transformItems] - Function to modify the items being displayed, e.g. for filtering or sorting them. Takes an items as parameter and expects it back in return.
 * @themeKey ais-MenuSelect - the root div of the widget
 * @themeKey ais-MenuSelect-noRefinement - the root div of the widget when there is no refinement
 * @themeKey ais-MenuSelect-select - the `<select>`
 * @themeKey ais-MenuSelect-option - the select `<option>`
 * @translationkey seeAllOption - The label of the option to select to remove the refinement
 * @example
 * import React from 'react';
 *
 * import { MenuSelect, InstantSearch } from 'react-instantsearch/dom';
 *
 * export default function App() {
 *   return (
 *     <InstantSearch
 *       appId="latency"
 *       apiKey="6be0576ff61c053d5f9a3225e2a90f76"
 *       indexName="ikea"
 *     >
 *       <MenuSelect attribute="category" />
 *     </InstantSearch>
 *   );
 * }
 */

const MenuSelectWidget = props => (
  <PanelCallbackHandler {...props}>
    <MenuSelect {...props} />
  </PanelCallbackHandler>
);

export default connectMenu(MenuSelectWidget);
