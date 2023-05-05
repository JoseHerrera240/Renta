import { useState } from "react";
import { Button, TextInput, View, StyleSheet, Text } from "react-native";

const Rent = () => {
    const [cel, setCel] = useState("");
    const [userName, setUserName] = useState("");
    const [plate, setPlate] = useState("");
    const [date, setDate] = useState("");
    const [image, setImage] = useState("");
    const [errorMessage, setErrormessage] = useState("");
    let rent= [
        { rentNumber: '3012170624', userName: 'Joselito', plateNumber: 'klm563', rentDate: '04/04/2365', image: '', state: true },
        { rentNumber: '3012170624', userName: 'Joselito', plateNumber: 'klm563', rentDate: '04/04/2365', image: '', state: true },
        { rentNumber: '3012170624', userName: 'Joselito', plateNumber: 'klm563', rentDate: '04/04/2365', image: '', state: true },
        { rentNumber: '3012170624', userName: 'Joselito', plateNumber: 'klm563', rentDate: '04/04/2365', image: '', state: false },
    ]

    const validation = () => {
        let plateValidation = rent.find(rent => rent.plateNumber === plate);
        if (plateValidation) {
            setErrormessage("Esa placa ya existe")
        } else if (
            cel !== "" &&
            userName !== "" &&
            date !== "" &&
            image !== "" &&
            plate !== ""
            ) {
                rent.push({
                    rentNumber: cel, userName: userName, plateNumber: plate, rentDate: date, image: image
                })
                setErrormessage("Doneee")
                setCel("")
                setImage("")
                setDate("")
                setPlate("")
                setUserName("")
                console.log('rent --->',rent)
            } else {
                setErrormessage("Ingresa todos los inputs")
            }
            
        }
    return (
        <View style={styles.cardLogin}>
            <TextInput
                style={styles.textInput}
                label="Cellphone"
                mode='outlined'
                onChangeText={cel => setCel(cel)}
                value={cel}
                placeholder="Celular"
            />
            <TextInput
                style={styles.textInput}
                label="UserName"
                mode='outlined'
                onChangeText={userName => setUserName(userName)}
                value={userName}
                placeholder="Nombre"
            />
            <TextInput
                style={styles.textInput}
                label="plate"
                mode='outlined'
                onChangeText={plate => setPlate(plate)}
                value={plate}
                placeholder="Placa"
            />
            <TextInput
                style={styles.textInput}
                label="Rent date"
                mode='outlined'
                onChangeText={date => setDate(date)}
                value={date}
                placeholder="Fecha"
            />
            <TextInput
                style={styles.textInput}
                label="image"
                mode='outlined'
                onChangeText={image => setImage(image)}
                value={image}
                placeholder="Image"
            />
            <Text>{errorMessage}</Text>
            <Button
                title="Registrar"
                style={{ borderRadius: '8px' }}
                icon="login"
                mode="contained"
                onPress={validation}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
    },
    bigBlue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    },
    red: {
        color: 'red',
    },
    textInput: {
        boxShadow: ' 2px 3px 12px black',
        padding: '10px',
        borderRadius: '8px',
        margin: '20px'
    },
    cardLogin: {
        marginTop: '30px',
        display: 'flex',
        alignItems: 'center'
    },
    viewLogin: {
        display: 'grid',
        gap: '17px',
        gridTemplateRows: 'repeat(2,36px) 40px',
        minWidth: '232px',
    }
});

export { Rent }