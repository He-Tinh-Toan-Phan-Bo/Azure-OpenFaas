let emailInput = document.querySelector("#email"); 
let sendEmailButton = document.querySelector("#sendEmail"); 

let country = document.querySelector("#country");
let city = document.querySelector("#city");
let check = document.querySelector("#check");
let tempIcon = document.querySelector("#tempIcon");
let weatherCountry = document.querySelector("#weatherCountry");
let temperature = document.querySelector("#temperature");
let weatherDescription = document.querySelector("#weatherDescription");
let feelsLike = document.querySelector("#feelsLike");
let humidity = document.querySelector("#humidity");
let longitude = document.querySelector("#longitude");
let latitude = document.querySelector("#latitude");

check.addEventListener("click", () => {
    
    const proxyUrl = 'https://api.allorigins.win/raw?url=';
    const apiUrl = 'http://34.28.46.237:30080/function/weather-function?q=${country.value}';
    fetch(`${proxyUrl}${encodeURIComponent(apiUrl)}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            location: 'Japan'
        })
    })
    .then(response => response.json())
    .then(data => {
        // Kiểm tra xem có lỗi trong dữ liệu trả về không
        if (data.error) {
            console.error('Error:', data.error);
            if (data.details) {
                console.error('Details:', data.details);
            }
            return;
        }
    
        // Hiển thị dữ liệu thời tiết trả về
        console.log('Location:', data.location);
        console.log('Weather:', data.weather);
        console.log('Temperature:', data.temperature);
        console.log('Humidity:', data.humidity);
        console.log('Wind Speed:', data.wind_speed);
    
        // Có thể thêm mã để hiển thị dữ liệu trên giao diện người dùng (UI)
        document.getElementById('weather-info').innerHTML = `
            <p>Location: ${data.location}</p>
            <p>Weather: ${data.weather}</p>
            <p>Temperature: ${data.temperature}°C</p>
            <p>Humidity: ${data.humidity}%</p>
            <p>Wind Speed: ${data.wind_speed} m/s</p>
        `;
    })
    .catch(error => {
        console.error('Request failed', error);
    });
})

// let country = document.querySelector("#country");
// let city = document.querySelector("#city");
// let check = document.querySelector("#check");
// let tempIcon = document.querySelector("#tempIcon");
// let weatherCountry = document.querySelector("#weatherCountry");
// let temperature = document.querySelector("#temperature");
// let weatherDescription = document.querySelector("#weatherDescription");
// let feelsLike = document.querySelector("#feelsLike");
// let humidity = document.querySelector("#humidity");
// let longitude = document.querySelector("#longitude");
// let latitude = document.querySelector("#latitude");

// check.addEventListener("click", () => {
//     const proxyUrl = 'https://api.allorigins.win/raw?url=';
//     const apiUrl = 'http://34.28.46.237:30080/function/weather-function';

//     // Tạo payload theo đúng định dạng yêu cầu
//     const payload = {
//         query: {
//             location : "VietNam"
//         }
//     };

//     fetch(`${proxyUrl}${encodeURIComponent(apiUrl)}`, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(payload)
//     })
//     .then(response => {
//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         return response.json();
//     })
//     .then(data => {
//         console.log("Response data:", data); // Log để kiểm tra cấu trúc data

//         // Handling response data
//         if (data && data.name) {
//             weatherCountry.innerText = `${data.name} ${data.sys?.country ? '/ ' + data.sys.country : ''}`;
//         }
//         if (data?.main?.temp) {
//             temperature.innerHTML = `${data.main.temp}°<b>C</b>`;
//         }
//         document.body.style.backgroundImage = `url('https://source.unsplash.com/1600x900/?${data.name || 'weather'}')`;
//         if (data?.weather && data.weather[0]) {
//             const weatherItem = data.weather[0];
//             weatherDescription.innerText = weatherItem.description || '';
//             const id = weatherItem.id;
//             if (id < 250) tempIcon.src = 'tempicons/storm.svg';
//             else if (id < 350) tempIcon.src = 'tempicons/drizzle.svg';
//             else if (id < 550) tempIcon.src = 'tempicons/snow.svg';
//             else if (id < 650) tempIcon.src = 'tempicons/rain.svg';
//             else if (id < 800) tempIcon.src = 'tempicons/atmosphere.svg';
//             else if (id === 800) tempIcon.src = 'tempicons/sun.svg';
//             else if (id > 800) tempIcon.src = 'tempicons/clouds.svg';
//         }
//         if (data?.main) {
//             feelsLike.innerText = `Cảm giác như ${data.main.feels_like || ''}°C`;
//             humidity.innerText = `Độ ẩm ${data.main.humidity || ''}%`;
//         }
//         if (data?.coord) {
//             latitude.innerText = `Vĩ độ ${data.coord.lat || ''}`;
//             longitude.innerText = `Kinh độ ${data.coord.lon || ''}`;
//         }
//     })
//     .catch(error => {
//         console.error("Error:", error);
//         alert("Không thể lấy thông tin thời tiết. Vui lòng thử lại sau.");
//     });
// });

// Email sending function
function sendEmail() {
    const email = emailInput.value;
    if (!email) {
        alert("Please enter an email address");
        return;
    }

    const myHeaders = new Headers();
    myHeaders.append("Authorization", "App f74a6883c36bf414a9b0c761abbe80e5-6f54ac4b-c02b-4dc6-87b7-70f5e9af3437");
    myHeaders.append("Accept", "application/json");

    const formdata = new FormData();
    formdata.append("from", "Phú <leevanphu2905@gmail.com>");
    formdata.append("subject", "Weather Report");
    formdata.append("to", `{"to":"${email}","placeholders":{"firstName":"User"}}`);
    
    // Include current weather data in email
    const weatherData = `
        Location: ${weatherCountry.innerText}
        Temperature: ${temperature.innerText}
        Weather: ${weatherDescription.innerText}
    `;
    
    formdata.append("text", `Hi {{firstName}}, here is your weather report:\n\n${weatherData}\n\nHave a nice day!`);

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: formdata,
        redirect: "follow",
    };

    fetch("https://51emnx.api.infobip.com/email/3/send", requestOptions)
        .then((response) => response.text())
        .then((result) => {
            console.log("Email sent successfully:", result);
            alert("Email sent successfully!");
            emailInput.value = "";
        })
        .catch((error) => {
            console.error("Error sending email:", error);
            alert("Error sending email. Please try again.");
        });
}

// Attach email send event listener
sendEmailButton.addEventListener("click", sendEmail);