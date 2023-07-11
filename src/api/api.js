import axios from 'axios'
import cookies from 'vue-cookies'

const url = "https://vadniri.pythonanywhere.com/"

export async function uploadPostApi(title, description, imageUrl) {

    var options = {
        method: 'POST',
        url: url + 'post/api/v1/post/',
        headers: {
            'Accept': '*/*',
            'Authorization': 'token ' + cookies.get("token"),
            'Content-Type': 'application/json'
        },
        data: {
            title: title,
            description: description,
            image_url: imageUrl,
        }
    };
    return axios.request(options)
};

export async function getPostsApi() {

    var options = {
        method: 'GET',
        url: url + 'post/api/v1/post/',
        headers: {
            'Accept': '*/*',
            //'Authorization': 'token ' + cookies.get("token"),
            'Content-Type': 'application/json'
        }
    };
    return await axios.request(options);
};

export async function getUserInfoApi(user) {
    var options = {
        method: 'GET',
        url: url + 'user/api/v1/user/' + user,
        headers: {
            'Accept': '*/*',
            'Authorization': 'token ' + cookies.get("token"),
            'Content-Type': 'application/json'
        },
    };
    return await axios.request(options)
};

export function getPostApi(post_name) {

    var options = {
        method: 'GET',
        url: url + 'post/api/v1/post/' + post_name,
        headers: {
            'Accept': '*/*',
            'Content-Type': 'application/json'
        }
    };
    return axios.request(options).then(response => {
        return response;
    });
};

export async function getTokenApi(username, password) {
    var options = {
        method: 'POST',
        url: url + 'user/api/auth/',
        headers: {
            "Accept": '*/*',
            "Accept-Encoding": "gzip, deflate, br",
            'Content-Type': 'application/json'
        },
        data: {
            "username": username,
            "password": password
        }
    };
    const response = await axios.request(options)
    const token = response.data.token;
    cookies.set("token", token);
    cookies.set("username", username);
    return response;
}

export async function createUserApi(username, firstName, email, password){
    console.log(username, firstName, email, password);

    var options = {
        method: 'POST',
        url: url + 'user/api/v1/user/',
        headers: {
            "Accept": '*/*',
            "Accept-Encoding": "gzip, deflate, br",
            'Content-Type': 'application/json'
        },                
        data: {
            "username": username,
            "password": password,
            "email": email,
            "first_name": firstName
        }
    };
    return await axios.request(options);
};
