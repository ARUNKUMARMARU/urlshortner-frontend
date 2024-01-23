import instance from './instance';

// define the authentication service
const authService = {
    signup: async (user) => {
        try {
            console.log('Registering user...');
            const res = await instance.authInstance.post('/signup', user);

            console.log(res.data);

            if (res.data) {
                console.log('User registered successfully');
                return res.data;
            } else {
                console.log('Error registering user');
                return res.data;
            }
        } catch (error) {
            console.log('Error registering user');
            return error.response.data;
        }
    },

    signin: async (user) => {
        try {
            console.log('Authenticating user...');
            const res = await instance.authInstance.post('/signin', user);

            console.log(res.data);

            if (res.data) {
                console.log('User authenticated successfully');

                // store the token in the session storage
                sessionStorage.setItem('token', res.data.token);

                // store the user in the session storage
                sessionStorage.setItem('user', JSON.stringify({
                    username: res.data.username, name: res.data.name
                }));

                return res.data;
            } else {
                console.log('Error authenticating user');
                return res.data;
            }
        } catch (error) {
            console.log('Error authenticating user');
            return error.response.data;
        }
    },

    resetpassword : async(mailid)=>{
        try{
            const res = await instance.authInstance.post('/requestlink',mailid,{headers:{"Content-Type":"application/json"}})

            if (res.data) {  
                console.log('Link sent successfully');
                return res.data;
            } else {
                console.log('Try Error sending link');
                return res.data;
            }

        }catch(error){
            console.log('catch Error sending link');
            return error.response.data;
        }
    },
    getShortUrl : async(longUrl)=>{
        try{
            const res = await instance.authInstance.post('/getshorturl', longUrl);
            return res.data;

        }catch(error){
            console.error(error);
            return error.response.data;
        }
    }
}

export default authService;