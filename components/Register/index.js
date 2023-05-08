import { useState } from "react";
import { Button, TextInput, View, StyleSheet, Text } from "react-native";
import Users from '../../assets/Data/users.json'

const Register = ({ navigation }) => {
    const [identefication, setIdentefication] = useState("");
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrormessage] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");

    const validation = () => {
        if (false) {
            setErrormessage("Esa placa ya existe")
        } else if (
            identefication !== "" &&
            userName !== "" &&
            email !== "" &&
            password !== "" &&
            repeatPassword !== ""
        ) {
            Users.push({
                identefication: identefication, userName: userName, email: email, password: password
            })
            setIdentefication("")
            setUserName("")
            setEmail("")
            setPassword("")
            setRepeatPassword("")
            navigation.navigate('HomeTabs')
        } else {
            setErrormessage("Ingresa todos los inputs")
        }

    }
    return (
        <View style={styles.parentCardLogin}>
            <View style={styles.cardLogin}>
                <TextInput
                    style={styles.textInput}
                    label="identefication"
                    mode='outlined'
                    onChangeText={identefication => setIdentefication(identefication)}
                    value={identefication}
                    placeholder="Identificación"
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
                    label="eMail"
                    mode='outlined'
                    onChangeText={email => setEmail(email)}
                    value={email}
                    placeholder="Correo"
                />
                <TextInput
                    style={styles.textInput}
                    label="password"
                    mode='outlined'
                    onChangeText={password => setPassword(password)}
                    value={password}
                    placeholder="Ingresa una contraseña"
                />
                <TextInput
                    style={styles.textInput}
                    label="repeatPassword"
                    mode='outlined'
                    onChangeText={repeatPassword => setRepeatPassword(repeatPassword)}
                    value={repeatPassword}
                    placeholder="Valida la contraseña"
                />
                <Text>{errorMessage}</Text>
                <Button
                    title="Enviar"
                    style={{ borderRadius: '8px' }}
                    icon="login"
                    mode="contained"
                    onPress={validation}
                />
                <Button
                    title="Volver"
                    style={{ borderRadius: '8px' }}
                    icon="login"
                    mode="contained"
                    onPress={() => {
                            navigation.navigate('Login')
                    }}
                />
            </View>
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
    },
    cardLogin: {
        display: 'grid',
        gridTemplateRows: 'repeat(5,36px) 40px',
        gap: '17px',
    },
    parentCardLogin: {
        marginTop: '120px',
        display: 'flex',
        alignItems: 'center'
    },
    viewLogin: {
        display: 'grid',
        gap: '17px',
        gridTemplateRows: 'repeat(2,36px) 40px 40px',
        minWidth: '232px',
    }
});

export { Register }