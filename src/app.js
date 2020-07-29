import getOdsUrl from './plugins/odsql.js'

const getDatasetUrl = getOdsUrl('examples')('world-heritage-unesco-list')

const agregateUrl = getDatasetUrl({
  select: 'count(*) as count',
  where: 'category like "cultural"',
  group_by: 'country'
})

fetch(agregateUrl).then(res => res.json())
  .then(data => console.log(data))
