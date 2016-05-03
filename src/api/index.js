import axios from 'axios'
import filesJSON from '../data/files'

export function fetchAllFiles () {
  return new Promise((resolve, reject) => {
    resolve(filesJSON())
  })
}

export function getFile (file) {
  if (file === undefined) file = 'untitled'
  return axios({
    url: `https://api.github.com/repos/isaiahgrey93/isaiahgrey93.github.io/contents/src/api/files/${file}`,
    method: 'get',
    params: {
      ref: 'development',
    },
    transformResponse: function (data) {
      return atob(JSON.parse(data).content)
    },
  })
}