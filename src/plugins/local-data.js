/* global fetch, localStorage */
import { openDB } from 'idb'

export default async (dataset, odsUrl) => {
  if (!('indexedDB' in window)) { return null }
  const db = await createIndexedDB(dataset)
  try {
    const networkData = await getServerData(odsUrl)
    await db.clear(dataset)
    const tx = db.transaction(dataset, 'readwrite')
    networkData.records.forEach(record => tx.store.add(record))
    await tx.done
    setLastUpdated(new Date())
    return { data: networkData.records, status: 'online' }
  } catch (err) {
    console.log('Network request failed. Offline mode !')
    console.error(err)
    const offlineData = await getLocalData(db, dataset)
    return { data: offlineData, status: 'offline' }
  }
}

const getServerData = async (odsUrl) => {
  const networkRes = await fetch(odsUrl)
  const networkData = await networkRes.json()
  return networkData
}

const getLocalData = async (db, dataset) => {
  if (!('indexedDB' in window)) { return null }
  return db.getAll(dataset)
}

const setLastUpdated = (date) => localStorage.setItem('lastUpdated', date)

const createIndexedDB = async (dataset) => {
  const db = await openDB('ods-contexts', 1, {
    upgrade (db) {
      db.createObjectStore(dataset, {
        keyPath: 'id',
        autoIncrement: true
      })
    }
  })
  return db
}
