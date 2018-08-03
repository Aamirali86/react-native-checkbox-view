import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Checkbox } from 'react-native-checkbox-view';

export default class App extends React.Component {

  constructor() {
    super()
    this.items = ["React Native", "Swift", "Objective-c", "Java", "Javascript"]
    this.colors = ["#deb887", "#5f9ea0", "#ff7f50", "#8a2be2", "#008000"]

    this.state = {
      isSelected: false
    }

  }

  render() {
    return (
      <View style = {styles.container} >

       <Text style={styles.heading}>Check box</Text>
        {
          this.items.map((item, index) => {
            return (
              <View key = {index} style = {styles.listItem} >
                {this.renderCheckBox(this.colors[index])}
              <Text>{item}</Text>
            </View>
            );
          })
       }

      <Text style={styles.heading}>Custom check box</Text>

      <View style={styles.listItem} >
       {
         this.renderCheckBoxCustom(require('./img/checkbox-empty.png'), require('./img/checkbox-pre-selected.png'))
       }
         <Text>Python</Text>
      </View>

      <View style={styles.listItem} >
       {
         this.renderCheckBoxCustom(require('./img/empty_checkbox.png'), require('./img/fill_checkbox.png'))
       }
         <Text>Ruby</Text>
      </View>

      </View>
    );
  }

  onClick() {
    this.setState({isSelected: !this.state.isSelected})
  }

  renderCheckBox(color) {
    return (
      <Checkbox
        isSelected={this.state.isSelected}
        style={{padding: 5}}
        checkBoxColor={color}
        onClick={(data) => this.onClick(data)} />
    )
  }

  renderCheckBoxCustom(unCheckedImage, checkedImage) {
    return (
      <Checkbox
        isSelected={this.state.isSelected}
        style={{padding: 5}}
        checkedImage={checkedImage}
        unCheckedImage={unCheckedImage}
        onClick={(data) => this.onClick(data)} />
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginLeft: 20,
    marginTop: 100
  },
  heading: {
    marginTop: 30,
    marginBottom: 10,
    fontWeight: 'bold',
    fontSize: 24
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
  }
});
