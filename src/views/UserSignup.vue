<template>
    <v-app>
        <div class="loginbox">
            <v-card class="loginform">
                <v-card-title class="logintitle">Signup</v-card-title>
                <v-card-subtitle>ユーザー情報をご入力ください</v-card-subtitle>
                <v-btn text color="light-blue" to="login">ログイン画面ははこちら</v-btn>
                <v-form ref="form" v-model="valid" lazy-validation>

                    <v-text-field v-model="name" :rules="nameRules" label="Username" required></v-text-field>

                    <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>

                    <v-text-field v-model="password" type="password" label="password">
                    </v-text-field>

                    <v-btn color="success" class="loginbtn" @click="submit" :disabled="isValid">
                        Signup
                    </v-btn>

                    <v-btn>
                        clear
                    </v-btn>

                    <v-alert dense outlined type="error" class="errormessage" v-if="errorMessage">
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
        name: '',
        nameRules: [
            value => {
                if (value) return true

                return '名前を入力してください'
            },
            value => {
                if (value?.length <= 10) return true

                return '名前は１０文字以内で入力してください'
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

                return '不正'
            },
        ],
        password: '',
        errorMassage: ''
    }),

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
                .createUserWithEmailAndPassword(this.email, this.password)
                .then(async (result) => {
                    console.log("success", result)
                    await result.user.updateProfile(
                        { displayName: this.name }
                    );
                    console.log("updateuser", result.user)

                    localStorage.message = "新規作成に成功しました"

                    this.$router.push('/login')
                })
                .catch((error) => {
                    console.log("fail", error)
                    this.errorMessage = "ユーザーの新規登録に失敗しました"
                })
        }
    }
}
</script>

<style>
.loginform {
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

.errormessage {
    margin-top: 20px;
}
</style>