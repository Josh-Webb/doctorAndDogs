const autoDoc = function (name, speciality, address) {
    return {
        "name": name,
        "speciality": speciality,
        "address": address
    }
}

document.querySelector("#btn-createDoc").addEventListener("click", event => {
    const docName = document.getElementById("docName").value;
    const docSpeciality = document.getElementById("docSpeciality").value;
    const docAddress = document.getElementById("docAddress").value;
    console.log(docName, docSpeciality, docAddress)
    const autoDoc = {
        name: docName,
        speciality: docSpeciality,
        address: docAddress
    }
    console.log(autoDoc)
    API.saveDoc(autoDoc)
    .then(parsedResult => {
        console.log("what is the result", parsedResult)
    })
})

document.getElementById("btn-saveDog").addEventListener("click", event => {
    const dogeName = document.getElementById("dogName").value;
    const dogeBreed = document.getElementById("dogBreed").value;
    console.log(dogeName, dogeBreed)
    const pupSnuff = {
        name: dogeName,
        breed: dogeBreed
    }
    console.log(pupSnuff)
    API.saveDog(pupSnuff)
    .then(parsedResult => {
        console.log("snuff that pupper for a shine spark", parsedResult)
    })
})
