
async function getJson() {
    try {
        const url_api_github = "https://api.github.com/users/conanak99";
        let a = await fetch(url_api_github);
        let response1 = await a.json();
        console.log(response1);
        return {
            name_api: response1.name,
            test: "hello"
        }
    }
    catch (error) {
        console.error(error);
    }

}
getJson().then((obj) => obj.test).catch(err => console.error(err));