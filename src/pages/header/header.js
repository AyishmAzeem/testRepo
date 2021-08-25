import React from 'react';

import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import * as util from '../../utilities/index';
import styles from '../../styles';
import {Avatar} from 'react-native-elements';
import userImage from '../../assets/user-avatar.png';
class Header extends React.Component {
  static navigationOptions = () => ({
    header: null,
  });

  backIcon() {
    return (
      <Icon
        name="arrow-left"
        size={util.WP(6)}
        type="font-awesome"
        color="#000"
        onPress={() => {
          util.back();
        }}
      />
    );
  }

  render() {
    const {screenTitle}=this.props
    return (
      <View style={styles.common.headerContainer}>
        <View style={styles.common.commonPadding}>
        <View style={styles.common.headerIconContainer}>
          <Avatar
          size="medium"
            rounded

            source={userImage}
          />
          <Text style={[styles.common.textColor,styles.common.headingText]}>{screenTitle}</Text>
        </View>
        
        </View>
       
      </View>
    );
  }
}


export default Header;
