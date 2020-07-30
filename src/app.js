import getOdsUrl from './plugins/odsql.js'

const getRecords = getOdsUrl('eburdet')('etienne-tracks')

fetch(getRecords())
  .then(res => res.json())
  .then(data => console.log(data))
