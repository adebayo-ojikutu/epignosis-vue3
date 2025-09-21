<template>
  <v-container fluid>
    <v-row justify="center" class="mt-5">
      <v-col class="user-details-col">
        <v-card max-width="900px" class="pa-5">
          <v-row class="user-details-external">
            <v-col
              class="user-list-external"
              :class="width >= 768 ? '' : 'width-100'"
              v-if="!loading"
            >
              <UserList
                v-for="user in Users"
                :key="user?.id"
                :user="user"
                @click="updateActiveUser(user)"
                :isActive="user.id === activeUser.id"
              />
            </v-col>
            <v-col v-else>
              <v-skeleton-loader
                v-for="n in 6"
                :key="n"
                height="100"
                type="list-item-avatar"
              />
            </v-col>
            <v-col class="user-form-external">
              <UserForm :user="activeUser" />
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import UserForm from "@/components/UserForm.vue";
import UserList from "@/components/UserList.vue";
import { usersPageAll } from "@/Apis/users/users.js";
import { useDisplay } from "vuetify";
export default {
  name: "UserDetails",
  components: { UserForm, UserList },
  setup() {
    const { width } = useDisplay();
    return {
      width,
    };
  },
  data() {
    return {
      Users: [],
      activeUser: {},
      loading: false,
    };
  },
  created() {
    this.fetchUsers();
  },
  methods: {
    async fetchUsers() {
      this.loading = true;
      try {
        const resp = await usersPageAll();
        this.Users = resp.data;
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        this.loading = false;
      }
    },
    updateActiveUser(user) {
      this.activeUser = user;
    },
  },
};
</script>
<style scoped>
.user-details-external {
  height: 700px;
}
.user-list-external {
  border-right: 1px solid lightgray;
  height: 700px;
  overflow-y: auto;
}
.user-form-external {
}
.width-100 {
  max-width: 100px;
}
.user-details-col {
  max-width: 900px;
}
</style>
