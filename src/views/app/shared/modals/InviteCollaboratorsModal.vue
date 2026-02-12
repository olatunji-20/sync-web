<template>
  <Teleport to="body">
    <div
      v-show="visible"
      class="fixed inset-0 z-40 flex items-center justify-center p-4 bg-stone-900/50"
      @click.self="$emit('close')"
    >
      <div
        class="w-full max-w-lg bg-white rounded-2xl shadow-xl overflow-hidden max-h-[90vh] overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="invite-modal-title"
      >
        <!-- Header -->
        <div class="flex items-start justify-between gap-4 px-6 pt-6 pb-4">
          <div>
            <h2
              id="invite-modal-title"
              class="text-lg font-medium text-stone-900"
            >
              Invite collaborators
            </h2>
            <p class="text-sm text-stone-500 mt-0.5">
              Share access with teammates or collaborators
            </p>
          </div>
          <button
            type="button"
            class="p-2 rounded-lg hover:bg-stone-100 text-stone-500 transition-colors"
            aria-label="Close"
            @click="$emit('close')"
          >
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <!-- Sharable link -->
        <div class="px-6 py-4 border-t border-stone-100">
          <div
            class="flex items-center justify-between gap-4 p-4 rounded-xl bg-[#F0EDFE] border border-stone-200"
          >
            <div class="flex items-center gap-3 min-w-0">
              <div
                class="w-8 h-8 rounded-full bg-[#6B4CF5] flex items-center justify-center shrink-0"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.375 11.0625H7.5C7.1925 11.0625 6.9375 10.8075 6.9375 10.5C6.9375 10.1925 7.1925 9.9375 7.5 9.9375H9.375C11.34 9.9375 12.9375 8.34 12.9375 6.375C12.9375 4.41 11.34 2.8125 9.375 2.8125H5.625C3.66 2.8125 2.0625 4.41 2.0625 6.375C2.0625 7.2 2.355 8.0025 2.88 8.64C3.075 8.88 3.045 9.2325 2.805 9.435C2.565 9.63 2.2125 9.6 2.01 9.36C1.32 8.52 0.9375 7.4625 0.9375 6.375C0.9375 3.7875 3.0375 1.6875 5.625 1.6875H9.375C11.9625 1.6875 14.0625 3.7875 14.0625 6.375C14.0625 8.9625 11.9625 11.0625 9.375 11.0625Z"
                    fill="white"
                  />
                  <path
                    d="M12.375 16.3125H8.625C6.0375 16.3125 3.9375 14.2125 3.9375 11.625C3.9375 9.0375 6.0375 6.9375 8.625 6.9375H10.5C10.8075 6.9375 11.0625 7.1925 11.0625 7.5C11.0625 7.8075 10.8075 8.0625 10.5 8.0625H8.625C6.66 8.0625 5.0625 9.66 5.0625 11.625C5.0625 13.59 6.66 15.1875 8.625 15.1875H12.375C14.34 15.1875 15.9375 13.59 15.9375 11.625C15.9375 10.8 15.645 9.9975 15.12 9.36C14.925 9.12 14.955 8.7675 15.195 8.565C15.435 8.3625 15.7875 8.4 15.99 8.64C16.6875 9.48 17.07 10.5375 17.07 11.625C17.0625 14.2125 14.9625 16.3125 12.375 16.3125Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div class="min-w-0">
                <p class="font-medium text-stone-900">Sharable link</p>
                <p class="text-sm text-stone-500">
                  Copy link to share publicly
                </p>
              </div>
            </div>
            <button
              type="button"
              class="shrink-0 px-4 py-1.5 rounded-full bg-[#292D321A] text-stone-700 border cursor-pointer border-[#292D321A]/50 hover:bg-[#292D321A]/90 text-sm transition-colors"
              @click="copyLink"
            >
              Copy link
            </button>
          </div>
        </div>

        <!-- Invite by email -->
        <div class="px-6 py-1">
          <div class="w-full flex justify-between items-center gap-1">
            <div
              class="flex flex-1 items-center gap-2 border rounded-full p-0.5"
            >
              <input
                v-model="emailInput"
                type="email"
                placeholder="Enter email..."
                class="flex-1 min-w-40 px-4 py-1.5 rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-400"
                @keydown.enter.prevent="inviteUser"
              />
              <button
                type="button"
                class="flex items-center gap-2 px-4 py-1.5 rounded-full border border-stone-200 bg-white hover:bg-stone-50 text-stone-700 text-sm"
                @click="roleOpen = !roleOpen"
              >
                {{ selectedRole }}
                <svg
                  class="w-4 h-4 text-stone-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>
            <div class="relative" ref="roleDropdownRef">
              <div
                v-show="roleOpen"
                class="absolute top-full left-0 mt-1 w-36 py-1 bg-white rounded-xl border border-stone-200 shadow-lg z-10"
              >
                <button
                  v-for="role in roleOptions"
                  :key="role"
                  type="button"
                  class="w-full px-4 py-1.5 text-left text-sm hover:bg-stone-50 flex items-center gap-2"
                  @click="
                    selectedRole = role;
                    roleOpen = false;
                  "
                >
                  <span v-if="selectedRole === role">✓</span> {{ role }}
                </button>
              </div>
            </div>
            <button
              type="button"
              class="px-4 py-2 rounded-full bg-stone-200 text-stone-700 text-sm hover:bg-stone-300 transition-colors"
              @click="inviteUser"
            >
              Invite user
            </button>
          </div>
        </div>

        <!-- Collaborators list -->
        <div class="px-6 py-3">
          <ul class="space-y-2">
            <li
              v-for="(collab, i) in collaborators"
              :key="i"
              class="flex items-center justify-between gap-3 py-3 px-4 rounded-xl border-b border-stone-100 hover:bg-stone-50"
            >
              <div class="flex items-center gap-3 min-w-0">
                <div
                  class="w-10 h-10 rounded-full bg-stone-200 shrink-0 flex items-center justify-center text-stone-600 font-medium"
                >
                  {{ collab.name.charAt(0) }}
                </div>
                <div class="min-w-0">
                  <p class="font-medium text-stone-900 truncate">
                    {{ collab.name }}
                  </p>
                  <p class="text-sm text-stone-500 truncate">
                    {{ collab.email }}
                  </p>
                </div>
                <span
                  v-if="collab.badge"
                  class="shrink-0 px-2 py-0.5 rounded text-xs bg-emerald-50 text-emerald-600"
                >
                  {{ collab.badge }}
                </span>
              </div>
              <div class="relative shrink-0" :data-collab-index="i">
                <button
                  type="button"
                  class="flex items-center gap-2 px-3 py-2 rounded-lg border border-stone-200 bg-white hover:bg-stone-50 text-stone-700 text-sm"
                  @click="toggleCollabRole(i)"
                >
                  {{ collab.role }}
                  <svg
                    class="w-4 h-4 text-stone-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  v-show="openCollabDropdown === i"
                  class="absolute top-full right-0 mt-1 w-40 py-1 bg-white rounded-xl border border-stone-200 shadow-lg z-10"
                >
                  <button
                    v-for="role in roleOptions"
                    :key="role"
                    type="button"
                    class="w-full px-4 py-2 text-left text-sm hover:bg-stone-50 flex items-center gap-2"
                    @click="setCollabRole(i, role)"
                  >
                    <span v-if="collab.role === role">✓</span> {{ role }}
                  </button>
                  <button
                    type="button"
                    class="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50"
                    @click="removeCollab(i)"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <!-- Add extra security -->
        <div class="p-4 border-t border-stone-100 bg-stone-50">
          <div class="flex items-center justify-between">
            <div>
              <p class="font-medium text-stone-900 text-md">
                Add extra security to your link
              </p>
              <p class="text-xs text-stone-500">
                Set a password to control who can join via your link
              </p>
            </div>
            <button
              type="button"
              class="shrink-0 px-4 py-2 rounded-full bg-black text-white text-sm hover:bg-[#4C1D95] transition-colors"
              @click="$emit('add-password')"
            >
              Add password
            </button>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { onMounted, onUnmounted, ref, watch } from "vue";

const props = defineProps({
  visible: Boolean,
  collaborators: {
    type: Array,
    default: () => [],
  },
});

const emit = defineEmits([
  "close",
  "add-password",
  "copy-link",
  "invite",
  "update-role",
  "remove",
]);

const emailInput = ref("");
const selectedRole = ref("Can edit");
const roleOpen = ref(false);
const roleDropdownRef = ref(null);
const openCollabDropdown = ref(null);
const roleOptions = ["Owner", "Can edit", "Can view"];

const defaultCollaborators = [
  {
    name: "Johnson Joshua",
    email: "JJ@gmail.com",
    badge: "Admin",
    role: "Owner",
  },
  {
    name: "Teller Kamil",
    email: "JJ@gmail.com",
    badge: "Admin",
    role: "Owner",
  },
  { name: "Dee Smoke", email: "JJ@gmail.com", badge: "", role: "Owner" },
];

const collaborators = ref([...defaultCollaborators]);

watch(
  () => props.visible,
  (v) => {
    if (v && props.collaborators?.length)
      collaborators.value = [...props.collaborators];
    else if (v) collaborators.value = [...defaultCollaborators];
  },
  { immediate: true },
);

watch(
  () => props.collaborators,
  (list) => {
    if (list?.length) collaborators.value = [...list];
  },
  { deep: true },
);

function copyLink() {
  emit("copy-link");
  roleOpen.value = false;
  openCollabDropdown.value = null;
}

function inviteUser() {
  const email = emailInput.value?.trim();
  if (email) {
    emit("invite", { email, role: selectedRole.value });
    collaborators.value = [
      ...collaborators.value,
      { name: email.split("@")[0], email, badge: "", role: selectedRole.value },
    ];
    emailInput.value = "";
  }
  roleOpen.value = false;
}

function toggleCollabRole(i) {
  openCollabDropdown.value = openCollabDropdown.value === i ? null : i;
  roleOpen.value = false;
}

function setCollabRole(i, role) {
  collaborators.value[i].role = role;
  emit("update-role", { index: i, role });
  openCollabDropdown.value = null;
}

function removeCollab(i) {
  collaborators.value.splice(i, 1);
  emit("remove", i);
  openCollabDropdown.value = null;
}

function handleClickOutside(e) {
  if (!roleDropdownRef.value?.contains(e.target)) roleOpen.value = false;
  if (
    openCollabDropdown.value !== null &&
    !e.target.closest(`[data-collab-index="${openCollabDropdown.value}"]`)
  ) {
    openCollabDropdown.value = null;
  }
}

onMounted(() => document.addEventListener("click", handleClickOutside));
onUnmounted(() => document.removeEventListener("click", handleClickOutside));
</script>
