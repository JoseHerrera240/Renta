import { useState } from "react";
import { Button, TextInput, View } from "react-native/types";

const Rent = () => {
    const [cel, setCel] = useState("");
    const [userName, setUserName] = useState("");
    const [plate, setPlate] = useState("");
    const [date, setDate] = useState("");
    let rent = [
        { rentNumber: '3012170624', userName: 'Joselito', plateNumber: 'klm563', rentDate: '04/04/2365' },
        { rentNumber: '3012170624', userName: 'Joselito', plateNumber: 'klm563', rentDate: '04/04/2365' },
        { rentNumber: '3012170624', userName: 'Joselito', plateNumber: 'klm563', rentDate: '04/04/2365' },
        { rentNumber: '3012170624', userName: 'Joselito', plateNumber: 'klm563', rentDate: '04/04/2365' },
    ]
    return (
        <View>
            <TextInput
                style={styles.textInput}
                label="Cellphone"
                mode='outlined'
                onChangeText={cel => setCel(cel)}
                value={cel}
            />
            <TextInput
                style={styles.textInput}
                label="UserName"
                mode='outlined'
                onChangeText={userName => setUserName(userName)}
                value={userName}
            />
            <TextInput
                style={styles.textInput}
                label="plate"
                mode='outlined'
                onChangeText={plate => setPlate(plate)}
                value={plate}
            />
            <TextInput
                style={styles.textInput}
                label="Rent date"
                mode='outlined'
                onChangeText={date => setDate(date)}
                value={date}
            />
            <Button></Button>
        </View>
    );
}

export { Rent }