import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import styles from './styles';

const ExploreMeetup = ({title,data}) => {
  return (
    <View style={styles.container}>
        <View style={styles.row}>
            <Text style={styles.title}>{title}</Text>
            <TouchableOpacity onPress={() =>{}}>
                <Text style={styles.textBtn}>{`View all >>`}</Text>
            </TouchableOpacity>
        </View>
        <FlatList
          data={data}
          
          renderItem={({item})=>{
            return(
                <View style={styles.item}>
                    <View>
                        <Image source={{uri: item.image_url}} style={styles.image} resizeMode="cover"/>
                    </View>
                    <View>
                       <Text>{item.name}</Text>
                    </View>
                </View>

            )
          }}
        />
    </View>
  );
}

export default ExploreMeetup;
