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
      Users: [
        {
          id: "5c093af1c6ee9117a581c7d6",
          photo: "https://randomuser.me/api/portraits/men/40.jpg",
          name: "Bates Washington",
          company: "ZOLAREX",
          email: "bates.washington@zolarex.io",
          phone: "+1 (915) 447-2207",
          address: "958 Brevoort Place, Ona, Maine, 2433",
        },
        {
          id: "5c093af1aeca1bb00607fb2a",
          photo: "https://randomuser.me/api/portraits/men/1.jpg",
          name: "Mollie Oneill",
          company: "VIAGRAND",
          email: "mollie.oneill@viagrand.biz",
          phone: "+1 (852) 535-3880",
          address: "120 Cedar Street, Mansfield, Kentucky, 8890",
        },
        {
          id: "5c093af11dc4289c2941bd83",
          photo: "https://randomuser.me/api/portraits/men/2.jpg",
          name: "Lana Sharpe",
          company: "SPEEDBOLT",
          email: "",
          phone: "+1 (876) 475-3370",
          address: "673 Revere Place, Canoochee, New Mexico, 4980",
        },
        {
          id: "5c093af172c42a579bdb685f",
          photo: "https://randomuser.me/api/portraits/men/3.jpg",
          name: "Massey Ewing",
          company: "STOCKPOST",
          email: "massey.ewing@stockpost.ca",
          phone: "+1 (948) 482-2392",
          address: "716 Hazel Court, Hanover, Louisiana, 9603",
        },
        {
          id: "5c093af1264dbf1a467091cf",
          photo: "https://randomuser.me/api/portraits/men/4.jpg",
          name: "Patrica Melton",
          company: "DIGIAL",
          email: "patrica.melton@digial.name",
          phone: "",
          address: "371 Cortelyou Road, Farmers, Iowa, 1733",
        },
        {
          id: "5c093af1e39cab35f1c9726e",
          photo: "https://randomuser.me/api/portraits/men/5.jpg",
          name: "Viola Serrano",
          company: "ENTALITY",
          email: "",
          phone: "+1 (909) 489-2270",
          address: "787 Bleecker Street, Nipinnawasee, New York, 6872",
        },
        {
          id: "5c093af1dd7402c939bd490c",
          photo: "https://randomuser.me/api/portraits/men/6.jpg",
          name: "Tammy Dixon",
          company: "XTH",
          email: "tammy.dixon@xth.net",
          phone: "+1 (810) 472-2762",
          address: "293 Linwood Street, Roulette, Nevada, 7805",
        },
        {
          id: "5c093af15b557da4238bcb0c",
          photo: "https://randomuser.me/api/portraits/men/7.jpg",
          name: "Christensen Brown",
          company: "SKYPLEX",
          email: "christensen.brown@skyplex.us",
          phone: "+1 (892) 462-2141",
          address: "600 Calder Place, Bourg, Hawaii, 9397",
        },
        {
          id: "5c091af1e39cab35f9c9726n",
          photo: "https://randomuser.me/api/portraits/men/8.jpg",
          name: "Wilmer Berends",
          company: "Dabvine",
          email: "wberends0@unblog.fr",
          phone: "111-757-1393",
          address: "401 Spaight Way",
        },
        {
          id: "5c693af1dd7402c939bd4806",
          photo: "https://randomuser.me/api/portraits/men/9.jpg",
          name: "Yolane Culver",
          company: "Fivespan",
          email: "yculver1@netvibes.com",
          phone: "471-485-5905",
          address: "1 Colorado Junction",
        },
        {
          id: "50093af15b557da4248bcb02",
          photo: "https://randomuser.me/api/portraits/men/10.jpg",
          name: "Clarance Marthen",
          company: "Shuffledrive",
          email: "cmarthen2@alibaba.com",
          phone: "638-994-3228",
          address: "6977 Sugar Trail",
        },
      ],
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
