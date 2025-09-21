<template>
  <v-row v-if="user && Object.keys(user).length">
    <v-col class="px-5">
      <v-row>
        <v-col align="end" class="edit-btn-col">
          <v-btn v-if="!allowEdit" color="primary" @click="allowEdit = true"
            >Edit</v-btn
          ></v-col
        >
      </v-row>
      <v-row>
        <v-col cols="12" class="pb-0">
          <span class="input-label">{{ $t("form.name") }}</span>
          <v-text-field
            v-model="name"
            color="primary"
            variant="outlined"
            :readonly="!allowEdit"
            :error-messages="nameErrors"
            single-line
            density="compact"
            tile
          ></v-text-field>
        </v-col>
        <v-col cols="12" class="pb-0">
          <span class="input-label">{{ $t("form.email") }}</span>

          <v-text-field
            v-model="email"
            color="primary"
            variant="outlined"
            :readonly="!allowEdit"
            :error-messages="emailErrors"
            single-line
            density="compact"
            tile
          ></v-text-field
        ></v-col>
        <v-col cols="12" class="pb-0">
          <span class="input-label">{{ $t("form.phone") }}</span>
          <v-text-field
            v-model="phone"
            color="primary"
            variant="outlined"
            :readonly="!allowEdit"
            :error-messages="phoneErrors"
            single-line
            density="compact"
            tile
          ></v-text-field
        ></v-col>
        <v-col cols="12" class="pb-0">
          <span class="input-label">{{ $t("form.address") }}</span>
          <v-text-field
            v-model="address"
            color="primary"
            variant="outlined"
            :readonly="!allowEdit"
            single-line
            density="compact"
            tile
          ></v-text-field
        ></v-col>
        <v-col cols="12" class="pb-0">
          <span class="input-label">{{ $t("form.company") }}</span>
          <v-text-field
            v-model="company"
            color="primary"
            variant="outlined"
            :readonly="!allowEdit"
            single-line
            density="compact"
            tile
          ></v-text-field
        ></v-col>
      </v-row>
      <v-row justify="end">
        <v-col v-if="allowEdit" class="flex-grow-0"
          ><v-btn
            color="secondary"
            class="cancel-btn"
            elevation="0"
            @click="onCancel"
            >{{ $t("form.cancel") }}</v-btn
          ></v-col
        >
        <v-col class="flex-grow-0"
          ><v-btn
            color="primary"
            @click="onSave"
            :loading="isLoading"
            :disabled="isLoading || !allowEdit"
            :class="{ 'save-btn-disabled': isLoading || !allowEdit }"
          >
            {{ $t("form.save") }}</v-btn
          >
        </v-col>
      </v-row>
    </v-col>
  </v-row>
  <div v-else class="no-user-selected px-3">
    <p>Select a user to edit.</p>
  </div>
</template>
<script>
import { useVuelidate } from "@vuelidate/core";
import { userValidations } from "@/static/userStatic";
import { userUpdate } from "@/Apis/users/users";
export default {
  name: "UserForm",
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const v$ = useVuelidate();
    return { v$ };
  },
  data() {
    return {
      name: this.user?.name || "",
      address: this.user?.address || "",
      phone: this.user?.phone || "",
      company: this.user?.company || "",
      email: this.user?.email || "",
      allowEdit: false,
      isLoading: false,
    };
  },
  watch: {
    user: {
      immediate: true,
      handler(newUser) {
        this.allowEdit = false;
        this.name = newUser?.name || "";
        this.address = newUser?.address || "";
        this.phone = newUser?.phone || "";
        this.company = newUser?.company || "";
        this.email = newUser?.email || "";
        if (this.v$.$invalid) {
          this.v$.$reset();
        }
      },
    },
  },
  validations() {
    return userValidations;
  },
  computed: {
    nameErrors() {
      const errors = [];
      if (this.v$.name.$error) {
        errors.push("Name is required.");
      }
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (this.v$.email.$error) {
        errors.push("Email is required.");
      }
      return errors;
    },
    phoneErrors() {
      const errors = [];
      if (this.v$.phone.$error) {
        errors.push("Address is required.");
      }
      return errors;
    },
  },
  methods: {
    async onSave() {
      this.v$.$touch();
      if (this.v$.$invalid) {
        return;
      }
      this.isLoading = true;

      try {
        const payload = {
          name: this.name,
          address: this.address,
          phone: this.phone,
          company: this.company,
          email: this.email,
        };
        const resp = await userUpdate(this.user.id, payload);
        this.name = resp.data.name || "";
        this.address = resp.data.address || "";
        this.phone = resp.data.phone || "";
        this.company = resp.data.company || "";
        this.email = resp.data.email || "";

        this.allowEdit = false;
      } catch (error) {
        console.error("Error saving user details:", error);
      } finally {
        this.isLoading = false;
      }
    },
    onCancel() {
      this.allowEdit = false;
      if (this.v$.$invalid) {
        this.v$.$reset();
      }
      // Reset the fields to the original user details
      this.name = this.user?.name || "";
      this.address = this.user?.address || "";
      this.phone = this.user?.phone || "";
      this.company = this.user?.company || "";
      this.email = this.user?.email || "";
    },
  },
};
</script>
<style scoped>
.no-user-selected {
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
}
.edit-btn-col {
  min-height: 60px;
}
.input-label {
  font-size: 14px;
  color: gray;
  margin-bottom: 6px;
}
</style>
