const API = {
    saveDoc: function (obj) {
        return fetch("http://localhost:8088/doctor",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        })
        .then(response => response.json());
    },
    saveDog: function (obj) {
        return fetch("http://localhost:8088/bowWowKennel", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
    })
    }
}