document.addEventListener('DOMContentLoaded',function (){
    document.querySelector('form').onsubmit = function (){
        const sensor_type1 = document.querySelector('#sensor_type').value;
        const sensor_id1 = document.querySelector('#sensor_id').value;
        switch(sensor_type1) {
            case "flow-transducer":
                switch(sensor_id1) {
                    case "0":
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
                    case "1":
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
                        case "2":
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
                        default:
                            fetch('https://midterm-exam-010723313-2022.herokuapp.com/device?sensor_type=flow-transducer')
                            .then(response => response.json())
                            .then(data => {
                                console.log(data);
                                const sensor_type = document.querySelector('#sensor_id').value;
                                const user0 = data[0];
                                const user0_1 = data[0]["plant-site"];
                                const user1 = data[1];
                                const user1_1 = data[1]["plant-site"];
                                const user2 = data[2];
                                const user2_1 = data[2]["plant-site"];
                                document.querySelector('#result').innerHTML = `Name:${user0.name}, Plantsite:${user0_1}, Range:(${user0.range}), Type:${user0.type}, Unit:${user0.unit}, Value:${user0.value}

                                                                                Name:${user1.name}, Plantsite:${user1_1}, Range:(${user1.range}), Type:${user1.type}, Unit:${user1.unit}, Value:${user1.value}

                                                                                Name:${user2.name}, Plantsite:${user2_1}, Range:(${user2.range}), Type:${user2.type}, Unit:${user2.unit}, Value:${user2.value}`;
                            })
                            .catch(error => {
                                console.log('Error:', error);
                            });
                            return false;
                            break;
                }
            case "level-transducer":
                switch(sensor_id1) {
                    case "0":
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
                    case "1":
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
                        case "2":
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
                        default:
                            fetch('https://midterm-exam-010723313-2022.herokuapp.com/device?sensor_type=level-transducer')
                            .then(response => response.json())
                            .then(data => {
                                console.log(data);
                                const sensor_type = document.querySelector('#sensor_id').value;
                                const user0 = data[0];
                                const user0_1 = data[0]["plant-site"];
                                const user1 = data[1];
                                const user1_1 = data[1]["plant-site"];
                                const user2 = data[2];
                                const user2_1 = data[2]["plant-site"];
                                document.querySelector('#result').innerHTML = `Name:${user0.name}, Plantsite:${user0_1}, Range:(${user0.range}), Type:${user0.type}, Unit:${user0.unit}, Value:${user0.value}

                                                                                Name:${user1.name}, Plantsite:${user1_1}, Range:(${user1.range}), Type:${user1.type}, Unit:${user1.unit}, Value:${user1.value}
                                                                                
                                                                                Name:${user2.name}, Plantsite:${user2_1}, Range:(${user2.range}), Type:${user2.type}, Unit:${user2.unit}, Value:${user2.value}`;
                            })
                            .catch(error => {
                                console.log('Error:', error);
                            });
                            return false;
                            break;
                }
            case "temperature-transducer":
                switch(sensor_id1) {
                    case "0":
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
                    case "1":
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
                        case "2":
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
                        default:
                            fetch('https://midterm-exam-010723313-2022.herokuapp.com/device?sensor_type=temperature-transducer')
                            .then(response => response.json())
                            .then(data => {
                                console.log(data);
                                const sensor_type = document.querySelector('#sensor_id').value;
                                const user0 = data[0];
                                const user0_1 = data[0]["plant-site"];
                                const user1 = data[1];
                                const user1_1 = data[1]["plant-site"];
                                const user2 = data[2];
                                const user2_1 = data[2]["plant-site"];
                                document.querySelector('#result').innerHTML = `Name:${user0.name}, Plantsite:${user0_1}, Range:(${user0.range}), Type:${user0.type}, Unit:${user0.unit}, Value:${user0.value}
    
                                                                                Name:${user1.name}, Plantsite:${user1_1}, Range:(${user1.range}), Type:${user1.type}, Unit:${user1.unit}, Value:${user1.value}
                                                                                    
                                                                                Name:${user2.name}, Plantsite:${user2_1}, Range:(${user2.range}), Type:${user2.type}, Unit:${user2.unit}, Value:${user2.value}`;
                            })
                            .catch(error => {
                                console.log('Error:', error);
                            });
                            return false;
                            break;
                }
            case "pressure-transducer":
                switch(sensor_id1) {
                    case "0":
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
                    case "1":
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
                        case "2":
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
                            fetch('https://midterm-exam-010723313-2022.herokuapp.com/device?sensor_type=pressure-transducer')
                            .then(response => response.json())
                            .then(data => {
                                console.log(data);
                                const sensor_type = document.querySelector('#sensor_id').value;
                                const user0 = data[0];
                                const user0_1 = data[0]["plant-site"];
                                const user1 = data[1];
                                const user1_1 = data[1]["plant-site"];
                                const user2 = data[2];
                                const user2_1 = data[2]["plant-site"];
                                document.querySelector('#result').innerHTML = `Name:${user0.name}, Plantsite:${user0_1}, Range:(${user0.range}), Type:${user0.type}, Unit:${user0.unit}, Value:${user0.value}
    
                                                                                Name:${user1.name}, Plantsite:${user1_1}, Range:(${user1.range}), Type:${user1.type}, Unit:${user1.unit}, Value:${user1.value}
                                                                                    
                                                                                Name:${user2.name}, Plantsite:${user2_1}, Range:(${user2.range}), Type:${user2.type}, Unit:${user2.unit}, Value:${user2.value}`;
                            })
                            .catch(error => {
                                console.log('Error:', error);
                            });
                            return false;
                            break;
                }        
            default:
                document.querySelector('#result2').innerHTML = "Invalid sensor_type.";
        }
    }
    
});
