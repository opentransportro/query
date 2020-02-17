const terms = require('../lib/leaf/terms');

module.exports = function( vs ){
  if( !vs.isset('sources')) {
    return null;
  }

  return terms('source', vs.var('sources'));
};
