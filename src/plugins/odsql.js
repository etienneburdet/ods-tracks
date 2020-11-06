
export const getRecordsUrl = (baseDomain = 'data') => (datasetId = 'datasetid') => {
  const urlString = `https://${baseDomain}.opendatasoft.com/api/v2/catalog/datasets/${datasetId}/records?`
  const url = new URL(urlString)
  return url
}

const addQueryParamToUrl = url => clause => value => {
  const queryParams = new URLSearchParams(url)
  queryParams.append(clause, value)
  const appendedUrl = new URL(url)
  appendedUrl.search = queryParams
  return appendedUrl
}

// All these functions return a function, that accepts a value as parameter
export const addWhereQuery = url => addQueryParamToUrl(url)('where')
export const addSelectQuery = url => addQueryParamToUrl(url)('select')
export const addRefineQuery = url => addQueryParamToUrl(url)('refine')
export const addExcludeQuery = url => addQueryParamToUrl(url)('exclude')
export const addStartQuery = url => addQueryParamToUrl(url)('start')
export const addRowsQuery = url => addQueryParamToUrl(url)('rows')
export const addIncludeAppMetasQuery = url => addQueryParamToUrl(url)('include_app_metas')
export const addTimezoneQuery = url => addQueryParamToUrl(url)('timezone')

// More general tool to pass an array of { clause: value } params
export const addQueryParamsList = url => queryParams => {
  const urlWithParams = Object.keys(queryParams).reduce(addQueryParamToUrl(url))
  return encodeURI(urlWithParams)
}
