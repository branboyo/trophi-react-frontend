export default async function sendSet(date, set) {
    console.log(date, set)
    var currentDate = new Date(date);
    var dd = String(currentDate.getDate()).padStart(2, '0');
    var mm = String(currentDate.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = currentDate.getFullYear();
    const user = "branboyo";
    fetch("http://localhost:3001/sessions/sessionPost", {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            userName: user,
            inputDate: `${yyyy}-${mm}-${dd}`,
            exercise: set.exercise.toUpperCase(),
            reps: set.reps,
            weight: set.weight
        })
    })
}