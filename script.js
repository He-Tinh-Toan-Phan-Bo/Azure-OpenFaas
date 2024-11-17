// let country = document.querySelector("#country");
// let city = document.querySelector("#city");
// let check = document.querySelector("#check");
// let tempIcon = document.querySelector("#tempIcon");
// let weatherCountry = document.querySelector("#weatherCountry");
// let temperature = document.querySelector("#temperature");
// let weatherDescription = document.querySelector("#weatherDescription");

// check.addEventListener("click", () => {
//     // Đường dẫn đến function trên OpenFaaS
//     let url = "http://34.28.46.237:30080/function/weather";  // Cập nhật URL OpenFaaS

//     // Lấy giá trị thành phố và quốc gia từ form nhập liệu
//     const cityName = city.value.trim();
//     const countryName = country.value.trim();

//     // Kiểm tra nếu người dùng chưa nhập thông tin
//     if (!cityName || !countryName) {
//         alert("Vui lòng nhập thành phố và quốc gia.");
//         return;
//     }

//     // Gửi yêu cầu POST đến OpenFaaS function với dữ liệu thành phố và quốc gia
//     fetch(url, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             city: cityName,      // Gửi tên thành phố
//             country: countryName // Gửi tên quốc gia
//         })
//     })
//     .then(response => response.json())
//     .then(data => {
//         if (data.error) {
//             console.error('Error:', data.error);
//             return;
//         }

//         console.log('Received data:', data);
//         console.log('Location:', data.location);
//         console.log('Weather:', data.weather);
//         console.log('Temperature:', data.temperature);

//         // Cập nhật dữ liệu thời tiết lên giao diện
//         weatherCountry.innerText = `${data.location}`;
//         temperature.innerHTML = `${data.temperature}°<b>C</b>`;
//         weatherDescription.innerText = data.weather;

//         // Đổi icon dựa trên mô tả thời tiết
//         if (data.weather.includes("cloud")) {
//             tempIcon.src = `tempicons/clouds.svg`;
//         } else if (data.weather.includes("rain")) {
//             tempIcon.src = `tempicons/rain.svg`;
//         } else if (data.weather.includes("sun")) {
//             tempIcon.src = `tempicons/sun.svg`;
//         } else {
//             tempIcon.src = `tempicons/default.svg`;
//         }
//     })
//     .catch(error => {
//         console.error('Request failed', error);
//     });

//     // Xóa giá trị ô nhập sau khi thực hiện yêu cầu
//     country.value = "";
//     city.value = "";
// });









// let country = document.querySelector("#country");
// let city = document.querySelector("#city"); 
// let check = document.querySelector("#check");
// let tempIcon = document.querySelector("#tempIcon");
// let weatherCountry = document.querySelector("#weatherCountry");
// let temperature = document.querySelector("#temperature");
// let weatherDescription = document.querySelector("#weatherDescription");

// check.addEventListener("click", () => {
//     let url = "http://34.28.46.237:30080/function/weather";
    
//     const cityName = city.value.trim();
//     const countryName = country.value.trim();
    
//     if (!cityName || !countryName) {
//         alert("Vui lòng nhập thành phố và quốc gia.");
//         return;
//     }
    
//     fetch(url, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             city: cityName,
//             country: countryName
//         })
//     })
//     .then(response => response.json())
//     .then(data => {
//         if (data.error) {
//             alert('Có lỗi: ' + data.error);
//             return;
//         }
        
//         console.log('Received data:', data);
        
//         // Kiểm tra và xử lý dữ liệu an toàn hơn
//         const location = `${data.city || ''}, ${data.country || ''}`;
//         const temp = data.temperature || 'N/A';
//         const desc = data.description || 'N/A';
        
//         // Cập nhật UI
//         weatherCountry.innerText = location;
//         temperature.innerHTML = `${temp}°<b>C</b>`;
//         weatherDescription.innerText = desc;
        
//         // Xử lý icon an toàn hơn
//         if (desc && typeof desc === 'string') {
//             const description = desc.toLowerCase();
            
//             // Xử lý các trường hợp thời tiết khác nhau
//             if (description.includes('cloud')) {
//                 tempIcon.src = 'tempicons/clouds.svg';
//             } else if (description.includes('rain')) {
//                 tempIcon.src = 'tempicons/rain.svg';
//             } else if (description.includes('drizzle')) {
//                 tempIcon.src = 'tempicons/drizzle.svg';
//             } else if (description.includes('sun') || description.includes('clear')) {
//                 tempIcon.src = 'tempicons/sun.svg';
//             } else if (description.includes('snow')) {
//                 tempIcon.src = 'tempicons/snow.svg';
//             } else if (description.includes('storm')) {
//                 tempIcon.src = 'tempicons/storm.svg';
//             } else if (description.includes('haze') || description.includes('mist') || description.includes('fog')) {
//                 tempIcon.src = 'tempicons/atmosphere.svg';  // Sử dụng atmosphere.svg cho các điều kiện khí quyển như haze
//             }
//         }

//     })
//     .catch(error => {
//         console.error('Request failed:', error);
//         alert('Không thể lấy dữ liệu thời tiết. Vui lòng thử lại sau.');
//     });
    
//     // Xóa input fields
//     country.value = "";
//     city.value = "";
// });




let country = document.querySelector("#country");
let city = document.querySelector("#city");
let check = document.querySelector("#check");
let tempIcon = document.querySelector("#tempIcon");
let weatherCountry = document.querySelector("#weatherCountry");
let temperature = document.querySelector("#temperature");
let weatherDescription = document.querySelector("#weatherDescription");
let feelsLike = document.querySelector("#feelsLike");
let humidity = document.querySelector("#humidity");

// Ẩn thông tin mặc định khi tải trang
document.addEventListener("DOMContentLoaded", () => {
    feelsLike.innerText = "Country: ";
    humidity.innerText = "City: ";
});

check.addEventListener("click", () => {
<<<<<<< HEAD
    let url = "http://34.28.46.237:30080/function/weather";
    
    const cityName = city.value.trim();
    const countryName = country.value.trim();
    
=======
    // Đường dẫn đến function trên OpenFaaS
    let url = "http://34.28.46.237:30080/function/weather";  // Cập nhật URL OpenFaaS

    // Lấy giá trị thành phố và quốc gia từ form nhập liệu
    const cityName = city.value.trim();
    const countryName = country.value.trim();

    // Kiểm tra nếu người dùng chưa nhập thông tin
>>>>>>> edb0c602203bd5a4d417a0b5747a07091ab2ab8c
    if (!cityName || !countryName) {
        alert("Vui lòng nhập thành phố và quốc gia.");
        return;
    }
<<<<<<< HEAD
    
=======

    // Gửi yêu cầu POST đến OpenFaaS function với dữ liệu thành phố và quốc gia
>>>>>>> edb0c602203bd5a4d417a0b5747a07091ab2ab8c
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
<<<<<<< HEAD
            city: cityName,
            country: countryName
=======
            city: cityName,      // Gửi tên thành phố
            country: countryName // Gửi tên quốc gia
>>>>>>> edb0c602203bd5a4d417a0b5747a07091ab2ab8c
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            alert('Có lỗi: ' + data.error);
            return;
        }
<<<<<<< HEAD
        
        console.log('Received data:', data);
        
        // Lấy dữ liệu từ API
        const location = `${data.city || 'Unknown'}, ${data.country || 'Unknown'}`;
        const temp = data.temperature || 'N/A';
        const desc = data.description || 'N/A';
        const wind = data.wind_speed || 'N/A'; //thêm đây nè
        // Cập nhật thông tin vào giao diện
        weatherCountry.innerText = location;
        temperature.innerText = `${temp}`; // Sửa lỗi hiển thị trùng lặp
        weatherDescription.innerText = desc;
        feelsLike.innerText = `Country: ${countryName}`;
        humidity.innerText = `City: ${cityName}`;
        description.innerText = `Description: ${desc}`; //thêm đây nè
        windSpeed.innerText = `Wind Speed: ${wind} m/s`; //thêm đây nè
        // Cập nhật icon thời tiết
        if (desc && typeof desc === 'string') {
            const description = desc.toLowerCase();
            
            if (description.includes('cloud')) {
                tempIcon.src = 'tempicons/clouds.svg';
            } else if (description.includes('rain')) {
                tempIcon.src = 'tempicons/rain.svg';
            } else if (description.includes('drizzle')) {
                tempIcon.src = 'tempicons/drizzle.svg';
            } else if (description.includes('sun') || description.includes('clear')) {
                tempIcon.src = 'tempicons/sun.svg';
            } else if (description.includes('snow')) {
                tempIcon.src = 'tempicons/snow.svg';
            } else if (description.includes('storm')) {
                tempIcon.src = 'tempicons/storm.svg';
            } else if (description.includes('haze') || description.includes('mist') || description.includes('fog')) {
                tempIcon.src = 'tempicons/atmosphere.svg';
            }
=======

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
>>>>>>> edb0c602203bd5a4d417a0b5747a07091ab2ab8c
        }
    })
    .catch(error => {
        console.error('Request failed:', error);
        alert('Không thể lấy dữ liệu thời tiết. Vui lòng thử lại sau.');
    });
    
    // Xóa input fields
    country.value = "";
    city.value = "";
});
