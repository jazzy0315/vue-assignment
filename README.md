# USAGE

### Clone the repository
```bash
git clone https://github.com/jazzy0315/vue-assignment.git
```

### Install the dependencies
```bash
npm install
```

### After the installation, start the development server by running:
```bash
npm run dev
```


### Used tech stack:
* Vue.js 3
* Vue router
* Pinia
* VeeValidate
* Tailwind CSS

## Explanation

This project represents the Authentication System. It contains Login Page, Registration Page and Dashboard Page. When the application is started, the Login Page is displayed to the user. The localStorage is loaded with 10 already registered users through which it is possible to log in. First, it was necessary to create views, and set up navigation through the router.
When the user enters the login, the code in authStore.js scans to see if they are among the users, if so it then assigns a token and an expiration time to the user. And it redirects the user according to his id to the Dashboard.
If the user needs to register, the user goes to the Registration Page where he fills in the form. The fields go through validation in RegisterView.vue using VeeValidate will alert a non-valid entry. If all fields are valid the code in authStore.js assigns the new user to localStorage, assigns a token and expiration time and redirects them to the dashboard.  The dashboard is displayed by the user id.

## Users already registered



| ID  | Username        | Email                    | Password       |
| --- | --------------- | ------------------------ | -------------- |
| 1   | John Doe        | johndoe@example.com      | P@ssw0rd123    |
| 2   | Jane Smith      | janesmith@example.com    | S3cur3P@ss     |
| 3   | Robert Johnson  | robertjohnson@example.com| MyP@ssw0rd!    |
| 4   | Emily Davis     | emilydavis@example.com   | P@ssword123!   |
| 5   | Michael Brown   | michaelbrown@example.com | Br0wnieP@ss    |
| 6   | Jessica Wilson  | jessicawilson@example.com| Wils0nP@ssword |
| 7   | David Moore     | davidmoore@example.com   | M00reP@ss      |
| 8   | Laura Taylor    | laurataylor@example.com  | TaylorP@ss123  |
| 9   | Daniel Anderson | danielanderson@example.com | And3rs0nP@ss |
| 10  | Sarah Thomas    | sarahthomas@example.com  | Th0masP@ss!    |



