import Swagger from "swagger-client"

module.exports = function({ configs }) {
  return {
    fn: {
      fetch: function(obj) {
        // replace 'undefined' segments in url
        obj.url = obj.url.replace(/\/undefined/g, '');
        return Swagger.makeHttp(configs.preFetch, configs.postFetch)(obj);
      },
      buildRequest: Swagger.buildRequest,
      execute: Swagger.execute,
      resolve: Swagger.resolve,
      serializeRes: Swagger.serializeRes,
      opId: Swagger.helpers.opId      
    }
  }
}
