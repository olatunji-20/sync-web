<template>
    <LayoutWithSidebar :user="user" :counts="sidebarCounts" @create-folder="onCreateFolder" @upgrade="onUpgrade">
        <DashboardHeader v-model:sort="sortOption" v-model:view="viewMode" :title="headerTitle"
            :browser-filters="browserFilters" @search="onSearch" @share="onShare" @browser-select="onBrowserSelect" />

        <PinnedBookmarks :bookmarks="pinnedCards" @context-action="onPinnedContextAction" @edit="openEditModal"
            @delete="openDeleteModal" @move="openMoveModal" />

        <AllBookmarksList :bookmarks="allBookmarks" @add-bookmark="onAddBookmark" @item-menu="onBookmarkItemMenu"
            @edit="openEditModal" @delete="openDeleteModal" />

        <EditBookmarkModal :visible="showEditModal" :bookmark="editingBookmark" @close="closeEditModal"
            @save="onSaveBookmark" />

        <InviteCollaboratorsModal :visible="showInviteModal" @close="closeInviteModal"
            @add-password="openAddPasswordModal" />

        <DeleteBookmarkModal :visible="showDeleteModal" @cancel="closeDeleteModal" @confirm="onConfirmDelete" />

        <MoveBookmarksModal :visible="showMoveModal" :bookmark="bookmarkToMove" :collections="moveCollections"
            @close="closeMoveModal" @move="onMoveBookmark" />

        <AddPasswordModal :visible="showAddPasswordModal" @close="closeAddPasswordModal" @save="onSavePassword" />
    </LayoutWithSidebar>
</template>

<script setup>
import { ref } from 'vue'
import LayoutWithSidebar from '../components/LayoutWithSidebar.vue'
import DashboardHeader from '../components/DashboardHeader.vue'
import PinnedBookmarks from '../components/PinnedBookmarks.vue'
import AllBookmarksList from '../components/AllBookmarksList.vue'
import EditBookmarkModal from '../components/modals/EditBookmarkModal.vue'
import InviteCollaboratorsModal from '../components/modals/InviteCollaboratorsModal.vue'
import DeleteBookmarkModal from '../components/modals/DeleteBookmarkModal.vue'
import MoveBookmarksModal from '../components/modals/MoveBookmarksModal.vue'
import AddPasswordModal from '../components/modals/AddPasswordModal.vue'

const user = ref({ name: 'Falana Sheriff', email: 'sheriff@gmail.com' })
const sidebarCounts = ref({ allBookmarks: 1, unsorted: 1, collection: 1 })
const headerTitle = ref('All bookmarks')
const sortOption = ref('Newest')
const viewMode = ref('List')

const browserFilters = ref([
    { id: 'all', label: 'All', active: true },
    { id: 'chrome', label: 'Chrome', active: false },
    { id: 'arc', label: 'Arc', active: false },
    { id: 'firefox', label: 'Firefox', active: false },
    { id: 'opera', label: 'Opera', active: false },
    { id: 'brave', label: 'Brave', active: false },
    { id: 'edge', label: 'Edge', active: false },
])

const pinnedCards = ref([
    { title: 'Instagram', url: 'www.reddit.com', folder: 'unsorted', time: '3:36pm', icon: '📷', bg: 'bg-linear-to-br from-pink-400 to-rose-500' },
    { title: 'Facebook', url: 'www.facebook.com', folder: 'unsorted', time: '3:36pm', icon: '👤', bg: 'bg-linear-to-br from-blue-500 to-blue-600' },
    { title: 'Discord', url: 'www.discord.com', folder: 'unsorted', time: '3:36pm', icon: '💬', bg: 'bg-linear-to-br from-indigo-400 to-blue-300' },
    { title: 'Telegram', url: 'www.telegram.com', folder: 'unsorted', time: '3:36pm', icon: '💬', bg: 'bg-linear-to-br from-yellow-400 to-blue-300' },
])

const allBookmarks = ref([
    { title: 'Facebook - Connects with friends', url: 'www.facebook.com', folder: 'unsorted', time: '3:36pm', icon: '👤', tags: '#hashtag | #hashtag' },
    { title: 'Facebook - Connects with friends', url: 'www.facebook.com', folder: 'unsorted', time: '3:36pm', icon: '👤', tags: '#hashtag | #hashtag' },
    { title: 'Facebook - Connects with friends', url: 'www.facebook.com', folder: 'unsorted', time: '3:36pm', icon: '👤', tags: '#hashtag | #hashtag' },
    { title: 'Facebook - Connects with friends', url: 'www.facebook.com', folder: 'unsorted', time: '3:36pm', icon: '👤', tags: '#hashtag | #hashtag' },
    { title: 'Facebook - Connects with friends', url: 'www.facebook.com', folder: 'unsorted', time: '3:36pm', icon: '👤', tags: '#hashtag | #hashtag' },
    { title: 'Facebook - Connects with friends', url: 'www.facebook.com', folder: 'unsorted', time: '3:36pm', icon: '👤', tags: '#hashtag | #hashtag' },
])

const showEditModal = ref(false)
const editingBookmark = ref(null)
const showInviteModal = ref(false)
const showDeleteModal = ref(false)
const bookmarkToDelete = ref(null)
const showMoveModal = ref(false)
const bookmarkToMove = ref(null)
const moveCollections = ref([
    { id: 'all', name: 'All bookmarks', updated: 'Updated 2 mins ago', items: 23, icon: '📚', thumbnailClass: 'bg-amber-100' },
    { id: 'unsorted', name: 'Unsorted', updated: 'Updated 2 mins ago', items: 23, icon: '📄', thumbnailClass: 'bg-stone-200' },
    { id: 'collections', name: 'Collections', updated: 'Updated 2 mins ago', items: 23, icon: '📁', thumbnailClass: 'bg-purple-100' },
])
const showAddPasswordModal = ref(false)

function onBrowserSelect(id) {
    browserFilters.value = browserFilters.value.map((f) => ({ ...f, active: f.id === id }))
}

function onSearch(value) {
    // Wire to search logic when ready
}

function onShare() {
    showInviteModal.value = true
}

function closeInviteModal() {
    showInviteModal.value = false
}

function openAddPasswordModal() {
    showAddPasswordModal.value = true
}

function closeAddPasswordModal() {
    showAddPasswordModal.value = false
}

function onSavePassword({ password }) {
    // Wire to API or state when ready
    closeAddPasswordModal()
}

function onCreateFolder() {
    // Wire to create folder when ready
}

function onUpgrade() {
    // Wire to upgrade flow when ready
}

function openEditModal(bookmark) {
    editingBookmark.value = bookmark
    showEditModal.value = true
}

function closeEditModal() {
    showEditModal.value = false
    editingBookmark.value = null
}

function onSaveBookmark(formData) {
    const match = (b) => b.title === editingBookmark.value?.title && b.url === editingBookmark.value?.url
    const card = pinnedCards.value.find(match)
    if (card) {
        card.title = formData.title ?? card.title
        card.url = formData.url ?? card.url
        card.folder = formData.collection ?? card.folder
    }
    const item = allBookmarks.value.find(match)
    if (item) {
        item.title = formData.title ?? item.title
        item.url = formData.url ?? item.url
        item.folder = formData.collection ?? item.folder
        item.tags = formData.tags ?? item.tags
    }
    closeEditModal()
}

function openDeleteModal(bookmark) {
    bookmarkToDelete.value = bookmark
    showDeleteModal.value = true
}

function closeDeleteModal() {
    showDeleteModal.value = false
    bookmarkToDelete.value = null
}

function onConfirmDelete() {
    const b = bookmarkToDelete.value
    if (!b) {
        closeDeleteModal()
        return
    }
    const match = (item) => item.title === b.title && item.url === b.url
    pinnedCards.value = pinnedCards.value.filter((card) => !match(card))
    allBookmarks.value = allBookmarks.value.filter((item) => !match(item))
    closeDeleteModal()
}

function onPinnedContextAction(action) {
    // Handle Unpin, Edit, Select, Move, Delete for pinned bookmark (Edit/Delete/Move open modals via @edit / @delete / @move)
}

function openMoveModal(bookmark) {
    bookmarkToMove.value = bookmark
    showMoveModal.value = true
}

function closeMoveModal() {
    showMoveModal.value = false
    bookmarkToMove.value = null
}

function onMoveBookmark({ targetCollectionId, targetCollectionName }) {
    const b = bookmarkToMove.value
    if (!b) {
        closeMoveModal()
        return
    }
    const folder = targetCollectionName ?? targetCollectionId
    const match = (item) => item.title === b.title && item.url === b.url
    const card = pinnedCards.value.find(match)
    if (card) card.folder = folder
    const item = allBookmarks.value.find(match)
    if (item) item.folder = folder
    closeMoveModal()
}

function onAddBookmark() {
    // Wire to add bookmark when ready
}

function onBookmarkItemMenu(item, index) {
    // Open context menu or modal for list item
}
</script>
