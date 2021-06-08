'use strict';

    /**
     * Defines an instance of the Locator+ solution, to be instantiated
     * when the Maps library is loaded.
     */
    function LocatorPlus(configuration) {

      const locator = this;

      locator.locations = configuration.locations || [];
      locator.capabilities = configuration.capabilities || {};

      const mapEl = document.getElementById('map');
      locator.panelListEl = document.getElementById('locations-panel-list');
      const sectionNameEl =
        document.getElementById('location-results-section-name');
      const resultsContainerEl = document.getElementById('location-results-list');

      const itemsTemplate = Handlebars.compile(
        document.getElementById('locator-result-items-tmpl').innerHTML);

      locator.selectedLocationIdx = null;
      locator.userCountry = null;

      // Initialize the map -------------------------------------------------------
      const mapOptions = configuration.mapOptions;
      locator.map = new google.maps.Map(mapEl, {
        fullscreenControl: mapOptions.fullscreenControl,
        zoomControl: mapOptions.zoomControl,
        streetViewControl: mapOptions.streetViewControl,
        mapTypeControl: mapOptions.mapTypeControl,
        mapTypeControlOptions: {
          position: google.maps.ControlPosition.TOP_RIGHT,
        },
      });

      // Store selection.
      const selectResultItem = function (locationIdx, panToMarker) {
        locator.selectedLocationIdx = locationIdx;
        for (let locationElem of resultsContainerEl.children) {
          locationElem.classList.remove('selected');
          if (getResultIndex(locationElem) === locator.selectedLocationIdx) {
            locationElem.classList.add('selected');
          }
        }
        if (panToMarker && (locationIdx != null)) {
          locator.map.panTo(locator.locations[locationIdx].coords);
        }
      };

      // Create a marker for each location.
      const markers = locator.locations.map(function (location, index) {
        const marker = new google.maps.Marker({
          position: location.coords,
          map: locator.map,
          title: location.title,
        });
        marker.addListener('click', function () {
          selectResultItem(index, false);
        });
        return marker;
      });

      // Fit map to marker bounds.
      locator.updateBounds = function () {
        const bounds = new google.maps.LatLngBounds();
        for (let i = 0; i < markers.length; i++) {
          bounds.extend(markers[i].getPosition());
        }
        locator.map.fitBounds(bounds);
      };
      locator.updateBounds();

      // Render the results list --------------------------------------------------
      const getResultIndex = function (elem) {
        return parseInt(elem.getAttribute('data-location-index'));
      };

      locator.renderResultsList = function () {
        let locations = locator.locations.slice();
        for (let i = 0; i < locations.length; i++) {
          locations[i].index = i;
        }
        sectionNameEl.textContent = `All locations (${locations.length})`;
        const resultItemContext = { locations: locations };
        resultsContainerEl.innerHTML = itemsTemplate(resultItemContext);
        for (let item of resultsContainerEl.children) {
          const resultIndex = getResultIndex(item);
          if (resultIndex === locator.selectedLocationIdx) {
            item.classList.add('selected');
          }

          const resultSelectionHandler = function () {
            selectResultItem(resultIndex, true);
          };

          // Clicking anywhere on the item selects this location.
          // Additionally, create a button element to make this behavior
          // accessible under tab navigation.
          item.addEventListener('click', resultSelectionHandler);
          item.querySelector('.select-location')
            .addEventListener('click', function (e) {
              resultSelectionHandler();
              e.stopPropagation();
            });
        }
      };

      // Optional capability initialization --------------------------------------

      // Initial render of results -----------------------------------------------
      locator.renderResultsList();
    }
