export const getLocation = (state) => {
  const locations = state.locationMap;

  if (!locations) return {};

  return locations;
};

export const parseLocationData = (data) => {
  const l = [];

  data.forEach((v) => {
    l.push(...v[Object.keys(v)[0]]);
  });

  return l;
};
