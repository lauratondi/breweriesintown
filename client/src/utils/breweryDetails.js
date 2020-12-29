export const getUniqueLocations = (breweries = [], existingLocations = []) => {
  // Is an array with only display name
  const locations = breweries
    // We make an array flat rather then having array of arrays
    .reduce((s, brewery) => [...s, ...(brewery.locations || [])], [])
    // We then just return an array of coutry.displayName if exists
    .map((el) => el.country.displayName);

  // Loop on locations to see if we can populate on the state
  locations.forEach((location) =>
    existingLocations.indexOf(location) === -1
      ? existingLocations.push(location)
      : null
  );
  return existingLocations;
};

export const getLocationFromBreweries = (brewery) => {
  return brewery.reduce(
    (state, beer) => getUniqueLocations(beer.breweries, state),
    []
  );
};

export const getBeersType = (brewery = []) => {
  let beerType = brewery.map((el) => el.style.shortName);
  beerType = beerType.filter((el, index) => beerType.indexOf(el) === index);
  return beerType;
};

export const getBreweryName = (brewery = []) => {
  let breweryName = brewery.map((el) => el.breweries.map((el) => el.name));
  breweryName = breweryName.reduce(
    (unique, item) => (unique.includes(item) ? unique : [...unique, item]),
    []
  );
  return breweryName;
};
