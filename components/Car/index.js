import { View } from "react-native";
import { StyleSheet } from "react-native";

const Car = () => {
    let cars = [
        { image: 'https://www.elcarrocolombiano.com/wp-content/uploads/2023/01/20230110-VENTAS-DE-AUTOS-DE-LUJO-2022-PORTADA.jpg', plate: 'phb07f', number: '3012170624', state: false },
        { image: 'https://www.motor.com.co/__export/1648747244353/sites/motor/img/2022/03/31/bugatti-divo_lady_bug-2020-1024-05_1_crop1648747243913.jpeg_1995808257.jpeg', plate: 'phb07o', number: '3012170624', state: true },
        { image: 'https://www.elcarrocolombiano.com/wp-content/uploads/2022/08/20220823-20-CARROS-PREMIUM-DE-LUJO-ALTA-GAMA-MAS-VENDIDOS-EN-COLOMBIA-JULIO-2022-01.jpg', plate: 'phb07u', number: '3012170624', state: false },
        { image: 'https://www.semana.com/resizer/MozkqOGMLQ1HKmHo3zYfUFSCxRc=/768x432/filters:format(jpg):quality(50)/cloudfront-us-east-1.images.arcpublishing.com/semana/3NXKTSVSNVB4NAYAFYTB4TR2OY.jpg', plate: 'phb57i', number: '3012170624', state: true },
        { image: 'https://www.semana.com/resizer/MozkqOGMLQ1HKmHo3zYfUFSCxRc=/768x432/filters:format(jpg):quality(50)/cloudfront-us-east-1.images.arcpublishing.com/semana/3NXKTSVSNVB4NAYAFYTB4TR2OY.jpg', plate: 'phb67i', number: '3012170624', state: true },
        { image: 'https://www.semana.com/resizer/MozkqOGMLQ1HKmHo3zYfUFSCxRc=/768x432/filters:format(jpg):quality(50)/cloudfront-us-east-1.images.arcpublishing.com/semana/3NXKTSVSNVB4NAYAFYTB4TR2OY.jpg', plate: 'phb77i', number: '3012170624', state: true },
        { image: 'https://www.semana.com/resizer/MozkqOGMLQ1HKmHo3zYfUFSCxRc=/768x432/filters:format(jpg):quality(50)/cloudfront-us-east-1.images.arcpublishing.com/semana/3NXKTSVSNVB4NAYAFYTB4TR2OY.jpg', plate: 'phb97i', number: '3012170624', state: true },
    ]

    return (
        <View style={styles.viewParent}>
            {cars.map(e => {
                return (
                    <div key={e.plate} style={styles.divCard}>
                        <img src={e.image} width={100} />
                        <p>{e.plate}</p>
                        <p>{e.number}</p>
                        <p>{e.state === true ? 'Disponible' : 'En renta'}</p>
                    </div>
                )
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    viewParent: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '22px',
        margin: '9px',
    },
    divCard: {
        border: '1px solid black',
        borderRadius: '8px'
    }
})

export { Car }