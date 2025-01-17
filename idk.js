
const API_KEY= ''     
const submitButton = document.querySelector('#submit')
const outPutElement = document.querySelector('#txtOutput')
const inputElement = document.querySelector('input')
document.querySelector('button')


async function getmessage() {
    console.log('click')
    const options = {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${API_KEY}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{role: "user", content:"".concat(" Write a four verse poem about: ", inputElement.value)}],
            max_tokens: 1000
        })
    }
    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', options)
        const data = await response.json()
        console.log(data)
        outPutElement.textContent = data.choices[0].message.content
        if (data.choices[0].message.content) {
            const pElement = document.createElement('p')
            pElement.textContent = inputElement.value
        }
    } catch (error){
        console.error(error)
    }
}

submitButton.addEventListener('click', getmessage)

function ShowHideDiv(btnPassport) {
        var dvPassport = document.getElementById("Ok");
        dvPassport.style.display = btnPassport.value == "Yes" ? "block" : "none";
    }
function ShowHideDiv2(btnPassport) {
        var dvPassport = document.getElementById("Ok2");
        dvPassport.style.display = btnPassport.value == "Yes" ? "block" : "none";
        //document.getElementById('txtPassportNumber').value='';
    }

    console.log(inputElement.value)
