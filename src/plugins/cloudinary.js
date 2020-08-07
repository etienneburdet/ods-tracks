import { Cloudinary } from 'cloudinary-core'

const cl = new Cloudinary({cloud_name: "dmd8hdd6e", secure: true});

const getThumbnailTag = (imgId) => {
  const tranformParams = {
    width: 108,
    height: 108,
    crop: "fill"
  }

  return cl.imageTag(imgId, tranformParams).toHtml()
}

export { getThumbnailTag }
