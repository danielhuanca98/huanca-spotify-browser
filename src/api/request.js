import axios from 'axios'
import qs  from 'qs'

const client_id = process.env.REACT_APP_CLIENT_ID
const client_secret = process.env.REACT_APP_CLIENT_SECRET

export default function token () {


    return new Promise((resolve, reject) => {
        axios({
            url: 'https://accounts.spotify.com/api/token',
            method: 'post',
            data: qs.stringify({
              grant_type: 'client_credentials'
            }),
            headers: {
              'Accept':'application/json',
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            auth: {
              username: client_id,
              password: client_secret
            }
          }).then(res => resolve(res.data.access_token))
            .catch(err => reject(err))
    })
}

export function categories (token) {

    return new Promise((resolve, reject) => {
        axios({
            url: 'https://api.spotify.com/v1/browse/categories',
            method: 'get',
            params: {
                country: 'BR',
                locale: 'pt_BR',
                limit: 10
            },
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }).then(res => resolve(res))
            .catch(err => reject(err))
    })
}

export function playLists (id, token) {

  return new Promise((resolve, reject) => {
    axios({
      url: `https://api.spotify.com/v1/browse/categories/${id}/playlists`,
      method: 'get',
      params: {
          country: 'BR',
          limit: 10
      },
      headers: {
          'Authorization': 'Bearer ' + token
      }
    }).then(res => resolve(res))
      .catch(err => reject(err))
  })
}

export function tracklist (id, token) {

  return new Promise((resolve, reject) => {
    axios({
      url: `https://api.spotify.com/v1/playlists/${id}`,
      method: 'get',
      headers: {
          'Authorization': 'Bearer ' + token
      }
    }).then(res => resolve(res))
      .catch(err => reject(err))
  })
}

export function track (id, token) {

  return new Promise((resolve, reject) => {
    axios({
      url: `https://api.spotify.com/v1/tracks/${id}`,
      method: 'get',
      headers: {
          'Authorization': 'Bearer ' + token
      }
    }).then(res => resolve(res))
      .catch(err => reject(err))
  })
}


