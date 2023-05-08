import { SafeAreaView, ScrollView, View } from "react-native";
import { StyleSheet } from "react-native";
import Vehicles from '../../assets/Data/vehicles.json'
import { useEffect, useState } from "react";
import { MaterialIcons } from '@expo/vector-icons';


const Car = () => {
    const [newVehicles, setNewVehicles] = useState(Vehicles);
    useEffect(() => {
        // Se llama cada vez que se monta o actualiza el componente.
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
                                <p style={{fontWeight:'bold'}}>Golf GTI</p>
                                <p> Placa: <span  style={{fontWeight:'bold'}}>{e.plateNumber}</span></p>
                                <p>Celular: <span style={{fontWeight:'bold'}}>{e.rentNumber}</span></p>
                                <p>{e.state === true ? <MaterialIcons name="check" size={22} /> : <MaterialIcons name="not-interested" size={22} />}</p>
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
    }
})

export { Car }