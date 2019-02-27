const axios = require('axios');

(async () => {
  try {
    const { data } = await axios.post('http://localhost:8080/auth/login', {
      username: 'kelvin',
      password: 'password',
      seller: true,
    });
    // console.log(data);

    const { token } = data;
    const { data: res2 } = await axios.get('http://localhost:8080/auth', {
      headers: { authorization: `Bearer ${token}` },
    });

    console.log(res2);
  } catch (err) {
    console.log(err);
  }
})();
