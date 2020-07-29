export default baseDomain => datasetId => queryParams => {
  const url = `https://${baseDomain}.opendatasoft.com/api/v2/catalog/datasets/${datasetId}/records?`
  return Object.keys(queryParams).reduce(addQueryParamToUrl(queryParams), url)
}

const addQueryParamToUrl = params => (url, key) => `${url}${key}=${params[key]}&`
