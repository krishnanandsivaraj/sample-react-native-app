import {View, Text} from 'react-native'
interface Card {
    cardNumber: string,
    style: object[],
}
export function Card(card: Card){
    return(
        <View style={card.style}><Text>card {card.cardNumber}</Text></View>
    )
}