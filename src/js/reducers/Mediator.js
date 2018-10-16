const takeSnapshot = (state) => {
  return { ...state }
}

/**
 * @function Mediator
 * @param  {type} state   {description}
 * @param  {type} options {description}
 * @return {type} {description}
 */
const Mediator = (state, action = {}) => {
  let { payload, type } = action;
  if (type === 'SET') {
    let snapshot = { ...takeSnapshot(state), ...payload };
    //console.log('snapshot ', snapshot);
    return { ...state, ...snapshot };
  }

  if (type === "TOOGLE_DRAWER_STATE") {
    let snapshot = { ...takeSnapshot(state) };
    snapshot.setup.drawerState.open = !snapshot.setup.drawerState.open;
    //console.log('snapshot ', snapshot);
    return { ...state, ...snapshot };
  }
  if(type === 'SET_LOADING') {
    let snapshot = { ...takeSnapshot(state) };
    snapshot.setup.loading = payload;
    //console.log('snapshot ', snapshot);
    return { ...state, ...snapshot };
  }
  return { ...state };
}


export default Mediator;
