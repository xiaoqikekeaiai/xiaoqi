import axios from 'axios'
import awaitToJs from 'await-to-js'
const baseURL = 'http://localhost:3000'
export default {
  async getBanner() {
    const [error, ret] = await awaitToJs(axios.get(baseURL + '/banner?type=2'))
    if (error) {
      console.log('获取轮播图失败')
      return {}
    }
    const { data } = ret
    return data
  },
  async getSongs(limit = 6, pages = 1, cat?: string) {
    const [error, ret] = await awaitToJs(
      axios.get(baseURL + '/top/playlist', {
        params: {
          limit,
          cat,
          offset: pages * limit
        }
      })
    )
    if (error) {
      console.log('获取歌曲列表失败')
      return {}
    }
    const { data } = ret
    return data
  },
  async getPlayList(id:number) {
    const [error, ret] = await awaitToJs(axios.get(baseURL + '/playlist/detail',{
      params:{
        id
      }
    }))
    if (error) {
      console.log('获取歌单详情失败')
      return {}
    }
    const { data } = ret
    return data
  },
  async getMusicInfo(ids:number) {
    const [error, ret] = await awaitToJs(axios.get(baseURL + '/song/detail',{
      params:{
        ids
      }
    }))
    if (error) {
      console.log('获取歌曲详情失败')
      return {}
    }
    const { data } = ret
    return data
  },
  async getMusicUrlInfo(id:number) {
    const [error, ret] = await awaitToJs(axios.get(baseURL + '/song/url/v1',{
      params:{
        id,
        level:'standard'
      }
    }))
    if (error) {
      console.log('获取歌曲 url 失败')
      return {}
    }
    const { data } = ret
    return data
  },
}
