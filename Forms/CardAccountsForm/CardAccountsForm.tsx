import React, { Component } from 'react';
import { View } from 'react-native';
import CustomHeader from '../../components/CustomHeader/CustomHeader'; 
import CustomTabs from '../../components/Tabs/CustomTabs';
import styles from './styles';

interface CardAccountsFormState {
   activeTab: string;
}

class CardAccountsForm extends Component<{}, CardAccountsFormState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      activeTab: 'CARTE',
    };
  }

  handleSelectTab = (tab: string) => {
    this.setState({ activeTab: tab });
  };

  handleLeftIconPress = () => {
    console.log('Left icon (Headset) pressed!');
  };

  handleRightIconPress = () => {
    console.log('Right icon (Eye) pressed!');
  };

  handleBackPress = () => {
    console.log('Back pressed!');
  };

  render() {
    const { activeTab } = this.state;

    return (
      <View style={styles.container}>
        <CustomHeader 
          title="Carte e Conti"
          showBackButton={false}           
          leftIcon='headset-outline'      
          rightIcon='eye-outline'
          backIcon='arrow-back-outline'         
          iconPosition='both' 
          onBackPress={this.handleBackPress}            
          onLeftIconPress={this.handleLeftIconPress}  
          onRightIconPress={this.handleRightIconPress} 
        />
        <CustomTabs activeTab={activeTab} onSelectTab={this.handleSelectTab} />
      </View>
    );
  }
}

export default CardAccountsForm;
