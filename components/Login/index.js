import { useState } from "react";
import { Button, TextInput, View, Text, StyleSheet } from "react-native";
import { Link } from '@react-navigation/native';

const Login = ({ navigation }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errormess, setErrormess] = useState("");

    let users = [
        { email: "jj", name: "Jose", password: "jj" },
        { email: "luisperalta@gmail.com", name: "peralta", password: "123" },
    ]
    return (
        <View style={styles.cardLogin}>
            <View style={styles.viewLogin}>
                <TextInput
                    style={styles.textInput}
                    label="Correo Electronico"
                    mode='outlined'
                    onChangeText={email => setEmail(email)}
                    value={email}
                    placeholder="Correo"
                />

                <TextInput
                    style={styles.textInput}
                    label="contraseña"
                    mode='outlined'
                    //   right={<TextInput.Icon icon="acount"/>}
                    onChangeText={password => setPassword(password)}
                    value={password}
                    secureTextEntry
                    placeholder="Contraseña"
                />

                <Button
                    style={{ borderRadius: '8px' }}
                    icon="login"
                    mode="contained"
                    onPress={() => {
                        let findUser = users.find(usr => usr.email == email && usr.password == password);
                        if (findUser != undefined) {
                            setErrormess("siii")
                            const { name, email } = findUser
                            setEmail('');
                            setPassword('');
                            navigation.navigate('Car', { name: name, email: email })
                        } else {
                            setErrormess("Noooo")
                        }
                    }}
                    title="Iniciar sesión"
                />
                <Text style={{ color: 'red' }}>{errormess}</Text>
            </View>
            <Button>¿Aún no te has registrado?</Button>
        </View>
    )
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
        marginTop: '120px',
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

export { Login }