import React, { Component } from "react";
import { View, Text, Alert, FlatList, ActivityIndicator, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { fetchData } from "../../redux/actions/dataActions";
import { RootStackParamList } from "../types";
import { StackScreenProps } from "@react-navigation/stack";
import CustomButton from "../../components/CustomButton/CustomButton";
import styles from "./styles";
import CustomSlideUpPanel from "../../components/CustomSlideUpPanel/CustomSlideUpPanel";
import LinearGradient from "react-native-linear-gradient";

type Props = StackScreenProps<RootStackParamList, 'Home'> & {
  fetchData: () => void;
  loading: boolean;
  data: any[];
  error: string | null;
};

interface State {
  selectedBook: any | null;
  isPanelVisible: boolean;
}

class HomePage extends Component<Props, State> {
  constructor(props: Props){
    super(props);
    this.state = {
      selectedBook: null,
      isPanelVisible: false,
    };
  } 

  componentDidMount() {
     this.props.fetchData();
  }

  handleLogout = () => {
    Alert.alert("Logout", "Are you sure you want to logout?", [
      {
        text: "Cancel",
        style: "cancel"
      },
      {
        text: "OK",
        onPress: () => this.props.navigation.navigate('Login')
      }
    ]);
  };

  handleBookPress = (book: any) => {
    console.log("Selected book:", book);
    this.setState({selectedBook: book, isPanelVisible: true});
  };

  closePanel = () => {
    this.setState({ isPanelVisible: false, selectedBook: null});
  };

  onAddToCart = (book: any) => {
    Alert.alert("Added to Cart", `${book.title} has been added to your cart!`);
    this.closePanel();
  };

  renderItem = ({ item }: { item: any }) => (
    <TouchableOpacity style={styles.itemContainer} onPress={() => this.handleBookPress(item)}>
      <Text style={styles.itemTitle}>{item.title}</Text>
      <Text style={styles.itemAuthor}>{item.author}</Text>
    </TouchableOpacity>
  );

  sampleFunction = () => {
    console.log('Sample function.');
  }

  render() {
    const { loading, data, error } = this.props;
    const { isPanelVisible, selectedBook } = this.state;

    return (
      
      <LinearGradient colors={['#e1bee7', '#f5f5f5']} style={styles.container}>
        <Text style={styles.title}>Welcome to the Home Page</Text>

        {loading && <ActivityIndicator size="large" color="#0000ff" />}

        {error && <Text style={styles.error}>{error}</Text>}

         {/*  create a separate render item function */}
        <FlatList 
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={this.renderItem}
        />
       
        <View style={styles.buttonContainer}>
          <CustomButton
            title='Logout'
            onPress={this.handleLogout}
          />
        </View>
        {isPanelVisible && (
          <CustomSlideUpPanel 
            book={selectedBook}
            onClose={this.closePanel}
            onAddToCart={this.onAddToCart}
            loading={loading}
          />
        )}
      </LinearGradient>
    );
  }
}

//Map state and dispatch to props
const mapStateToProps = (state: any) => ({
  loading: state.data.loading,
  data: state.data.data,
  error: state.data.error,
});

const mapDispatchToProps = {
  fetchData,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
