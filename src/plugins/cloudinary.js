import { Cloudinary } from 'cloudinary-core'

const cl = new Cloudinary({cloud_name: "dmd8hdd6e", secure: true});

const getImageTag = transformParams => imgId => cl.imageTag(imgId, transformParams).toHtml()

const getThumbnailTag = getImageTag({
  height: 108,
  width: 108,
  crop: 'fill'
})

const fullWidth = window.innerWidth

const getFullWidthTag = getImageTag({
  width: fullWidth,
  height: Math.round(fullWidth / 3),
  crop: 'fill'
})

export { getThumbnailTag, getFullWidthTag }
