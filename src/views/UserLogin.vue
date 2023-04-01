<template>
    <v-app>
        <div class="loginbox">
            <v-card class="loginform">
                <v-card-title class="logintitle">Login</v-card-title>
                <v-card-subtitle>ユーザー情報をご入力ください</v-card-subtitle>
                <v-btn text color="light-blue" to="signup">新規登録はこちら</v-btn>
                <v-form
                ref="form"
                v-model="valid"
                lazy-validation
                >

                    <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    @keydown.enter="submit"
                    label="E-mail"
                    required
                    ></v-text-field>

                    <v-text-field
                    v-model="password"
                    @keydown.enter="submit"
                    type="password"
                    label="password"
                    >
                    </v-text-field>
                    
                    <v-btn
                    color="success"
                    class="loginbtn"
                    @click="submit"
                    :disabled="isValid">
                        login
                    </v-btn>

                    <v-btn>
                        clear
                    </v-btn>

                    <v-alert
                    dense
                    text
                    type="success"
                    class="successmessage"
                    v-if="message"
                    >
                    {{ message }}
                    </v-alert>

                    <v-alert
                    dense
                    outlined
                    type="error"
                    class="errormessage"
                    v-if="errorMessage"
                    >
                    {{ errorMessage }}
                    </v-alert>

                </v-form> 
            </v-card>
        </div>
    </v-app>
</template>
  
<script>
import firebase from "@/firebase/firebase"
export default {
    data: () => ({
    valid: false,
    firstname: '',
    lastname: '',
    nameRules: [
        value => {
        if (value) return true

        return 'Name is requred.'
        },
        value => {
        if (value?.length <= 10) return true

        return 'Name must be less than 10 characters.'
        },
    ],
    email: '',
    emailRules: [
        value => {
        if (value) return true

        return 'メールアドレスを入力'
        },
        value => {
        if (/.+@.+\..+/.test(value)) return true

        return '不正な値です。'
        },
    ],
    password: '',
    message: '',
    errorMessage: ''
    }),
    mounted() {
        if(localStorage.message) {
            this.message = localStorage.message
            localStorage.message = ''
        }
    },
    computed: {
        isValid() {
            console.log("isValid", this.valid)
            return !this.valid;
        }
    },
    methods: {
        submit() {
            console.log("submit call")
            firebase.auth()
                .signInWithEmailAndPassword(this.email, this.password)
                .then((result) => {
                    console.log("success")
                    console.log("user", result.user)

                    const auth = {
                        displayName: result.user.displayName,
                        email: result.user.email,
                        uid: result.user.uid,
                        refreshToken: result.user.refreshToken,
                        photoURL: result.user.photoURL
                    }

                    sessionStorage.setItem('user', JSON.stringify(auth))
                    this.$router.push('/')
                })
                .catch((error) => {
                    console.log("fail", error)
                    this.errorMessage = "ログインに失敗しました"
                })
        }
    }
}
</script>

<style>
.loginform {
    margin: 150px;
    padding: 30px;
}

.loginbox {
    width: 50%;
    margin: 0 auto;
    padding: 30px;
}

.logintitle {
    display: inline-block;
}

.loginbtn {
    margin-right: 20px;
}

.successmessage {
    margin-top: 20px;
}

.errormessage {
    margin-top: 20px;
}
</style>