document.addEventListener('DOMContentLoaded',function (){
    document.querySelector('form').onsubmit = function (){
        const sensor_type1 = document.querySelector('#sensor_type').value;
        switch(sensor_type1) {
            case "flow-transducer":
                fetch('https://midterm-exam-010723313-2022.herokuapp.com/device?sensor_type=flow-transducer')
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    const sensor_type = document.querySelector('#sensor_id').value;
                    const user = data[0];
                    const user2 = data[0]["plant-site"];
                    document.querySelector('#result').innerHTML = `Name:${user.name}, Plantsite:${user2}, Range:(${user.range}), Type:${user.type}, Unit:${user.unit}, Value:${user.value}`;
                })
                .catch(error => {
                    console.log('Error:', error);
                });
                return false;
                break;
            case "flow-transducer":
                fetch('https://midterm-exam-010723313-2022.herokuapp.com/device?sensor_type=flow-transducer')
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    const sensor_type = document.querySelector('#sensor_id').value;
                    const user = data[1];
                    const user2 = data[1]["plant-site"];
                    document.querySelector('#result').innerHTML = `Name:${user.name}, Plantsite:${user2}, Range:(${user.range}), Type:${user.type}, Unit:${user.unit}, Value:${user.value}`;
                })
                .catch(error => {
                    console.log('Error:', error);
                });
                return false;
                break;
            case "flow-transducer":
                fetch('https://midterm-exam-010723313-2022.herokuapp.com/device?sensor_type=flow-transducer')
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    const sensor_type = document.querySelector('#sensor_id').value;
                    const user = data[2];
                    const user2 = data[2]["plant-site"];
                    document.querySelector('#result').innerHTML = `Name:${user.name}, Plantsite:${user2}, Range:(${user.range}), Type:${user.type}, Unit:${user.unit}, Value:${user.value}`;
                })
                .catch(error => {
                    console.log('Error:', error);
                });
                return false;
                break;
            case "level-transducer":
                fetch('https://midterm-exam-010723313-2022.herokuapp.com/device?sensor_type=level-transducer')
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    const sensor_type = document.querySelector('#sensor_id').value;
                    const user = data[0];
                    const user2 = data[0]["plant-site"];
                    document.querySelector('#result').innerHTML = `Name:${user.name}, Plantsite:${user2}, Range:(${user.range}), Type:${user.type}, Unit:${user.unit}, Value:${user.value}`;
                })
                .catch(error => {
                    console.log('Error:', error);
                });
                return false;
                break;
            case "level-transducer":
                fetch('https://midterm-exam-010723313-2022.herokuapp.com/device?sensor_type=level-transducer')
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    const sensor_type = document.querySelector('#sensor_id').value;
                    const user = data[1];
                    const user2 = data[1]["plant-site"];
                    document.querySelector('#result').innerHTML = `Name:${user.name}, Plantsite:${user2}, Range:(${user.range}), Type:${user.type}, Unit:${user.unit}, Value:${user.value}`;
                })
                .catch(error => {
                    console.log('Error:', error);
                });
                return false;
                break;
            case "level-transducer":
                fetch('https://midterm-exam-010723313-2022.herokuapp.com/device?sensor_type=level-transducer')
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    const sensor_type = document.querySelector('#sensor_id').value;
                    const user = data[2];
                    const user2 = data[2]["plant-site"];
                    document.querySelector('#result').innerHTML = `Name:${user.name}, Plantsite:${user2}, Range:(${user.range}), Type:${user.type}, Unit:${user.unit}, Value:${user.value}`;
                })
                .catch(error => {
                    console.log('Error:', error);
                });
                return false;
                break;
            case "temperature-transducer":
                fetch('https://midterm-exam-010723313-2022.herokuapp.com/device?sensor_type=temperature-transducer')
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    const sensor_type = document.querySelector('#sensor_id').value;
                    const user = data[0];
                    const user2 = data[0]["plant-site"];
                    document.querySelector('#result').innerHTML = `Name:${user.name}, Plantsite:${user2}, Range:(${user.range}), Type:${user.type}, Unit:${user.unit}, Value:${user.value}`;
                })
                .catch(error => {
                    console.log('Error:', error);
                });
                return false;
                break;
            case "temperature-transducer":
                fetch('https://midterm-exam-010723313-2022.herokuapp.com/device?sensor_type=temperature-transducer')
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    const sensor_type = document.querySelector('#sensor_id').value;
                    const user = data[1];
                    const user2 = data[1]["plant-site"];
                    document.querySelector('#result').innerHTML = `Name:${user.name}, Plantsite:${user2}, Range:(${user.range}), Type:${user.type}, Unit:${user.unit}, Value:${user.value}`;
                })
                .catch(error => {
                    console.log('Error:', error);
                });
                return false;
                break;
            case "temperature-transducer":
                fetch('https://midterm-exam-010723313-2022.herokuapp.com/device?sensor_type=temperature-transducer')
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    const sensor_type = document.querySelector('#sensor_id').value;
                    const user = data[2];
                    const user2 = data[2]["plant-site"];
                    document.querySelector('#result').innerHTML = `Name:${user.name}, Plantsite:${user2}, Range:(${user.range}), Type:${user.type}, Unit:${user.unit}, Value:${user.value}`;
                })
                .catch(error => {
                    console.log('Error:', error);
                });
                return false;
                break;
            case "pressure-transducer":
                fetch('https://midterm-exam-010723313-2022.herokuapp.com/device?sensor_type=pressure-transducer')
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    const sensor_type = document.querySelector('#sensor_id').value;
                    const user = data[0];
                    const user2 = data[0]["plant-site"];
                    document.querySelector('#result').innerHTML = `Name:${user.name}, Plantsite:${user2}, Range:(${user.range}), Type:${user.type}, Unit:${user.unit}, Value:${user.value}`;
                })
                .catch(error => {
                    console.log('Error:', error);
                });
                return false;
                break;
            case "pressure-transducer":
                fetch('https://midterm-exam-010723313-2022.herokuapp.com/device?sensor_type=pressure-transducer')
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    const sensor_type = document.querySelector('#sensor_id').value;
                    const user = data[1];
                    const user2 = data[1]["plant-site"];
                    document.querySelector('#result').innerHTML = `Name:${user.name}, Plantsite:${user2}, Range:(${user.range}), Type:${user.type}, Unit:${user.unit}, Value:${user.value}`;
                })
                .catch(error => {
                    console.log('Error:', error);
                });
                return false;
                break;
            case "pressure-transducer":
                fetch('https://midterm-exam-010723313-2022.herokuapp.com/device?sensor_type=pressure-transducer')
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    const sensor_type = document.querySelector('#sensor_id').value;
                    const user = data[2];
                    const user2 = data[2]["plant-site"];
                    document.querySelector('#result').innerHTML = `Name:${user.name}, Plantsite:${user2}, Range:(${user.range}), Type:${user.type}, Unit:${user.unit}, Value:${user.value}`;
                })
                .catch(error => {
                    console.log('Error:', error);
                });
                return false;
                break;
            default:
                document.querySelector('#result2').innerHTML = "Invalid sensor_type and sensor_id.";
        }
    }
});