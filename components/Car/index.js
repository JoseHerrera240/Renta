import { SafeAreaView, ScrollView, View } from "react-native";
import { StyleSheet } from "react-native";
import Vehicles from '../../assets/Data/vehicles.json'
import { useEffect, useState } from "react";
import { MaterialIcons } from '@expo/vector-icons';
import { Button } from "react-native-web";


const Car = () => {
    const [newVehicles, setNewVehicles] = useState(Vehicles);
    useEffect(() => {
        setNewVehicles(Vehicles);
    }, [newVehicles]);
    return (
        <ScrollView style={{ flex: 1 }}>
            <View overflow={true} >
                {newVehicles.map(e => {
                    return (
                        <div key={e.plateNumber} style={styles.divCard}>
                            <img src={e.image} width={'100%'} />
                            <div style={styles.textCar}>
                                <p style={{ fontWeight: 'bold' }}>{e.userName}</p>
                                <p> Placa: <span style={{ fontWeight: 'bold' }}>{e.plateNumber}</span></p>
                                <p>Celular: <span style={{ fontWeight: 'bold' }}>{e.rentNumber}</span></p>
                                <div style={styles.renting}>
                                    <p>{e.state === true ? <MaterialIcons name="check" size={22} /> : <MaterialIcons name="not-interested" size={22} />}</p>
                                    <Button
                                        title="Rentar"
                                        style={e.state === true ? styles.buttonAvailable : styles.buttonDisabled}
                                    />
                                </div>
                            </div>
                        </div>
                    )
                })}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    viewParent: {
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: '22px',
        margin: '9px',
        overflow: 'scroll'
    },
    divCard: {
        boxShadow: '#7b7979 0px 0px 20px 0px',
    },
    textCar: {
        display: 'grid',
        padding: '0 18px',
        gridTemplateColumns: '1fr 1fr',
        gridTemplateRows: '1fr 1fr',
        padding: '0px 17px'
    },
    renting:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 16px 0 0',
    }
})

export { Car }