import { useState } from "react";
import { Button, TextInput, View, StyleSheet, Text, CheckBox } from "react-native";
import Vehicles from '../../assets/Data/vehicles.json'
import swal from 'sweetalert';


const Rent = ({ navigation }) => {
    const [cel, setCel] = useState("");
    const [userName, setUserName] = useState("");
    const [plate, setPlate] = useState("");
    const [date, setDate] = useState("");
    const [image, setImage] = useState("");
    const [avaible, setAvaible] = useState(false);

    const validation = () => {
        let plateValidation = Vehicles.find(e => e.plateNumber === plate);
        if (plateValidation) {
            swal('¡Error!', 'Esa placa ya existe', 'error');
        } else if (
            cel !== "" &&
            userName !== "" &&
            date !== "" &&
            image !== "" &&
            plate !== ""
        ) {
            Vehicles.push({
                rentNumber: cel, userName: userName, plateNumber: plate, rentDate: date, image: image, state: avaible
            })
            navigation.navigate('Car')
            setCel("")
            setImage("")
            setDate("")
            setPlate("")
            setUserName("")
            setAvaible(false)
        } else {
            swal('¡Error!', 'Ingresa todos los inputs', 'error');
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
            <View style={styles.viewCheckBox}>
                <Text>Disponiblidad: </Text>
                <CheckBox
                    value={avaible}
                    onValueChange={setAvaible}
                />
            </View>

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
        marginTop: '70px',
        display: 'flex',
        alignItems: 'center'
    },
    viewLogin: {
        display: 'grid',
        gap: '17px',
        gridTemplateRows: 'repeat(2,36px) 40px',
        minWidth: '232px',
    },
    viewCheckBox:{
        display: "flex",
        flexDirection: "row",
        margin: "22px",
    }
});

export { Rent }