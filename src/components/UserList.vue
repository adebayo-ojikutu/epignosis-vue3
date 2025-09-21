<template>
  <v-row
    :class="[
      isActive ? 'active-user-list' : 'user-list',
      !isActive ? 'hover-user-list' : '',
    ]"
  >
    <v-col class="flex-grow-0">
      <img
        :src="user?.photo"
        width="60"
        class="profile-img"
       
        decoding="async"
        :alt="user?.name"
        :srcset="`${user?.photo} 128w, ${user?.photo} 60w`"
        fetchpriority="high"
      />
    </v-col>
    <v-col v-if="width >= 768" class="align-self-center">
      <v-row>
        <v-col class="pb-0"
          ><span :class="isActive ? 'active-user-title' : 'user-title'">{{
            user?.name
          }}</span></v-col
        ></v-row
      >
      <v-row>
        <v-col class="pt-0"
          ><span :class="isActive ? 'active-user-email' : 'user-email'">{{
            user?.email
          }}</span></v-col
        ></v-row
      >
    </v-col>
  </v-row>
</template>
<script>
import { useDisplay } from "vuetify";

export default {
  name: "UserList",
  props: {
    user: {
      type: Object,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const { width } = useDisplay();
    return {
      width,
    };
  },
};
</script>
<style scoped>
.user-title {
  font-weight: bold;
  font-size: 18px;
}
.user-email {
  font-size: 14px;
  color: gray;
}
.profile-img {
  border-radius: 50%;
}
.active-user-list {
  background-color: #1b68b3;
  cursor: pointer;
}
.user-list {
  cursor: pointer;
  transition: background-color 0.3s;
}
.active-user-title {
  font-weight: bold;
  font-size: 16px;
  color: white;
}
.active-user-email {
  font-size: 14px;
  color: lightgray;
}
.hover-user-list:hover {
  background-color: #e8e8e8;
}
</style>
