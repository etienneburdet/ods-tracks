export default (baseDomain = 'data') => (datasetId = 'datasetid') => (queryParams = {}) => {
  const url = `https://${baseDomain}.opendatasoft.com/api/v2/catalog/datasets/${datasetId}/records?`
  const urlWithParams = Object.keys(queryParams).reduce(addQueryParamToUrl(queryParams), url)
  return encodeURI(urlWithParams)
}

const addQueryParamToUrl = params => (url, key) => `${url}${key}=${params[key]}&`
