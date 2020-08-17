import { Cloudinary } from 'cloudinary-core'

const cl = new Cloudinary({cloud_name: "dmd8hdd6e", secure: true});

const getImageTag = transformParams => imgId => cl.imageTag(imgId, transformParams).toHtml()
const getImageUrl = transformParams => imgId => cl.url(imgId, transformParams)

const fullWidth = document.documentElement.clientWidth
const fullWidthParams = {
  width: fullWidth,
  height: Math.round(fullWidth * 2 / 3),
  crop: 'fill'
}
const thumbnailParams = {
  height: 132,
  width: 132,
  crop: 'fill'
}

const getThumbnailTag = getImageTag(thumbnailParams)
const getFullWidthTag = getImageTag(fullWidthParams)
const getFullWidthUrl = getImageUrl(fullWidthParams)

export { getThumbnailTag, getFullWidthTag, getFullWidthUrl }
