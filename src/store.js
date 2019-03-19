import Vue from 'vue'
import Vuex from 'vuex'

/* 
--------------THEMES SECTION  ----------------------
*/
import {
  THEME
} from './themes/constans';
import dark from './themes/dark';
import light from './themes/light';

const theme = {
  dark,
  light
}

const defaultTheme = THEME.light;
/* 
-----------------------------------------------------
*/

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    /* 
    --------------THEMES SECTION  ----------------------
    */

    themeName: theme[defaultTheme].themeName,

    //new palette
    //charts colors
    ch_color__primary: theme[defaultTheme].ch_color__primary,
    ch_color__secondary: theme[defaultTheme].ch_color__secondary,
    ch_color__third: theme[defaultTheme].ch_color__third,
    ch_color__fourth: theme[defaultTheme].ch_color__fourth,
    ch_color__fifth: theme[defaultTheme].ch_color__fifth,
    //grays
    g_color__primary: theme[defaultTheme].g_color__primary,
    g_color__secondary: theme[defaultTheme].g_color__secondary,
    g_color__third: theme[defaultTheme].g_color__third,
    //font-color
    f_color__primary: theme[defaultTheme].f_color__primary,
    f_color__secondary: theme[defaultTheme].f_color__secondary,
    //main gold
    m_color__primary: theme[defaultTheme].m_color__primary,
    /* 
    -----------------------------------------------------
    */
  },
  mutations: {
    switchTheme(state, themeName) {
      // theme name
      state.themeName = theme[themeName].themeName;

      //new palette
      //colors
      state.ch_color__primary = theme[themeName].ch_color__primary,
        state.ch_color__secondary = theme[themeName].ch_color__secondary,
        state.ch_color__third = theme[themeName].ch_color__third,
        state.ch_color__fourth = theme[themeName].ch_color__fourth,
        state.ch_color__fifth = theme[themeName].ch_color__fifth,
        //grays
        state.g_color__primary = theme[themeName].g_color__primary,
        state.g_color__secondary = theme[themeName].g_color__secondary,
        state.g_color__third = theme[themeName].g_color__third,
        //font-color
        state.f_color__primary = theme[themeName].f_color__primary,
        state.f_color__secondary = theme[themeName].f_color__secondary,
        //main gold
        state.m_color__primary = theme[themeName].m_color__primary
    }
  },
  actions: {

  }
})