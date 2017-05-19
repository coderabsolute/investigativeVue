<template>
  <div>
    <top-panel />

    <div class="columns">
      <aside class="column is-2 aside hero is-fullheight is-hidden-mobile">
        <div>
        <!--
          <div class="uploader has-text-centered">
          </div>
        -->

          <side-panel />
        </div>
      </aside>

      <div class="content column is-10">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import TopPanel from '@/components/TopPanel'
import SidePanel from '@/components/SidePanel'

export default {
  name: 'Dashboard',
  components: {
    TopPanel, SidePanel
  }
}
</script>

<style>
  body {
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
    height: 100%;
  }
  .button.is-success {
    background-color: #2EB398;
  }

  .aside {
    background-color: #232B2D;      /* Background color for the Left Pane */
  }
  .aside .uploader {
    background-color: #2EB398;
    height: 95px;
    margin:0 -10px;
    padding: 25px 30px;
  }
  .aside .uploader .button {
    background-color: transparent;
    border: 3px dashed #F6F7F7;
    padding: 20px 70px;
    color: #F6F7F7;
  }
  .aside .main {
    padding: 40px;
    color: #6F7B7E;
  }
  .aside .title {
    color: #6F7B7E;
    font-size: 12px;
    font-weight: bold;
    text-transform: uppercase;        /* Foreground color for the Menu Titles */
  }
  .aside .main .item {
    display: block;
    padding: 10px 0px;
    color: #AFB1B1;                   /* Foreground color for the Menu Items */
  }
  .aside .main .item.active {
    color: #C6CBCC;
  }
  .aside .main .icon {
    font-size: 19px;
    padding-right: 30px;
  }
  .aside .main .name {
    font-size: 16px;
    font-weight: bold;
  }
  .content {
    display: block;
    background-color: #fff;
    padding: 40px 20px;
  }
  .nav.menu {
    background-color: #fff;
    border-bottom: 1px solid #e1e1e1;
    z-index: 1;
  }
  .nav.menu .nav-item .icon-btn {
    border: 3px solid #B7C6C9;
    border-radius: 90px;
    padding: 5px 7px;
    color: #B7C6C9;
  }
  .nav.menu .nav-item .icon-btn.thin {
    padding: 5px 8px;
  }
  .nav.menu .nav-item.is-active .icon-btn {
    color: #2EB398;
    border: 3px solid #2EB398;
  }
  .nav.menu .nav-item .icon-btn .fa {
    font-size: 20px;
    color: #B7C6C9;
  }
  .nav.menu .nav-item.is-active .icon-btn .fa {
    color: #2EB398;
  }
  .files {
    padding: 50px 0;
  }
  .file {
    display: block;
    padding: 20px;
  }
  a.file:not(.button) {
      border-bottom: none;
      border-radius: 4px;
  }
  .file:hover, .file.active, .file:active {
    background-color: #E4E9EB;
  }
  .file .image img {
    padding-bottom: 10px;
  }
  .file .name {
    font-weight: bold;
    word-wrap: break-word;
    word-break: break-all;
    font-size: 16px;
    color: #69707a;
  }
  .file .timestamp {
    font-weight: bold;
    font-size: 14px;
    color: #B9C2C4;
  }
</style>
