import { StyleSheet, View, Text } from 'react-native'

const DeletePost = ({ getText }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.textBold}>
                {getText}
            </Text>
        </View>
    )
}

export default DeletePost;

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'pink',
        width: '100%',
        paddingVertical: 100,
        alignItems: 'center',
        marginTop: 50
    },
    textBold: {
        fontWeight: 'bold',
        color: '#FFFF'
    }
});