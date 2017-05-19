import axios from 'axios'

export default {
  getBaseUrl: function (resource) {
    // const baseUrl = 'http://52.66.153.149:5000/api/' + resource
    const baseUrl = 'http://localhost:5000/api/' + resource

    return baseUrl
  },

  post: function (resource, formData) {
    const url = this.getBaseUrl(resource)

    return new Promise((resolve, reject) => {
      axios.post(url, formData, this.httpOptions())
      .then(response => { resolve(response) })
      .catch(error => { reject(error) })
    })
  },

  get: function (resource) {
    const url = this.getBaseUrl(resource)

    return new Promise((resolve, reject) => {
      axios.get(url, this.httpOptions())
      .then(response => { resolve(response) })
      .catch(error => { reject(error) })
    })
  },

  getOne: function (resource, id) {
    const resourceWithId = resource + '/' + id

    return new Promise((resolve, reject) => {
      this.get(resourceWithId)
      .then(response => { resolve(response) })
      .catch(error => { reject(error) })
    })
  },

  delete: function (resource) {
    const url = this.getBaseUrl(resource)

    return new Promise((resolve, reject) => {
      axios.delete(url, this.httpOptions())
      .then(response => { resolve(response) })
      .catch(error => { reject(error) })
    })
  },

  put: function (resource, formData) {
    const url = this.getBaseUrl(resource)

    return new Promise((resolve, reject) => {
      axios.put(url, formData, this.httpOptions())
      .then(response => { resolve(response) })
      .catch(error => { reject(error) })
    })
  },

  httpOptions: function () {
    const accessToken = localStorage.getItem('accessToken')

    return {
      headers: {
        'Authorization': 'Bearer ' + accessToken,
        'Content-Type': 'application/json'
      }
    }
  }
}
