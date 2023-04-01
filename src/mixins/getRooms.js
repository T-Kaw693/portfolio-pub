import firebase from "@/firebase/firebase"

export default {
  data() {
    return {
      rooms: []
    }
  },
  methods: {
    async getRooms() {
      this.rooms = []
      const roomRef = firebase.firestore().collection("rooms")
      const snapshot = await roomRef.get()

      snapshot.docs.map(doc => {
        const data = {...doc.data()}
        data.id = doc.id
        this.rooms.push(data)
      })
    }
  }
}