export function uuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}

export const isBrowser = () => typeof window !== 'undefined'

export function getParameterByName(name: string, url?: string) {
  if (!url) url = window.location.href
  name = name.replace(/[\[\]]/g, '\\$&')
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url)
  if (!results) return null
  if (!results[2]) return ''
  return decodeURIComponent(results[2].replace(/\+/g, ' '))
}

export class LocalStorage extends Storage{
  localStorage!: Storage
  constructor(localStorage: Storage){
    super();
    this.localStorage = localStorage;
  }
  async getItemAsync(key: string) {
    return await this.localStorage.getItem(key);
  }
  async removeItemAsync(key: string) {
    return await this.localStorage.removeItem(key);
  }
}
