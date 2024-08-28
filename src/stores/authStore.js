import { defineStore } from 'pinia';
import { v4 as uuidv4 } from 'uuid';
import router from '@/router/index.js';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        users: [
                {
                    "id": "1",
                    "username": "John Doe",
                    "email": "johndoe@example.com",
                    "password": "P@ssw0rd123"
                },
                {
                    "id": "2",
                    "username": "Jane Smith",
                    "email": "janesmith@example.com",
                    "password": "S3cur3P@ss"
                },
                {
                    "id": "3",
                    "username": "Robert Johnson",
                    "email": "robertjohnson@example.com",
                    "password": "MyP@ssw0rd!"
                },
                {
                    "id": "4",
                    "username": "Emily Davis",
                    "email": "emilydavis@example.com",
                    "password": "P@ssword123!"
                },
                {
                    "id": "5",
                    "username": "Michael Brown",
                    "email": "michaelbrown@example.com",
                    "password": "Br0wnieP@ss"
                },
                {
                    "id": "6",
                    "username": "Jessica Wilson",
                    "email": "jessicawilson@example.com",
                    "password": "Wils0nP@ssword"
                },
                {
                    "id": "7",
                    "username": "David Moore",
                    "email": "davidmoore@example.com",
                    "password": "M00reP@ss"
                },
                {
                    "id": "8",
                    "username": "Laura Taylor",
                    "email": "laurataylor@example.com",
                    "password": "TaylorP@ss123"
                },
                {
                    "id": "9",
                    "username": "Daniel Anderson",
                    "email": "danielanderson@example.com",
                    "password": "And3rs0nP@ss"
                },
                {
                    "id": "10",
                    "username": "Sarah Thomas",
                    "email": "sarahthomas@example.com",
                    "password": "Th0masP@ss!"
                }

        ],
        username: '',
        token: '',
        expireAt: ''
    }),
    getters: {
        getUsername: (state) => state.username,
        getToken: (state) => state.token,
        getExpireAt: (state) => state.expireAt,
    },
    actions: {
        login(username, password) {
            const user = this.users.find(user => user.username === username && user.password === password);
            if (user) {
                console.log('Login successful!');
                this.username = user.username;
                this.token = uuidv4();
                this.expireAt = new Date().getTime() + 3600 * 1000;
                router.push(`/${user.id}`);
            } else {
                alert('Invalid username or password');
            }
        },

        register(username, email, password) {
            const newUser = {
                id: uuidv4(),
                username: username,
                email: email,
                password: password,
            };

            this.users.push(newUser);
            this.username = username;
            this.token = uuidv4();
            this.expireAt = new Date().getTime() + 3600 * 1000;
            alert('User registered successfully!');
            router.push(`/${newUser.id}`);
        },

        isAuthenticated() {
            const currentTime = new Date().getTime();
            if (this.token && this.expireAt && currentTime < this.expireAt) {
                console.log("Token is valid")
                return true;
            } else {
                console.log("Token is expired")
                this.logout();
                return false;
            }
        }
    },
    persist: true,
});
