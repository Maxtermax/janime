const takeSnapshot = (state) => {
  return { ...state }
}

/**
 * @function Anime
 * @param  {type} state   {description}
 * @param  {type} options {description}
 * @return {type} {description}
 */
const Main = (state, action = {}) => {
  let { payload, type } = action;
  if(type === "SET") {
    let snapshot = {...takeSnapshot(state), ...payload };
    //console.log('snapshot ', snapshot);
    return { ...state, ...snapshot };
  }

  if (type === "SEARCH_ANIME") {
    let snapshot = { ...takeSnapshot(state) };    
    snapshot.setup.filterBy = new RegExp(`${payload.toLowerCase()}`, "g");
    //console.log('snapshot ', snapshot);
    return { ...state, ...snapshot };
  }
  return { ...state };
}

export default Main;
