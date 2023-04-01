<template>
  <v-app id="inspire">
  <AppSidebar/>
    <v-app-bar
      app
      shrink-on-scroll
    >

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
          <v-col
          v-for="room in rooms"
          :key="room.id"
          cols="4"
          >
            <v-avatar
            class="mb-4"
            color="grey darken-1"
            size="64"
            >
              <img
              src="https://cdn.vuetifyjs.com/images/john.jpg"
              alt="John"
              v-if="!room.thumbnailUrl"
              >
              <img
              :src="room.thumbnailUrl"
              alt="John"
              v-if="room.thumbnailUrl"
              >
            </v-avatar>
            <v-card-title class="center">
              {{room.name}}
            </v-card-title>
            <v-card-actions class="no-flex">
              <v-btn text color="primary" :to="{ path: 'chat', query: { room_id: room.id }}">Enter Room</v-btn>
              <v-btn text color="error" @click="deleteRoom(room.id)">Delete Room</v-btn>
            </v-card-actions>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
  
<script>
import AppSidebar from '@/components/layouts/AppSidebar'
import CreateRoom from '@/components/modal/CreateRoom'
import firebase from "@/firebase/firebase"
import getRooms from "@/mixins/getRooms"
export default {
  mixins: [getRooms],
  components: {
      AppSidebar,
      CreateRoom
  },
  data: () => ({
      rooms: []
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

</style>