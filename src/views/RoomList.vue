<template>
  <v-app id="inspire">
    <AppSidebar />
    <v-app-bar app shrink-on-scroll>

      <v-toolbar-title>ルーム一覧</v-toolbar-title>
      <CreateRoom />

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
        <v-row>
          <v-col v-for="room in rooms" :key="room.id" cols="4">
            <v-hover>
              <template #default="{ hover }">
                <div class="no-flex relative hover card" @click="enterRoom(room.id)">
                  <v-avatar class="mb-4" color="grey darken-1" size="64">
                    <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" v-if="!room.thumbnailUrl">
                    <img :src="room.thumbnailUrl" alt="John" v-if="room.thumbnailUrl">
                  </v-avatar>
                  <p>{{ room.name }}</p>
                  <v-icon v-show="hover" class="delete-icon" @click.stop="deleteRoom(room.id)">mdi-close</v-icon>
                </div>
              </template>
            </v-hover>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
  
<script>
import CreateRoom from '@/components/modal/CreateRoom'
import firebase from "@/firebase/firebase"
import getRooms from "@/mixins/getRooms"
import AppSidebar from '@/components/layouts/AppSidebar'
export default {
  mixins: [getRooms],
  components: {
    AppSidebar,
    CreateRoom
  },
  data: () => ({
    rooms: [],
    isHovering: null
  }),
  mounted() {
    this.getRooms()
  },
  methods: {
    async deleteRoom(roomId) {
      const confirmResult = window.confirm('本当に削除しますか？');
      if (confirmResult) {
        const roomRef = firebase.firestore().collection('rooms').doc(roomId)
        await roomRef.delete()
        // 削除したルームをrooms配列から削除する
        this.rooms = this.rooms.filter(room => room.id !== roomId)
      }
    },
    enterRoom(roomId) {
      this.$router.push({ path: 'chat', query: { room_id: roomId } })
    }
  },
}
</script>

<style>
.no-flex {
  display: block;
}

.center {
  justify-content: center;
}

.relative {
  position: relative;
}

.delete-icon {
  position: absolute !important;
  right: 20px;
  top: 0;
  margin: 8px;
  color: red !important;
  cursor: pointer;
}

.v-main__wrap {
  padding-top: 60px;
  padding-bottom: 50px;
}

.hover {
  transition: background-color 0.3s ease;
}

.hover:hover {
  background-color: #f2f2f2;
}

.card {
  padding: 20px 0;
  cursor: pointer;
}
</style>
