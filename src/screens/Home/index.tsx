import React from 'react';
import { View, Text, TextInput, Image } from 'react-native';
import { styles } from './styles';
import Rock from './rock.png';
import Pop from './pop.png';
import Icon from 'react-native-vector-icons/FontAwesome';

export const Home = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Procurar</Text>

            <View style={styles.header}>
                <Icon name="search" size={20} color="#fff" />
                 <TextInput
                style={styles.input}
                placeholder="Artistas, músicas ou podcasts"
                placeholderTextColor="#ccc"
            />
                
            </View>
            <Text style={styles.subtitle}>Seus top generos musicais</Text>

            <View style={[styles.card, { backgroundColor: '#E13300' }]}>
                <Text style={styles.text}>ROCK</Text>
                <Image source={Rock}
                    style={styles.image}
                />
            </View>

            <View style={[styles.card, { backgroundColor: '#8A3FFC' }]}>
                <Text style={styles.text}>POP</Text>
                <Image source={Pop}
                    style={styles.image}
                />
            </View>
        </View>
    );
};
