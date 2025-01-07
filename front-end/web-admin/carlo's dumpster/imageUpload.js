import { getAPI } from "../../assets/js/api.js"

document.getElementById("file-input").onchange = () => {
    console.log("hi")
    const files = document.getElementById("file-input").files;
    const file = files[0]
    if(file == null){
        return alert('No File Selected')
    }
    console.log(file)
    getSignedRequest(file);
}


function getSignedRequest(file){
    const xhr = new XMLHttpRequest()
    xhr.open('GET', getAPI() + `S3?file-name=${file.name}&file-type=${file.type}&username=admin&password=password`)
    xhr.onreadystatechange = () => {
        if(xhr.readyState === 4){
            if(xhr.status === 200){
                const response = JSON.parse(xhr.responseText)
                uploadFile(file, response.signedRequest, response.url)
            } else {
                alert('Could Not Get Signed URL.')
            }
        }
    };
    xhr.send()
}

function uploadFile(file, signedRequest, url){
    const xhr = new XMLHttpRequest()
    console.log(signedRequest)
    xhr.open('PUT', signedRequest)
    xhr.onreadystatechange = () => {
        if(xhr.readyState === 4) {
            if(xhr.status === 200){
              document.getElementById('preview').src = url;
              document.getElementById('avatar-url').value = url;
            }
            else{
              alert('Could not upload file.');
            }
        }
    };
    xhr.send(file);
}