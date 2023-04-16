<template>
    <v-app id="past">
        <AppSidebar />
        <v-main>
            <v-container>
                <h1>過去のメッセージ一覧</h1>
                <p>ログインしているユーザーのメッセージを絞り込み</p>
                <p class="lead">{{ auth.displayName }}さんのメッセージ一覧</p>
                <template v-if="rooms.length > 0">
                    <v-card class="card-message" v-for="(room, index) in rooms" :key="index">
                        <h2>チャットルーム名：{{ room.name }}</h2>
                        <template v-if="filteredMessages(room.messages).length > 0">
                            <p>メッセージ一覧</p>
                            <ul>
                                <li v-for="(message, index) in filteredMessages(room.messages)" :key="index">
                                    {{ new Date(message.createdAt.toDate()).toLocaleString() }} 「{{ message.message }}」
                                </li>
                            </ul>
                        </template>
                        <template v-else>
                            <p style="color: red;">このチャットルームにはまだメッセージを送信してません</p>
                        </template>
                        <router-link v-if="room.messages.length > 0"
                            :to="{ name: 'ChatBoard', query: { room_id: room.id } }">チャットルーム「{{ room.name }}」
                            へ移動</router-link>
                    </v-card>
                </template>
                <template v-else>
                    <p>該当するルームが無いようです。</p>
                </template>
            </v-container>
        </v-main>
        <LinkTop />
    </v-app>
</template>
  
<script>
import firebase from "@/firebase/firebase"
import AppSidebar from '@/components/layouts/AppSidebar'
import LinkTop from '@/components/parts/LinkTop'

export default {
    data() {
        return {
            rooms: []
        }
    },
    computed: {
        auth() {
            return JSON.parse(sessionStorage.getItem('user'))
        }
    },
    mounted() {
        firebase.firestore().collection('rooms')
            .get()
            .then(querySnapshot => {
                const promises = []
                querySnapshot.forEach(doc => {
                    const roomId = doc.id
                    const roomRef = firebase.firestore().collection('rooms').doc(roomId)
                    const promise = roomRef.collection('messages')
                        .orderBy('createdAt', 'desc')
                        .get()
                        .then(querySnapshot => {
                            const messages = []
                            querySnapshot.forEach(doc => {
                                const message = doc.data()
                                message.id = doc.id
                                messages.push(message)
                            })
                            if (messages.length > 0) {
                                return {
                                    id: roomId,
                                    name: doc.data().name,
                                    messages: messages
                                }
                            }
                        })
                        .catch(error => {
                            console.log('fail', error)
                            alert('メッセージの取得に失敗')
                        })
                    promises.push(promise)
                })
                Promise.all(promises)
                    .then(results => {
                        const rooms = results.filter(room => room !== undefined)
                        this.rooms = rooms
                    })
            })
            .catch(error => {
                console.log('fail', error)
                alert('ルームの取得に失敗')
            })
    },
    methods: {
        filteredMessages(messages) {
            return messages.filter(message => message.name === this.auth.displayName)
        }
    },
    components: {
        AppSidebar,
        LinkTop
    }
}
</script>

<style>
.card-message {
    text-align: left;
    padding: 20px;
    margin-top: 50px;
}

.card-message:first-of-type {
    margin-top: 0;
}

.card-message p {
    margin-top: 10px;
    margin-bottom: 0;
}

.card-message ul {
    list-style: none;
    margin-top: 0 !important;
    padding-left: 0 !important;
}

.card-message a {
    margin-top: 20px;
    display: inline-block;
}

.lead {
    font-size: 25px;
    line-height: 1.5;
    margin-top: 20px;
}
</style>
  