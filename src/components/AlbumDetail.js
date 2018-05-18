import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({ album }) => {

    const { title, artist, thumbnail_image } = album;

    const styles = {
        headerContentStyle: {
            flexDirection: 'column',
            justifyContent: 'space-around'
        },
        thumbnailStyle: {
            height: 50,
            width: 50
        }
    };

    return (<Card>
        <CardSection>
          <View>
                <Image 
                    style={styles.thumbnailStyle} 
                    source={{ uri: thumbnail_image }} 
                />
          </View>
          <View style={styles.headerContentStyle}>
            <Text>{title}</Text>
            <Text>{artist}</Text>
          </View>
        </CardSection>
      </Card>
    );   
};

export default AlbumDetail;
