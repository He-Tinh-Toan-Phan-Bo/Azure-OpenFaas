let country = document.querySelector("#country");
let city = document.querySelector("#city");
let check = document.querySelector("#check");
let tempIcon = document.querySelector("#tempIcon");
let weatherCountry = document.querySelector("#weatherCountry");
let temperature = document.querySelector("#temperature");
let weatherDescription = document.querySelector("#weatherDescription");

check.addEventListener("click", () => {
    // Đường dẫn đến function trên OpenFaaS
    let url = "http://34.28.46.237:30080/function/weather";  // Cập nhật URL OpenFaaS

    // Lấy giá trị thành phố và quốc gia từ form nhập liệu
    const cityName = city.value.trim();
    const countryName = country.value.trim();

    // Kiểm tra nếu người dùng chưa nhập thông tin
    if (!cityName || !countryName) {
        alert("Vui lòng nhập thành phố và quốc gia.");
        return;
    }

    // Gửi yêu cầu POST đến OpenFaaS function với dữ liệu thành phố và quốc gia
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            city: cityName,      // Gửi tên thành phố
            country: countryName // Gửi tên quốc gia
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            console.error('Error:', data.error);
            return;
        }

        console.log('Received data:', data);
        console.log('Location:', data.location);
        console.log('Weather:', data.weather);
        console.log('Temperature:', data.temperature);

        // Cập nhật dữ liệu thời tiết lên giao diện
        weatherCountry.innerText = `${data.location}`;
        temperature.innerHTML = `${data.temperature}°<b>C</b>`;
        weatherDescription.innerText = data.weather;

        // Đổi icon dựa trên mô tả thời tiết
        if (data.weather.includes("cloud")) {
            tempIcon.src = `tempicons/clouds.svg`;
        } else if (data.weather.includes("rain")) {
            tempIcon.src = `tempicons/rain.svg`;
        } else if (data.weather.includes("sun")) {
            tempIcon.src = `tempicons/sun.svg`;
        } else {
            tempIcon.src = `tempicons/default.svg`;
        }
    })
    .catch(error => {
        console.error('Request failed', error);
    });

    // Xóa giá trị ô nhập sau khi thực hiện yêu cầu
    country.value = "";
    city.value = "";
});
