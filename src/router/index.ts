import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

import HomeMusic from '../views/Music.vue'
import LiveVideo from '../views/LiveVideo.vue'
import Player from '../views/Player.vue'
import ListenBook from '../views/ListenBook.vue'
import MusicSelect from '../views/music/Select.vue'
import MusicSongs from '../views/music/Songs.vue'
import MusicRate from '../views/music/Rate.vue'
import SongDetail from '../views/SongsDetail.vue'
import HomeRecommend from '../views/Home/Recommend.vue'
import HomeExplore from '../views/Home/Explore.vue'
import HomeFind from '../views/Home/Find.vue'
import HomeDynamic from '../views/Home/Dynamic.vue'
import HomeMy from '../views/Home/My.vue'
import MusicDetail from '../views/MusicDetail.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [
        {
          name: 'homeRecommend',
          path: 'recommend',
          component: HomeRecommend
        },
        {
          name: 'homefind',
          path: 'find',
          // redirect:'home/find/music',
          component: HomeFind,
          children: [
            {
              path: 'music',
              name: 'music',
              component: HomeMusic,
              children: [
                {
                  path: 'select',
                  name: 'musicSelect',
                  component: MusicSelect
                },
                {
                  path: 'songs',
                  name: 'musicSongs',
                  component: MusicSongs
                },
                {
                  path: 'rate',
                  name: 'musicRate',
                  component: MusicRate
                },
                {
                  path:'/home/find/music',
                  redirect:'/home/find/music/select'
                }
              ]
            },
            {
              path: 'player',
              name: 'player',
              component: Player
            },
            {
              path: 'listenBook',
              name: 'listenBook',
              component: ListenBook
            },
            {
              path: 'liveVideo',
              name: 'liveVideo',
              component: LiveVideo
            },
            {
              path:'/home/find',
              redirect:'/home/find/music'
            }
          ]
        },
        {
          name: 'homeExplore',
          path: 'explore',
          component: HomeExplore
        },
        {
          name: 'homeDynamic',
          path: 'dynamic',
          component: HomeDynamic
        },
        {
          name: 'HomeMy',
          path: 'my',
          component: HomeMy
        },
        {
          path: '/home',
           redirect: '/home/find'
        }
      ]
    },
    {
      path: '/songDetail',
      name: 'songDetail',
      component: SongDetail
    
    },
    {
      path: '/musicDetail',
      name: 'musicDetail',
      component: MusicDetail
    },
    {
      path: '/',
      redirect: '/home'
      
    }
  ],
  
})

export default router
