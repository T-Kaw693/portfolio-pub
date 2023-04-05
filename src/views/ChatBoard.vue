<template>
  <v-app id="inspire">
    <AppSidebar />

    <v-main>
      <v-container class="py-8 px-6" fluid>
        <h1>{{ room ? room.name : "" }}</h1>
        <v-row>
          <v-col v-for="card in cards" :key="card" cols="12">
            <v-card>
              <v-subheader>{{ card }}</v-subheader>

              <v-list two-line>
                <template v-if="messages.length === 0">
                  <v-list-item>メッセージを始めよう！</v-list-item>
                </template>
                <template v-else v-for="(data, index) in messages">
                  <v-list-item :key="index">
                    <v-list-item-avatar color="grey darken-1">
                      <v-img :src=data.photoURL></v-img>
                    </v-list-item-avatar>

                    <v-list-item-content class="rel">
                      <v-list-item-subtitle class="message">
                        <span>{{ data.name }}</span>
                        <br>
                        <span>{{ new Date(data.createdAt.toDate()).toLocaleString() }}</span>
                        <br>
                        <span class="message__txt">{{ data.message }}</span>
                      </v-list-item-subtitle>

                      <v-btn class="abs-i" icon @click="deleteMessage(data.id)">
                        <v-icon>mdi-delete</v-icon>
                      </v-btn>

                    </v-list-item-content>
                  </v-list-item>

                  <v-divider v-if="index !== 6" :key="`divider-${index}`" inset></v-divider>
                </template>
              </v-list>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <v-textarea v-model="body" append-icon="mdi-comment" class="mx-2" label="メッセージを送信する" rows="3" auto-grow
        @keydown.enter.shift="submit"></v-textarea>
      <v-btn class="me-4" type="submit" :disabled="invalid" @click="submit">
        submit
      </v-btn>

      <v-btn @click="clear">
        clear
      </v-btn>
    </v-main>
  </v-app>
</template>
  
<script>
import firebase from "@/firebase/firebase"
import AppSidebar from '@/components/layouts/AppSidebar'
export default {
  async created() {
    this.roomId = this.$route.query.room_id;
    console.log("roomId", this.roomId)

    const roomRef = firebase.firestore().collection("rooms").doc(this.roomId)
    const roomDoc = await roomRef.get()
    if (!roomDoc.exists) {
      await this.$router.push('/')
    }
    this.room = roomDoc.data()
    console.log("room", this.room)
  },
  mounted() {
    this.auth = JSON.parse(sessionStorage.getItem('user'))
    console.log(this.auth)

    const roomRef = firebase.firestore().collection('rooms').doc(this.roomId)
    roomRef.collection('messages').orderBy('createdAt', 'asc')
      .onSnapshot(snapshot => {
        snapshot.docChanges().forEach(change => {
          const message = change.doc.data()
          message.id = change.doc.id
          console.log('new message', message)
          this.messages.push(message)
        })
      })
  },
  data: () => ({
    messages: [
      // {message: "message 1"},
      // {message: "message 2"},
      // {message: "message 3"},
      // {message: "message 4"},
      // {message: "message 5"},

    ],
    body: '',
    roomId: '',
    room: null,
    cards: ['Today'],
    drawer: null,
    links: [
      ['mdi-inbox-arrow-down', 'Inbox'],
      ['mdi-send', 'Send'],
      ['mdi-delete', 'Trash'],
      ['mdi-alert-octagon', 'Spam'],
    ],
    auth: null,
    // invalid: false
  }),
  computed: {
    invalid() {
      console.log("invalid call");
      if (!this.body) {
        return true;
      }
      return false;
    }
  },
  methods: {
    clear() {
      console.log("clear call")
      this.body = "";
    },
    submit() {
      const roomRef = firebase.firestore().collection('rooms').doc(this.roomId)
      roomRef.collection('messages').add({
        message: this.body,
        name: this.auth.displayName,
        photoURL: this.auth.photoURL,
        createdAt: firebase.firestore.Timestamp.now()
      })
        .then(result => {
          console.log('success', result)
          this.body = ""
        })
        .catch(error => {
          console.log('fail', error)
          alert('メッセージの送信に失敗')
        })
    },
    deleteMessage(id) {
      const roomRef = firebase.firestore().collection('rooms').doc(this.roomId)
      roomRef.collection('messages').doc(id).delete()
        .then(() => {
          console.log('Message deleted successfully')
          this.messages = this.messages.filter(message => message.id !== id)
        })
        .catch(error => {
          console.log('Failed to delete message', error)
          alert('メッセージの削除に失敗')
        })
    }
  },
  components: {
    AppSidebar
  }
}
</script>

<style>
.message {
  text-align: left;
}

.message__txt {
  font-size: 20px;
  line-height: 1.5;
  color: #000;
}

.rel {
  position: relative;
}

.abs-i {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 20px;
}
</style>