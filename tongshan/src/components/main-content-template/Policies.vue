<template>
  <div>
    <div class="policies">
      <div class="policies-titlebar">
        <div>
          <Icon type="md-list-box" color="#2d8cf0" size="20" class="icon" />
          <span class="policies-title">政策法规</span>
        </div>
        <div>
          <a href="#">更多>></a>
        </div>
      </div>
      <div class="internal">
        <div class="inner" v-for="item in policies" :key="item.id">
          <div>
            <em></em>
          </div>
          <div class="policies-title-name">{{item.title}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      policies: [
        {
          title: '两站进行时系列报道二:淮安"两违"整治新突破,江湖保卫战正酣'
        },
        {
          title: "两站进行时系列报道二:江湖保卫战正酣"
        },
        {
          title: "两站进行时系列报道二:江湖保卫战正酣"
        },
        {
          title: "两站进行时系列报道二:江湖保卫战正酣"
        },
        {
          title: '两站进行时系列报道二:淮安"两违"整治新突破,江湖保卫战正酣'
        },
        {
          title: "两站进行时系列报道二:江湖保卫战正酣"
        },
        {
          title: "两站进行时系列报道二:江湖保卫战正酣"
        }
      ]
    };
  }
};
</script>

<style scoped>
.policies {
  margin-left: 10px;
}
.policies .policies-titlebar {
  display: flex;
  justify-content: space-between;
  padding: 10px;
}
.policies .policies-titlebar .policies-title {
  font-size: 18px;
  color: #333;
  font-weight: bold;
}
.policies .policies-titlebar .icon {
  display: inline-block;
  vertical-align: top;
  margin-right: 5px;
}
.policies .policies-titlebar a {
  color: #ccc;
}
.policies .internal {
  background: #fff;
  padding: 18px 10px;
}

.policies .internal .inner {
  display: flex;
  margin-bottom: 10px;
  padding: 15px 0;

}

.policies .internal .inner :hover {
  color: #2d8cf0;
  cursor: pointer;
}

.policies-title-name{
   overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.policies .internal .inner em {
  width: 5px;
  height: 5px;
  display: inline-block;
  background: #333;
  border-radius: 50%;
  margin: 0 10px;
}
</style>
