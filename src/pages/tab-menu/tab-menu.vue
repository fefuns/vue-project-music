<template>
  <div class="tab-menu">
    <ul class="tab-menu-list">
      <router-link tag="li" class="tab-menu-item" to="/recommend">
        <span class="tab-menu-link">推荐</span>
      </router-link>
      <router-link tag="li" class="tab-menu-item" to="/singer">
        <span class="tab-menu-link">歌手</span>
      </router-link>
      <router-link tag="li" class="tab-menu-item" to="/rank">
        <span class="tab-menu-link">排行</span>
      </router-link>
      <router-link tag="li" class="tab-menu-item" to="/search">
        <span class="tab-menu-link">搜索</span>
      </router-link>
    </ul>
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
  .tab-menu {
    position: absolute;
    left: 0;
    right: 0;
    top: 44px;
    height: 44px;
    
    &-list {
      display: flex;
      height: 44px;
      line-height: 44px;
    }
    
    &-item {
      flex: 1;
      text-align: center;
      cursor: pointer;
      
      &.router-link-active {
        
        .tab-menu-link {
          color: #ffcd32;
          border-bottom: 2px solid #ffcd32;
        }
      }
    }
    
    &-link {
      padding-bottom: 5px;
      color: rgba(255, 255, 255, .5);
    }
  }
</style>
