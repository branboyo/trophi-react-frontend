export async function sendSet(date, set, cookie) {
    var currentDate = new Date(date);
    var dd = String(currentDate.getDate()).padStart(2, '0');
    var mm = String(currentDate.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = currentDate.getFullYear();
    const user = cookie['username'];
    const token = cookie['token'];

    fetch("https://trophi-express-api-1.onrender.com/sessions/sessionPost", {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: user,
            inputDate: `${yyyy}-${mm}-${dd}`,
            exercise: set.exercise.toUpperCase(),
            reps: set.reps,
            weight: set.weight,
            token: token,

        })
    })
}

export async function postLogin(username, password, cookie) {
    let token = await fetch("https://trophi-express-api-1.onrender.com/login/post", {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            user: username,
            password: password
        })
    }).then(response => {
        return response.json();
      }).then(jsonResponse => {
        return jsonResponse;
      })

      return token.data;
}