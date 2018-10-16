const takeSnapshot = (state) => {
  return { ...state }
}

/**
 * @function Genres
 * @param  {type} state   {description}
 * @param  {type} options {description}
 * @return {type} {description}
 */
const Genres = (state, action = {}) => {
  let { payload, type } = action;
  if (type === "SET") {
    let snapshot = { ...takeSnapshot(state), ...payload };
    //console.log('snapshot ', snapshot);
    return { ...state, ...snapshot };
  }
  if (type === "CHANGE_GENRE_VALUE") {
    let snapshot = { ...takeSnapshot(state) };
    let { index, value } = payload;
    snapshot.data[index].value = value;
    //console.log('snapshot ', snapshot);
    return { ...state, ...snapshot };    
  }
  return { ...state };
}

export default Genres;
